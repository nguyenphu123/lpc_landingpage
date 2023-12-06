"use client";

import React, { useState } from "react";

import { useForm } from "@mantine/form";

import Image from "next/image";

import { addBanner } from "@/lib/createData";

import { randomId } from "@mantine/hooks";
import { Button } from "@nextui-org/react";
import { TextInput, Box, Grid, Textarea } from "@mantine/core";

import { useSession } from "next-auth/react";

import ToastGenerator from "@/lib/toast-tify";

const BannerForm = ({ refreshBanner }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  let { data: session, status }: any = useSession();

  const [imagePreview, setImagePreview] = useState("");

  const [successMessage, setSuccessMessage] = useState<string | null>(null); // Updated type declaration

  const [isSucess, setIsSucess] = useState(false);

  const [sucessMessage, setSucessMessage] = useState("");

  const onImageChange = (e) => {
    const file = e.target.files[0];

    setSelectedImage(file);

    const imageUrl = URL.createObjectURL(file);

    setImagePreview(imageUrl);
  };

  const form = useForm({
    initialValues: {
      key: randomId(),

      title: "",

      titleEn: "",

      content: "",

      contentEn: "",

      image: "",
    },
  });

  const onSubmitForm = async (values) => {
    if (selectedImage) {
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

    let returnResult = await addBanner(values, session);

    if (returnResult.success != undefined) {
      showToast(returnResult.msg);

      refreshBanner();
    }

    form.reset();
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
          <h3 className="flex justify-center">Add banner content</h3>

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

          <div className="flex w-full flex-wrap md:flex-nowrap gap-8 justify-center">
            <Textarea
              label="Title"
              placeholder="Enter title here..."
              radius="md"
              size="xl"
              autosize
              minRows={2}
              {...form.getInputProps("title")}
            />
            <Textarea
              label="Title (English)"
              placeholder="Enter title here..."
              radius="md"
              size="xl"
              autosize
              minRows={2}
              {...form.getInputProps("titleEn")}
            />
          </div>

          <div className="flex w-full flex-wrap md:flex-nowrap gap-8 justify-center">
            <Textarea
              label="Content"
              placeholder="Enter content here..."
              radius="md"
              size="xl"
              autosize
              minRows={2}
              {...form.getInputProps("content")}
            />
            <Textarea
              label="Content (English)"
              placeholder="Enter content here..."
              radius="md"
              size="xl"
              autosize
              minRows={2}
              {...form.getInputProps("contentEn")}
            />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-8 justify-center">
            <input type="file" accept="image/*" onChange={onImageChange} />
          </div>
          {/* Thêm class CSS để đặt nút submit ở góc phải */}
          <div className="flex w-full flex-wrap md:flex-nowrap gap-8 justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded mr-2"
            >
              Submit
            </button>
          </div>
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

export default BannerForm;
