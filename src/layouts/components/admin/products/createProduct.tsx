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
} from "@mantine/core";

interface ProductFormProps {}

function ProductForm(props: ProductFormProps) {
  const [submittedValues, setSubmittedValues] = useState("");

  const [showContent, setShowContent] = useState(false);

  const [contentBoxes, setContentBoxes] = useState<Array<Record<string, any>>>([
    {},
  ]);

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

      pros: [],

      prosEn: [],

      content: [
        {
          title: "",

          titleEn: "",

          content: "",

          contentEn: "",

          imgSrc: "",

          description: [
            {
              title: "",

              titleEn: "",

              content: "",

              contentEn: "",
            },
          ],
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
    <section className="section">
      <div className="container">
        <Box maw={600} mx="auto">
          <form
            onSubmit={form.onSubmit((values) =>
              setSubmittedValues(JSON.stringify(values, null, 2)),
            )}
          >
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
                    onClick={addContentBox}
                    style={{ backgroundColor: "green", color: "white" }}
                  >
                    Add Content Box
                  </Button>
                </div>

                {contentBoxes.map((_, index) => (
                  <div
                    key={index}
                    style={{
                      marginTop: "16px",

                      border: "1px solid gray",

                      padding: "16px",
                    }}
                  >
                    <h3>Content Box {index + 1}</h3>

                    <TextInput
                      label="Title"
                      placeholder="Title"
                      {...form.getInputProps(`content[${index}].title`)}
                    />

                    <TextInput
                      label="Title (English)"
                      placeholder="Title (English)"
                      {...form.getInputProps(`content[${index}].titleEn`)}
                    />

                    <Textarea
                      label="Content"
                      placeholder="Content"
                      {...form.getInputProps(`content[${index}].content`)}
                    />

                    <Textarea
                      label="Content (English)"
                      placeholder="Content (English)"
                      {...form.getInputProps(`content[${index}].contentEn`)}
                    />

                    <TextInput
                      label="Image URL"
                      placeholder="Image URL"
                      {...form.getInputProps(`content[${index}].imgSrc`)}
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
                      <div>
                        {/* Description Form Inputs */}

                        <TextInput
                          label="Title"
                          placeholder="Title"
                          {...form.getInputProps(
                            `content[${index}].description[0].title`,
                          )}
                        />

                        <TextInput
                          label="Title (English)"
                          placeholder="Title (English)"
                          {...form.getInputProps(
                            `content[${index}].description[0].titleEn`,
                          )}
                        />

                        <Textarea
                          label="Content"
                          placeholder="Content"
                          {...form.getInputProps(
                            `content[${index}].description[0].content`,
                          )}
                        />

                        <Textarea
                          label="Content (English)"
                          placeholder="Content (English)"
                          {...form.getInputProps(
                            `content[${index}].description[0].contentEn`,
                          )}
                        />
                      </div>
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
