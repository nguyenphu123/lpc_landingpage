"use client";

import React, { useState } from "react";

import Image from "next/image";

import { useForm } from "@mantine/form";

import { TextInput, Button, Box, Code, Grid, Textarea } from "@mantine/core";

import { randomId } from "@mantine/hooks";

import TextEditor from "../RichTextEditor";
import { addProductContent } from "@/lib/createData";
import { useSession } from "next-auth/react";
import ToastGenerator from "@/lib/toast-tify";

function ContentForm({ product }) {
  const [submittedValues, setSubmittedValues] = useState("");
  let { data: session, status } = useSession();
  const [descriptionEn, setDescriptionEn]: any = useState("");
  const [description, setDescription]: any = useState("");

  // Thêm state để lưu trữ hình ảnh đã chọn

  const [selectedImage, setSelectedImage] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState(
    JSON.parse(JSON.stringify(product)),
  );
  const [isSucess, setIsSucess] = useState(false);
  const [sucessMessage, setSucessMessage] = useState("");
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

  const onSubmitForm = async (value: any) => {
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

        value.imgSrc = data.secure_url;
      } catch (error) {
        console.error(error);
      }
    }
    value.description = description;
    value.descriptionEn = descriptionEn;

    let returnResult = await addProductContent(product._id, value, session);
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
      key: randomId(),

      title: "",

      titleEn: "",

      content: "",

      contentEn: "",

      imgSrc: "",

      descriptionEn: "",
      description: "",
    },
  });

  return (
    <div style={{ maxHeight: "500px", overflowY: "auto" }}>
      {isSucess ? <ToastGenerator message={sucessMessage} /> : <></>}
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

                <div className="flex w-full flex-wrap md:flex-nowrap gap-6 justify-center">
                  <TextInput
                    label="Title"
                    placeholder="Title"
                    {...form.getInputProps(`title`)}
                  />
                  <TextInput
                    label="Title (English)"
                    placeholder="Title (English)"
                    {...form.getInputProps(`titleEn`)}
                  />
                </div>

                <div className="flex w-full flex-wrap md:flex-nowrap gap-6 justify-center">
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
                </div>

                <div className="flex w-full flex-wrap md:flex-nowrap gap-4 justify-center">
                  <Textarea
                    label="Content"
                    placeholder="Content"
                    {...form.getInputProps(`content`)}
                  />
                  <Textarea
                    label="Content (English)"
                    placeholder="Content (English)"
                    {...form.getInputProps(`contentEn`)}
                  />
                </div>

                <div className="flex w-full flex-wrap md:flex-nowrap gap-6 justify-center">
                  <TextEditor
                    onChange={onHandleChange}
                    content={description}
                    contentEn={descriptionEn}
                  />
                </div>

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

export default ContentForm;
