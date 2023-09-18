"use client";

import React, { useState } from "react";

import { useForm } from "@mantine/form";
import Image from "next/image";
import { Button, Box, Grid, Col } from "@mantine/core";

import { useSession } from "next-auth/react";
import ToastGenerator from "@/lib/toast-tify";
import { UpdateRevenue } from "@/lib/updateData";

function EditRevenue({ Revenue, language, refreshRevenue }) {
  let { data: session, status } = useSession();
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // Updated type declaration
  const [isSucess, setIsSucess] = useState(false);
  const [sucessMessage, setSucessMessage] = useState("");
  const [imagePreview, setImagePreview] = useState(Revenue.description);
  const [selectedImage, setSelectedImage] = useState(null);
  const onImageChange = (e) => {
    const file = e.target.files[0];

    const imageUrl = URL.createObjectURL(file);
    setSelectedImage(file);
    setImagePreview(imageUrl);
  };
  const onSubmitForm = async (values) => {
    // Continue with the rest of the form submission
    if (selectedImage && imagePreview != Revenue) {
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
    const newRevenue = await UpdateRevenue(values, session);
    if (newRevenue.success != undefined) {
      showToast(newRevenue.msg);
      refreshRevenue();
    }

    setSuccessMessage(newRevenue.msg);

    setTimeout(() => {
      setSuccessMessage(null);
    }, 10000);
  };
  const showToast = (msg) => {
    setIsSucess(true);
    setSucessMessage(msg);
    setTimeout(() => {
      setIsSucess(false);
      setSucessMessage("");
    }, 10000);
  };
  const form = useForm({
    initialValues: {
      image: "",
      language: language,
    },
  });
  return (
    // <div style={{ maxHeight: "500px", overflowY: "auto" }}>

    <div className="container">
      {isSucess ? <ToastGenerator message={sucessMessage} /> : <></>}
      <Box maw={"75%"} mx="auto">
        <form onSubmit={form.onSubmit((values) => onSubmitForm(values))}>
          <h3 className="flex justify-center">Edit revenue</h3>

          <Grid gutter="lg">
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
}

export default EditRevenue;
