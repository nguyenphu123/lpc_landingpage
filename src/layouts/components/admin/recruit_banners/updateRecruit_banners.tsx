"use client";

import React, { useState } from "react";

import { useForm } from "@mantine/form";

import { TextInput, Button, Box, Grid } from "@mantine/core";

import Image from "next/image";

import { UpdateRecruitBanners } from "@/lib/updateData";
import TextEditor from "../RichTextEditor";
import { useSession } from "next-auth/react";

import ToastGenerator from "@/lib/toast-tify";

function UpdateRecruitBannersForm({ recruitBanner, handleSaveClick }) {
  let { data: session, status } = useSession();

  const [successMessage, setSuccessMessage] = useState<string | null>(null); // Updated type declaration
  const [selectedImage, setSelectedImage] = useState(null); // Store the selected image

  const [imagePreview, setImagePreview] = useState("");
  const [isSucess, setIsSucess] = useState(false);

  const [sucessMessage, setSucessMessage] = useState("");
  const [descriptionEn, setDescriptionEn]: any = useState(
    recruitBanner.descriptionEn,
  );
  const [description, setDescription]: any = useState(
    recruitBanner.description,
  );
  const form = useForm({
    initialValues: JSON.parse(JSON.stringify(recruitBanner)),
  });

  const onSubmitForm = async (values) => {
    if (selectedImage) {
      // If an image is selected, upload it first

      const formData = new FormData();

      formData.append("file", selectedImage);

      formData.append("upload_preset", "ml_default");

      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/derjssgq9/image/upload",

          {
            method: "POST",

            body: formData,
          },
        );

        const data = await response.json();

        values.src = data.secure_url; // Store the uploaded image URL in the form data
      } catch (error) {
        console.error(error);
      }
    }
    values["description"] = description.toString();
    values["descriptionEn"] = descriptionEn.toString();

    // Continue with the rest of the form submission

    let returnResult = await UpdateRecruitBanners(values, session);

    if (returnResult.success != undefined) {
      showToast(returnResult.msg);

      handleSaveClick();
    }
  };
  const onImageChange = (e) => {
    const file = e.target.files[0];

    setSelectedImage(file);

    // Tạo URL xem trước ảnh và đặt nó vào trạng thái

    const imageUrl = URL.createObjectURL(file);

    setImagePreview(imageUrl);
  };
  const showToast = (msg) => {
    setIsSucess(true);

    setSucessMessage(msg);

    setTimeout(() => {
      setIsSucess(false);

      setSucessMessage("");
    }, 10000);
  };
  const onHandleChange = (e: any) => {
    if (e.language == "vn") {
      setDescription(e.data);
    } else {
      setDescriptionEn(e.data);
    }

    // form.insertListItem(`content.${e.idcontent}.description.${e.id}`, e);
  };
  return (
    // <div style={{ maxHeight: "500px", overflowY: "auto" }}>

    <div style={{ maxHeight: "500px", overflowY: "auto" }}>
      {isSucess ? <ToastGenerator message={sucessMessage} /> : null}

      <Box maw={"100%"} mx="auto">
        <form onSubmit={form.onSubmit((values) => onSubmitForm(values))}>
          <h3 className="flex justify-center">Update Recruit Banner</h3>

          <Grid gutter="lg">
            <Grid.Col span={12}>
              <input type="file" accept="image/*" onChange={onImageChange} />

              {/* Hiển thị xem trước ảnh */}

              {imagePreview && (
                <div className="flex justify-center">
                  <Image
                    src={imagePreview}
                    alt="Preview"
                    width="200"
                    height="200"
                  />
                </div>
              )}
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput
                label="Title"
                placeholder="Title"
                {...form.getInputProps("title")}
              />
              <TextInput
                label="Title (English)"
                placeholder="Title (English)"
                {...form.getInputProps("titleEn")}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput
                label="number of recruitment"
                placeholder="number of recruitment"
                {...form.getInputProps("numberOfRecruitment")}
              />
              <TextInput
                label="number of recruitment (English)"
                placeholder="number of recruitment (English)"
                {...form.getInputProps("numberOfRecruitmentEn")}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput
                label="salary"
                placeholder="salary"
                {...form.getInputProps("salary")}
              />
              <TextInput
                label="salary (English)"
                placeholder="salary (English)"
                {...form.getInputProps("salaryEn")}
              />
            </Grid.Col>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-6 justify-center">
              <TextEditor
                onChange={onHandleChange}
                content={description}
                contentEn={descriptionEn}
              />
            </div>
            <Grid.Col span={6} className="flex justify-end mt-6">
              {/* Thêm class CSS để đặt nút submit ở góc phải */}

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded mr-2"
              >
                Submit
              </button>
            </Grid.Col>
          </Grid>
        </form>

        {successMessage && (
          <div style={{ marginTop: "16px", color: "green" }}>
            {successMessage}
          </div>
        )}
      </Box>
    </div>

    // </div>
  );
}

export default UpdateRecruitBannersForm;
