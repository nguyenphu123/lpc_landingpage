"use client";

import { useState } from "react";

import { useForm } from "@mantine/form";

import Image from "next/image";
import { TextInput, Button, Box, Code, Grid, Col } from "@mantine/core";
import { updateNews } from "@/lib/updateData";

import TextEditor from "../RichTextEditor";
import { useSession } from "next-auth/react";
import ToastGenerator from "@/lib/toast-tify";
function UpdateNew({ New, refreshNews }) {
  const [submittedValues, setSubmittedValues] = useState("");
  let { data: session, status } = useSession();
  const [content, setContent]: any = useState(New.content);
  const [contentEn, setContentEn]: any = useState(New.contentEn);
  const [isSucess, setIsSucess] = useState(false);
  const [sucessMessage, setSucessMessage] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageURL, setSelectedImageURL] = useState(New.image);
  const form = useForm({
    initialValues: JSON.parse(JSON.stringify(New)),
  });
  const onHandleChange = (e: any) => {
    if (e.language == "vn") {
      setContent(e.data);
    } else {
      setContentEn(e.data);
    }

    // form.insertListItem(`content.${e.idcontent}.description.${e.id}`, e);
  };
  const onImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    setSelectedImageURL(URL.createObjectURL(file));
  };
  const onSubmitForm = async (value) => {
    let updateData = { ...value };
    if (selectedImage && selectedImageURL != New.image) {
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
    updateData["content"] = content;
    updateData["contentEn"] = contentEn;
    let returnResult = await updateNews(updateData, session);
    if (returnResult.success != undefined) {
      showToast(returnResult.msg);
      refreshNews();
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
  return (
    <section className="section">
      {isSucess ? <ToastGenerator message={sucessMessage} /> : <></>}
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
                <input
                  type="file"
                  accept="image/*"
                  onChange={onImageChange}
                  style={{ display: "none" }}
                  id="imageInput"
                />
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
                        src={selectedImageURL}
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
