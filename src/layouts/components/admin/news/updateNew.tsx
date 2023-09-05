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
import { updateNews } from "@/lib/updateData";

import TextEditor from "../RichTextEditor";
import { useSession } from "next-auth/react";
function UpdateNew({ New }) {
  const [submittedValues, setSubmittedValues] = useState("");
  let { data: session, status } = useSession();
  const [content, setContent]: any = useState(New.content);
  const [contentEn, setContentEn]: any = useState(New.contentEn);
  const form = useForm({
    initialValues: New,
  });
  const onHandleChange = (e: any) => {
    if (e.language == "vn") {
      setContent(e.data);
    } else {
      setContentEn(e.data);
    }

    // form.insertListItem(`content.${e.idcontent}.description.${e.id}`, e);
  };
  const onSubmitForm = (value) => {
    let updateData = { ...value };
    updateData["content"] = content;
    updateData["contentEn"] = contentEn;
    updateNews(updateData, session);
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
                  onChange={onHandleChange}
                  content={content}
                  contentEn={contentEn}
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

export default UpdateNew;
