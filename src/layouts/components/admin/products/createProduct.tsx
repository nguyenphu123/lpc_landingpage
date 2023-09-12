"use client";

import React, { useState } from "react";

import Image from "next/image";

import { useForm } from "@mantine/form";

import { TextInput, Button, Box, Code, Grid, Col, Select } from "@mantine/core";

import { addProduct } from "@/lib/createData";

import { useSession } from "next-auth/react";
import ToastGenerator from "@/lib/toast-tify";

interface ProductFormProps {}

function ProductForm(props: ProductFormProps) {
  const [submittedValues, setSubmittedValues] = useState("");
  let { data: session, status } = useSession();
  const [showCols, setShowCols] = useState(true);

  // Thêm state để lưu trữ hình ảnh đã chọn

  const [selectedImage, setSelectedImage] = useState(null);
  const [isSucess, setIsSucess] = useState(false);
  const [sucessMessage, setSucessMessage] = useState("");
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

    let returnResult = await addProduct(value, session);
    if (returnResult.success != undefined) {
      showToast(returnResult.msg);
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
  const form = useForm({
    initialValues: {
      title: "",

      titleEn: "",

      type: "",

      description1: "",

      description2: "",

      descriptionEn1: "",

      descriptionEn2: "",

      image: "",

      pros: "",

      prosEn: "",

      content: [],
    },
  });

  return (
    <div style={{ maxHeight: "500px", overflowY: "auto" }}>
      {isSucess ? <ToastGenerator message={sucessMessage} /> : <></>}
      <div className="container">
        <Box maw={"100%"} mx="auto">
          <form onSubmit={form.onSubmit((values) => onSubmitForm(values))}>
            <Grid gutter="lg">
              {showCols && (
                <>
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

                  <Col span={4}>
                    <label>Type</label>

                    <Select
                      data={[
                        { label: "Solution", value: "Solution" },

                        { label: "Service", value: "Service" },
                      ]}
                      placeholder="Select Type"
                      {...form.getInputProps("type")}
                    />
                  </Col>

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

                  <Col span={6}>
                    <TextInput
                      label="General content"
                      placeholder="General content"
                      {...form.getInputProps("description1")}
                    />
                  </Col>

                  <Col span={6}>
                    <TextInput
                      label="General content (English)"
                      placeholder="General content (English)"
                      {...form.getInputProps("descriptionEn1")}
                    />
                  </Col>

                  <Col span={6}>
                    <TextInput
                      label="Details"
                      placeholder="Details"
                      {...form.getInputProps("description2")}
                    />
                  </Col>

                  <Col span={6}>
                    <TextInput
                      label="Details (English)"
                      placeholder="Details (English)"
                      {...form.getInputProps("descriptionEn2")}
                    />
                  </Col>

                  <Col span={6}>
                    <TextInput
                      label="Pros (comma-separated)"
                      placeholder="Pros"
                      {...form.getInputProps("pros")}
                    />
                  </Col>

                  <Col span={6}>
                    <TextInput
                      label="Pros (English, comma-separated)"
                      placeholder="Pros (English)"
                      {...form.getInputProps("prosEn")}
                    />
                  </Col>
                </>
              )}
            </Grid>

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

export default ProductForm;
