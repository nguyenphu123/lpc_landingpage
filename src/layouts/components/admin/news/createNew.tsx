"use client";

import { useState } from "react";

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
import { createNews } from "@/lib/createData";
import { randomId } from "@mantine/hooks";
import TextEditor from "../RichTextEditor";
function AddNews() {
  const [submittedValues, setSubmittedValues] = useState("");
  const [content, setContent]: any = useState("");
  const [contentEn, setContentEn]: any = useState("");
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

      tags: [],

      draft: false,

      content: "",

      contentEn: "",
    },
  });
  const onHandleChange = (e: any) => {
    setContent(e.content);
    setContentEn(e.contentEn);
    // form.insertListItem(`content.${e.idcontent}.description.${e.id}`, e);
  };
  const onSubmitForm = (value) => {
    value.content = content;
    value.contentEn = contentEn;
    setContent("");
    setContentEn("");
    createNews(value);
  };
  return (
    <section className="section">
      <div className="container">
        <Box maw={900} mx="auto">
          <form onSubmit={form.onSubmit((values: any) => onSubmitForm(values))}>
            <Grid gutter="lg">
              <Col span={3}>
                <TextInput
                  label="Title"
                  placeholder="Title"
                  {...form.getInputProps("title")}
                />
              </Col>

              <Col span={3}>
                <TextInput
                  label="Title (English)"
                  placeholder="Title (English)"
                  {...form.getInputProps("titleEn")}
                />
              </Col>

              <Col span={3}>
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
              </Col>

              <Col span={3}>
                <TextInput
                  label="Date"
                  type="date"
                  placeholder="Date"
                  {...form.getInputProps("date")}
                />
              </Col>

              <Col span={3}>
                <TextInput
                  label="Image URL"
                  placeholder="Image URL"
                  {...form.getInputProps("image")}
                />
              </Col>

              <Col span={3}>
                <TextInput
                  label="Categories (comma-separated)"
                  placeholder="Categories"
                  {...form.getInputProps("categories")}
                />
              </Col>

              <Col span={3}>
                <TextInput
                  label="Tags (comma-separated)"
                  placeholder="Tags"
                  {...form.getInputProps("tags")}
                />
              </Col>

              <Col span={12}>
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

          {submittedValues && <Code block>{submittedValues}</Code>}
        </Box>
      </div>
    </section>
  );
}

export default AddNews;
