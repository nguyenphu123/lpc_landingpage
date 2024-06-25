"use client";

import React, { useState } from "react";

import { useForm } from "@mantine/form";

import Image from "next/image";

import { TextInput, Button, Box, Grid } from "@mantine/core";

import { CreateRecruitBanners } from "@/lib/createData";

import { useSession } from "next-auth/react";

import ToastGenerator from "@/lib/toast-tify";

function RecruitBannersForm({ refreshRecruitBanners }) {
  const [selectedImage, setSelectedImage] = useState(null);

  let { data: session, status } = useSession();

  const [successMessage, setSuccessMessage] = useState<string | null>(null); // Updated type declaration

  const [imagePreview, setImagePreview] = useState("");

  const [isSucess, setIsSucess] = useState(false);

  const [sucessMessage, setSucessMessage] = useState("");

  const form = useForm({
    initialValues: {
      name: "",

      src: "",
    },
  });

  const onImageChange = (e) => {
    const file = e.target.files[0];

    setSelectedImage(file);

    const imageUrl = URL.createObjectURL(file);

    setImagePreview(imageUrl);
  };

  const onSubmitForm = async (values) => {
    if (selectedImage) {
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

        values.src = data.secure_url; // Save the uploaded image URL to the form data
      } catch (error) {
        console.error(error);
      }
    }

    // Continue with the rest of the form submission

    let returnResult = await CreateRecruitBanners(values, session);

    form.reset();

    if (returnResult.success != undefined) {
      showToast(returnResult.msg);

      refreshRecruitBanners();
    }
  };

  const showToast = (msg) => {
    setIsSucess(true);

    setSucessMessage(msg);

    setTimeout(() => {
      setIsSucess(false);

      setSucessMessage("");
    }, 10000);
  };

  return (
    // <div style={{ maxHeight: "500px", overflowY: "auto" }}>

    <div className="container">
      {isSucess ? <ToastGenerator message={sucessMessage} /> : <></>}

      <Box maw={"100%"} mx="auto">
        <form onSubmit={form.onSubmit((values) => onSubmitForm(values))}>
          <h3 className="flex justify-center">Add new recruit banner</h3>

          {imagePreview && (
            <div className="flex justify-center">
              <Image
                src={imagePreview}
                alt="Preview"
                width="350"
                height="350"
              />
            </div>
          )}

          <Grid gutter="lg">
            <Grid.Col span={12}>
              <TextInput
                label="Name"
                placeholder="Name"
                {...form.getInputProps("name")}
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <input type="file" accept="image/*" onChange={onImageChange} />
            </Grid.Col>

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

export default RecruitBannersForm;
