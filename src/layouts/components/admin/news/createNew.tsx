"use client";

import { useState } from "react";

import { useForm } from "@mantine/form";

import Image from "next/image";

import { Button, Box, Grid, Col, Textarea } from "@mantine/core";

import { createNews } from "@/lib/createData";

import { randomId } from "@mantine/hooks";

import TextEditor from "../RichTextEditor";

import { useSession } from "next-auth/react";

import ToastGenerator from "@/lib/toast-tify";

function AddNews({ refreshNews }) {
  const [content, setContent]: any = useState("");

  let { data: session, status } = useSession();

  const [contentEn, setContentEn]: any = useState("");

  const [selectedImage, setSelectedImage] = useState(null); // Store the selected image

  const [imagePreview, setImagePreview] = useState("");

  const currentDate = new Date();

  const formattedDate = currentDate.toISOString().split("T")[0]; // Định dạng thành "YYYY-MM-DD"

  const [successMessage, setSuccessMessage] = useState<string | null>(null); // Updated type declaration

  const [isSucess, setIsSucess] = useState(false);

  const [sucessMessage, setSucessMessage] = useState("");

  const form = useForm({
    initialValues: {
      key: randomId(),

      title: (value) =>
        value.length > 60 ? "Title cannot exceed 60 characters" : null,

      titleEn: (value) =>
        value.length > 60 ? "Title cannot exceed 60 characters" : null,

      meta_title: "",

      description: "",

      date: formattedDate,

      image: "",

      categories: [],

      // tags: [],

      draft: false,

      content: "",

      contentEn: "",
    },
  });

  const onImageChange = (e) => {
    const file = e.target.files[0];

    setSelectedImage(file);

    // Tạo URL xem trước ảnh và đặt nó vào trạng thái

    const imageUrl = URL.createObjectURL(file);

    setImagePreview(imageUrl);
  };

  // Sử dụng useEffect để tự động cập nhật giá trị cho trường "Date" thành ngày hiện tại trước khi bạn gửi biểu mẫu

  const onHandleChange = (e: any) => {
    if (e.language == "vn") {
      setContent(e.data);
    } else {
      setContentEn(e.data);
    }

    // form.insertListItem(`content.${e.idcontent}.description.${e.id}`, e);
  };

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

        values.image = data.secure_url; // Store the uploaded image URL in the form data
      } catch (error) {
        console.error(error);
      }
    }

    // Continue with the rest of your form submission

    values.content = content;

    values.contentEn = contentEn;

    let returnResult = await createNews(values, session);

    if (returnResult.success != undefined) {
      showToast(returnResult.msg);

      refreshNews();
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
    <div style={{ maxHeight: "500px", overflowY: "auto" }}>
      {isSucess ? <ToastGenerator message={sucessMessage} /> : <></>}

      <div className="container">
        <Box maw={"100%"} mx="auto">
          <form onSubmit={form.onSubmit((values: any) => onSubmitForm(values))}>
            <Grid gutter="lg">
              <Col span={4}>
                <Textarea
                  label="Title"
                  placeholder="Title"
                  radius="md"
                  size="md"
                  {...form.getInputProps("title")}
                  maxLength={60}
                />
              </Col>

              <Col span={4}>
                <Textarea
                  label="Title (English)"
                  placeholder="Title (English)"
                  radius="md"
                  size="md"
                  maxLength={60}
                  {...form.getInputProps("titleEn")}
                />
              </Col>

              <Col span={4}>
                <Textarea
                  label="Categories (comma-separated)"
                  placeholder="Categories"
                  radius="md"
                  size="md"
                  {...form.getInputProps("categories")}
                />
              </Col>

              <Col span={12}>
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
              </Col>

              <TextEditor
                onChange={onHandleChange}
                content={content}
                contentEn={contentEn}
              />

              <Col span={6}>
                <label style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    style={{ marginRight: "8px" }}
                    {...form.getInputProps("draft")}
                  />
                  Draft
                </label>
              </Col>
            </Grid>

            <div
              style={{
                display: "flex",

                justifyContent: "flex-end",

                marginTop: "16px",
              }}
            >
              <Button
                type="submit"
                style={{ backgroundColor: "#007bff", color: "white" }}
              >
                Submit
              </Button>
            </div>
          </form>

          {successMessage && (
            <div style={{ marginTop: "16px", color: "green" }}>
              {successMessage}
            </div>
          )}
        </Box>
      </div>
    </div>
  );
}

export default AddNews;
