"use client";

import React, { useState } from "react";

import { useForm } from "@mantine/form";

import Image from "next/image";

import { updateBanner } from "@/lib/updateData";

import { TextInput, Button, Box, Grid, Col } from "@mantine/core";
import { useSession } from "next-auth/react";

const UpdateBanner = ({ banner, handleSaveClick }) => {
  const [selectedImage, setSelectedImage] = useState(banner.image);
  let { data: session, status }: any = useSession();
  const [imagePreview, setImagePreview] = useState(banner.image);

  const [successMessage, setSuccessMessage] = useState<string | null>(null); // Updated type declaration

  const onImageChange = (e) => {
    const file = e.target.files[0];

    const imageUrl = URL.createObjectURL(file);
    setSelectedImage(imageUrl);
    setImagePreview(imageUrl);
  };

  const form = useForm({
    initialValues: banner,
  });

  const onSubmitForm = async (values) => {
    if (selectedImage && selectedImage != banner.image) {
      // Nếu có hình ảnh được chọn, tải lên trước

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

        values.image = data.secure_url; // Lưu URL hình ảnh đã tải lên vào dữ liệu biểu mẫu
      } catch (error) {
        console.error(error);
      }
    }

    // Tiếp tục với phần còn lại của quá trình gửi biểu mẫu

    updateBanner(values, session);

    form.reset();

    setSuccessMessage("Data updated successfully!");
    handleSaveClick();
    setTimeout(() => {
      setSuccessMessage(null);
    }, 5000);
  };

  return (
    // <div style={{ maxHeight: "500px", overflowY: "auto" }}>

    <div className="container">
      <Box maw={"75%"} mx="auto">
        <form onSubmit={form.onSubmit((values) => onSubmitForm(values))}>
          <h3 className="flex justify-center">Update content</h3>

          {/* Hiển thị xem trước ảnh */}

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
            <Col span={6}>
              <TextInput
                label="Title"
                placeholder="Title"
                {...form.getInputProps("title")}
              />
            </Col>

            <Col span={6}>
              <TextInput
                label="Title (English)"
                placeholder="Title (English)"
                {...form.getInputProps("titleEn")}
              />
            </Col>

            <Col span={6}>
              <TextInput
                label="Content"
                placeholder="Content"
                mt="md"
                {...form.getInputProps("content")}
              />
            </Col>

            <Col span={6}>
              <TextInput
                label="Content (English)"
                placeholder="Content (English)"
                mt="md"
                {...form.getInputProps("contentEn")}
              />
            </Col>

            <Col span={6}>
              <input type="file" accept="image/*" onChange={onImageChange} />
            </Col>

            <Col span={6} className="flex justify-end mt-6">
              {/* Thêm class CSS để đặt nút submit ở góc phải */}

              <Button
                type="submit"
                style={{ backgroundColor: "blue" }}
                size="md"
              >
                Submit
              </Button>
            </Col>
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
};

export default UpdateBanner;
