"use client";

import React, { useState } from "react";

import { useForm } from "@mantine/form";

import { TextInput, Button, Box, Grid } from "@mantine/core";

import Image from "next/image";

import { UpdateRecruitBanners } from "@/lib/updateData";

import { useSession } from "next-auth/react";

import ToastGenerator from "@/lib/toast-tify";

function UpdateRecruitBannersForm({ recruitBanner, handleSaveClick }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const [selectedImageURL, setSelectedImageURL] = useState(recruitBanner.src);

  let { data: session, status } = useSession();

  const [successMessage, setSuccessMessage] = useState<string | null>(null); // Updated type declaration

  const [isSucess, setIsSucess] = useState(false);

  const [sucessMessage, setSucessMessage] = useState("");

  const form = useForm({
    initialValues: JSON.parse(JSON.stringify(recruitBanner)),
  });

  const onImageChange = (e) => {
    const file = e.target.files[0];

    setSelectedImage(file);

    setSelectedImageURL(URL.createObjectURL(file));
  };

  const onSubmitForm = async (values) => {
    if (selectedImage && selectedImageURL != recruitBanner.src) {
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

    let returnResult = await UpdateRecruitBanners(values, session);

    if (returnResult.success != undefined) {
      showToast(returnResult.msg);

      handleSaveClick();
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
      {isSucess ? <ToastGenerator message={sucessMessage} /> : null}

      <Box maw={"100%"} mx="auto">
        <form onSubmit={form.onSubmit((values) => onSubmitForm(values))}>
          <h3 className="flex justify-center">Update Recruit Banner</h3>

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

              <Image
                src={selectedImageURL}
                alt="Selected Image"
                width={300}
                height={300}
              />
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

export default UpdateRecruitBannersForm;
