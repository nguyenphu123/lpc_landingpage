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
  Group,
  Tabs,
  Select,
} from "@mantine/core";

import { addProduct } from "@/lib/createData";

import { randomId } from "@mantine/hooks";

import TextEditor from "../RichTextEditor";

interface ProductFormProps {}

function ProductForm(props: ProductFormProps) {
  const [submittedValues, setSubmittedValues] = useState("");

  const [descriptionList, setDescriptionList]: any = useState([]);

  const [showContent, setShowContent] = useState(false);

  const [showCols, setShowCols] = useState(true);

  const [contentBoxes, setContentBoxes] = useState<Array<Record<string, any>>>([
    {},
  ]);

  // Thêm state để lưu trữ hình ảnh đã chọn

  const [selectedImage, setSelectedImage] = useState(null);

  const onHandleChange = (e: any) => {
    setDescriptionList((oldArray) => [...oldArray, e]);

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

    for (let i = 0; i < value.content.length; i++) {
      for (let j = 0; j < descriptionList.length; j++) {
        if (value.content[i].key == descriptionList[j].idcontent) {
          value.content[i].description.push(descriptionList[j]);
        }
      }
    }

    setDescriptionList([]);

    addProduct(value);
  };

  const [showDescriptionForms, setShowDescriptionForms] = useState<
    Array<boolean>
  >(contentBoxes.map(() => false));

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

      content: [
        {
          key: randomId(),

          title: "",

          titleEn: "",

          content: "",

          contentEn: "",

          imgSrc: "",

          description: [],
        },
      ],
    },
  });

  const toggleShowContent = () => {
    setShowContent(!showContent);

    setShowCols(!showCols);
  };

  const addContentBox = () => {
    setContentBoxes([...contentBoxes, {}]);

    setShowDescriptionForms([...showDescriptionForms, false]);
  };

  const removeContentBox = (index: number) => {
    debugger;

    console.log("Deleting content box at index:", index);

    const updatedContentBoxes = contentBoxes.filter((_, i) => i !== index);

    setContentBoxes(updatedContentBoxes);

    const updatedShowDescriptionForms = showDescriptionForms.filter(
      (_, i) => i !== index,
    );

    setShowDescriptionForms(updatedShowDescriptionForms);
  };

  const toggleDescriptionForms = (index: number) => {
    const updatedShowDescriptionForms = [...showDescriptionForms];

    updatedShowDescriptionForms[index] = !updatedShowDescriptionForms[index];

    setShowDescriptionForms(updatedShowDescriptionForms);
  };

  return (
    <div style={{ maxHeight: "500px", overflowY: "auto" }}>
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

            <div style={{ marginTop: "16px" }}>
              <Button
                type="button"
                onClick={toggleShowContent}
                style={{ backgroundColor: "#007bff", color: "white" }}
              >
                {showContent ? "Hide" : "Show"} Content
              </Button>
            </div>

            {showContent && (
              <div>
                <div style={{ marginTop: "16px" }}>
                  <Button
                    type="button"
                    onClick={() =>
                      form.insertListItem("content", {
                        key: randomId(),

                        title: "",

                        titleEn: "",

                        content: "",

                        contentEn: "",

                        imgSrc: "",

                        description: [],
                      })
                    }
                    style={{ backgroundColor: "green", color: "white" }}
                  >
                    Add Product Overview
                  </Button>
                </div>

                {form.values.content.map((item, index) => (
                  <div
                    key={item.key}
                    style={{
                      marginTop: "16px",

                      border: "1px solid gray",

                      padding: "16px",
                    }}
                  >
                    <h3>Product Overview {item.key}</h3>

                    <Group key={item.key} mt="xs">
                      <Grid gutter="lg">
                        <Col span={4}>
                          <TextInput
                            label="Title"
                            placeholder="Title"
                            {...form.getInputProps(`content.${index}.title`)}
                          />
                        </Col>

                        <Col span={4}>
                          <TextInput
                            label="Title (English)"
                            placeholder="Title (English)"
                            {...form.getInputProps(`content.${index}.titleEn`)}
                          />
                        </Col>

                        <Col span={4}>
                          <TextInput
                            label="Image URL"
                            placeholder="Image URL"
                            {...form.getInputProps(`content.${index}.imgSrc`)}
                          />
                        </Col>

                        <Col span={6}>
                          <Textarea
                            label="Content"
                            placeholder="Content"
                            {...form.getInputProps(`content.${index}.content`)}
                          />
                        </Col>

                        <Col span={6}>
                          <Textarea
                            label="Content (English)"
                            placeholder="Content (English)"
                            {...form.getInputProps(
                              `content.${index}.contentEn`,
                            )}
                          />
                        </Col>
                      </Grid>

                      {/* ... Input fields for content */}

                      <Button
                        type="button"
                        onClick={() => toggleDescriptionForms(index)}
                        style={{
                          backgroundColor: "blue",

                          color: "white",

                          marginTop: "16px",
                        }}
                      >
                        {showDescriptionForms[index] ? "Hide" : "Show"}{" "}
                        Description
                      </Button>

                      {showDescriptionForms[index] && (
                        <Tabs defaultValue="goal">
                          <div>
                            {/* Description Form Inputs */}

                            <Tabs.List>
                              <Tabs.Tab value="goal">Mục tiêu</Tabs.Tab>

                              <Tabs.Tab value="function">
                                Chức năng và giá trị mang lại
                              </Tabs.Tab>

                              <Tabs.Tab value="product">Sản phẩm</Tabs.Tab>

                              <Tabs.Tab value="service">Dịch vụ</Tabs.Tab>

                              <Tabs.Tab value="caseStudy">Case study</Tabs.Tab>
                            </Tabs.List>

                            <Tabs.Panel value="goal" pt="xs">
                              <TextEditor
                                descriptionId="1"
                                title={"Mục tiêu"}
                                titleEn={"Goal"}
                                onChange={onHandleChange}
                                language="vn"
                                id={item.key}
                                content=""
                                contentEn=""
                              />
                            </Tabs.Panel>

                            <Tabs.Panel value="function" pt="xs">
                              <TextEditor
                                descriptionId="2"
                                title={"Chức năng và giá trị"}
                                titleEn={"Function and value"}
                                onChange={onHandleChange}
                                language="vn"
                                id={item.key}
                                content=""
                                contentEn=""
                              />
                            </Tabs.Panel>

                            <Tabs.Panel value="product" pt="xs">
                              <TextEditor
                                descriptionId="3"
                                title={"Sản phẩm"}
                                titleEn={"Product"}
                                onChange={onHandleChange}
                                language="vn"
                                id={item.key}
                                content=""
                                contentEn=""
                              />
                            </Tabs.Panel>

                            <Tabs.Panel value="service" pt="xs">
                              <TextEditor
                                descriptionId="4"
                                title={"Dịch vụ"}
                                titleEn={"Service"}
                                onChange={onHandleChange}
                                language="vn"
                                id={item.key}
                                content=""
                                contentEn=""
                              />
                            </Tabs.Panel>

                            <Tabs.Panel value="caseStudy" pt="xs">
                              <TextEditor
                                descriptionId="5"
                                title={"Case study"}
                                titleEn={"Case study"}
                                onChange={onHandleChange}
                                language="vn"
                                id={item.key}
                                content=""
                                contentEn=""
                              />
                            </Tabs.Panel>
                          </div>
                        </Tabs>
                      )}

                      <Button
                        type="button"
                        onClick={() => removeContentBox(index)}
                        style={{
                          backgroundColor: "red",

                          color: "white",

                          marginTop: "16px",
                        }}
                      >
                        Delete
                      </Button>
                    </Group>
                  </div>
                ))}
              </div>
            )}

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
