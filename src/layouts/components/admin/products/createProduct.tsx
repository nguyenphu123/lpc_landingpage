"use client";

import React, { useState } from "react";

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
} from "@mantine/core";
import { addProduct } from "@/lib/createData";
import { randomId } from "@mantine/hooks";

import TextEditor from "../RichTextEditor";
interface ProductFormProps {}

function ProductForm(props: ProductFormProps) {
  const [submittedValues, setSubmittedValues] = useState("");
  const [descriptionList, setDescriptionList]: any = useState([]);

  const [showContent, setShowContent] = useState(false);
  const [contentBoxes, setContentBoxes] = useState<Array<Record<string, any>>>([
    {},
  ]);
  const onHandleChange = (e: any) => {
    setDescriptionList((oldArray) => [...oldArray, e]);

    // form.insertListItem(`content.${e.idcontent}.description.${e.id}`, e);
  };
  const onSubmitForm = (value) => {
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
  };

  const addContentBox = () => {
    setContentBoxes([...contentBoxes, {}]);

    setShowDescriptionForms([...showDescriptionForms, false]);
  };

  const removeContentBox = (index: number) => {
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
    <section className="section overflow-y-auto">
      <div className="container overflow-y-auto">
        <Box maw={"100%"} mx="auto">
          <form onSubmit={form.onSubmit((values) => onSubmitForm(values))}>
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
                  label="Type"
                  placeholder="Type"
                  {...form.getInputProps("type")}
                />
              </Col>

              <Col span={6}>
                <TextInput
                  label="Description 1"
                  placeholder="Description 1"
                  {...form.getInputProps("description1")}
                />
              </Col>

              <Col span={6}>
                <TextInput
                  label="Description 2"
                  placeholder="Description 2"
                  {...form.getInputProps("description2")}
                />
              </Col>

              <Col span={6}>
                <TextInput
                  label="Description 1 (English)"
                  placeholder="Description 1 (English)"
                  {...form.getInputProps("descriptionEn1")}
                />
              </Col>

              <Col span={6}>
                <TextInput
                  label="Description 2 (English)"
                  placeholder="Description 2 (English)"
                  {...form.getInputProps("descriptionEn2")}
                />
              </Col>

              <Col span={6}>
                <TextInput
                  label="Image URL"
                  placeholder="Image URL"
                  {...form.getInputProps("image")}
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
                    Add Content Box
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
                    <h3>Content Box {item.key}</h3>
                    <Group key={item.key} mt="xs">
                      <TextInput
                        label="Title"
                        placeholder="Title"
                        {...form.getInputProps(`content.${index}.title`)}
                      />

                      <TextInput
                        label="Title (English)"
                        placeholder="Title (English)"
                        {...form.getInputProps(`content.${index}.titleEn`)}
                      />

                      <Textarea
                        label="Content"
                        placeholder="Content"
                        {...form.getInputProps(`content.${index}.content`)}
                      />

                      <Textarea
                        label="Content (English)"
                        placeholder="Content (English)"
                        {...form.getInputProps(`content.${index}.contentEn`)}
                      />

                      <TextInput
                        label="Image URL"
                        placeholder="Image URL"
                        {...form.getInputProps(`content.${index}.imgSrc`)}
                      />

                      <h3>Content Box {index + 1}</h3>

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
                                Chức năng và giá trị
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
    </section>
  );
}

export default ProductForm;
