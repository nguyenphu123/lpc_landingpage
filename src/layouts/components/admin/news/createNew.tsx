"use client";

import { useState, useEffect } from "react";

import { useForm } from "@mantine/form";

import Image from "next/image";

import {
  TextInput,
  Button,
  Box,
  Code,
  Grid,
  Col,
  Textarea,
} from "@mantine/core";

import { createNews } from "@/lib/createData";

import { randomId } from "@mantine/hooks";

import TextEditor from "../RichTextEditor";

function AddNews() {
  const [content, setContent]: any = useState("");

  const [contentEn, setContentEn]: any = useState("");

  const [selectedImage, setSelectedImage] = useState(null); // Store the selected image

  const [imagePreview, setImagePreview] = useState("");

  const [successMessage, setSuccessMessage] = useState<string | null>(null); // Updated type declaration

  const form = useForm({
    initialValues: {
      key: randomId(),

      title: "",

      titleEn: "",

      meta_title: "",

      description: "",

      date: "",

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

  useEffect(() => {
    const currentDate = new Date();

    const formattedDate = currentDate.toISOString().split("T")[0]; // Định dạng thành "YYYY-MM-DD"

    form.setFieldValue("date", formattedDate);
  }, [form]);

  const onHandleChange = (e: any) => {
    setContent(e.content);

    setContentEn(e.contentEn);

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

    setContent("");

    setContentEn("");

    createNews(values);

    form.reset();

    setSuccessMessage("Data added successfully!");

    setTimeout(() => {
      setSuccessMessage(null);
    }, 5000);
  };

  return (
    <div style={{ maxHeight: "500px", overflowY: "auto" }}>
      <div className="container">
        <Box maw={"100%"} mx="auto">
          <form onSubmit={form.onSubmit((values: any) => onSubmitForm(values))}>
            <Grid gutter="lg">
              <Col span={4}>
                <TextInput
                  label="Title"
                  placeholder="Title"
                  {...form.getInputProps("title")}
                />
              </Col>

              <Col span={4}>
                <TextInput
                  label="Title (English)"
                  placeholder="Title (English)"
                  {...form.getInputProps("titleEn")}
                />
              </Col>

              <Col span={4}>
                <TextInput
                  label="Categories (comma-separated)"
                  placeholder="Categories"
                  {...form.getInputProps("categories")}
                />
              </Col>

              {/* <Col span={3}>

 

                <TextInput

 

                  label="Meta Title"

 

                  placeholder="Meta Title"

 

                  {...form.getInputProps("meta_title")}

 

                />

 

              </Col>

 

 

 

              <Col span={3}>

 

                <TextInput

 

                  label="Description"

 

                  placeholder="Description"

 

                  {...form.getInputProps("description")}

 

                />

 

              </Col> */}

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

              {/* <Col span={3}>

 

                <TextInput

 

                  label="Date"

 

                  type="date"

 

                  placeholder="Date"

 

                  {...form.getInputProps("date")}

 

                />

 

              </Col> */}

              {/* <Col span={3}>

 

                <TextInput

 

                  label="Tags (comma-separated)"

 

                  placeholder="Tags"

 

                  {...form.getInputProps("tags")}

 

                />

 

              </Col> */}

              <Col span={12} className="height:900px">
                <TextEditor
                  descriptionId="1"
                  title={""}
                  titleEn={""}
                  onChange={onHandleChange}
                  language="vn"
                  id={form.values.key}
                  content=""
                  contentEn=""
                />
              </Col>

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
