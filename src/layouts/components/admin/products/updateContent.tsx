"use client";

import React, { useState } from "react";

import Image from "next/image";

import { useForm } from "@mantine/form";

import {
  TextInput,
  Button,
  Box,
  Code,
  Grid,
  Col,
  Textarea,
} from "@mantine/core";

import { randomId } from "@mantine/hooks";

import TextEditor from "../RichTextEditor";
import { updateProduct } from "@/lib/updateData";
import { useSession } from "next-auth/react";

interface ContentFormProps {}

function UpdateContentForm({ product, content }) {
  const [submittedValues, setSubmittedValues] = useState("");
  let { data: session, status } = useSession();
  const [descriptionEn, setDescriptionEn]: any = useState({});
  const [description, setDescription]: any = useState({});

  // Thêm state để lưu trữ hình ảnh đã chọn

  const [selectedImage, setSelectedImage] = useState(null);

  const onHandleChange = (e: any) => {
    if (e.language == "vn") {
      setDescription(e.data);
    } else {
      setDescriptionEn(e.data);
    }

    // form.insertListItem(`content.${e.idcontent}.description.${e.id}`, e);
  };

  const onImageChange = (e) => {
    const file = e.target.files[0];

    setSelectedImage(file);
  };

  const onSubmitForm = async (value) => {
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

        value.image = data.secure_url;
      } catch (error) {
        console.error(error);
      }
    }
    value.description = description;
    value.descriptionEn = descriptionEn;
    product.content.push(value);
    var array = [...product.content]; // make a separate copy of the array
    var index = array.indexOf(value._id);
    if (index !== -1) {
      array.splice(index, 1);
      product.content == array;
    }
    updateProduct(product,session);
  };

  const form = useForm({
    initialValues: content,
  });

  return (
    <div style={{ maxHeight: "500px", overflowY: "auto" }}>
      <div className="container">
        <Box maw={"100%"} mx="auto">
          <form onSubmit={form.onSubmit((values) => onSubmitForm(values))}>
            <div>
              <div
                style={{
                  marginTop: "16px",

                  border: "1px solid gray",

                  padding: "16px",
                }}
              >
                <h3>Product Overview</h3>

                <Grid gutter="lg">
                  <Col span={4}>
                    <TextInput
                      label="Title"
                      placeholder="Title"
                      {...form.getInputProps(`title`)}
                    />
                  </Col>

                  <Col span={4}>
                    <TextInput
                      label="Title (English)"
                      placeholder="Title (English)"
                      {...form.getInputProps(`titleEn`)}
                    />
                  </Col>

                  <Col span={12}>
                    <label>Choose Image</label>

                    {/* Trường input tệp ẩn */}

                    <input
                      type="file"
                      accept="image/*"
                      onChange={onImageChange}
                      style={{ display: "none" }}
                      id="imageInput"
                    />

                    {/* Nút thay thế */}

                    <label
                      htmlFor="imageInput"
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      <div
                        style={{
                          width: "100%",

                          height: "100px",

                          backgroundColor: "#f0f0f0",

                          display: "flex",

                          alignItems: "center",

                          justifyContent: "center",

                          border: "2px dashed #ccc",

                          borderRadius: "8px",
                        }}
                      >
                        {selectedImage ? (
                          <Image
                            src={URL.createObjectURL(selectedImage)}
                            alt="Selected Image"
                            width={150}
                            height={150}
                          />
                        ) : (
                          <span>Click to choose an image</span>
                        )}
                      </div>
                    </label>
                  </Col>

                  <Col span={6}>
                    <Textarea
                      label="Content"
                      placeholder="Content"
                      {...form.getInputProps(`content`)}
                    />
                  </Col>

                  <Col span={6}>
                    <Textarea
                      label="Content (English)"
                      placeholder="Content (English)"
                      {...form.getInputProps(`contentEn`)}
                    />
                  </Col>
                  <Col span={6}>
                    <TextEditor
                      onChange={onHandleChange}
                      content={undefined}
                      contentEn={undefined}
                    />
                  </Col>

                  <Col span={6}>
                    <TextEditor
                      onChange={onHandleChange}
                      content={undefined}
                      contentEn={undefined}
                    />
                  </Col>
                </Grid>

                {/* ... Input fields for content */}
              </div>
            </div>

            <div
              style={{
                marginTop: "16px",

                display: "flex",

                justifyContent: "flex-end",
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

          {submittedValues && <Code block>{submittedValues}</Code>}
        </Box>
      </div>
    </div>
  );
}

export default UpdateContentForm;
