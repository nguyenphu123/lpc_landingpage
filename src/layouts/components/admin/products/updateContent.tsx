"use client";

import React, { useState } from "react";

import Image from "next/image";

import { useForm } from "@mantine/form";

import { TextInput, Button, Box, Code, Grid, Textarea } from "@mantine/core";

import TextEditor from "../RichTextEditor";
import { updateProductContent } from "@/lib/updateData";
import { useSession } from "next-auth/react";
import ToastGenerator from "@/lib/toast-tify";

function UpdateContentForm({ product, content }) {
  const [submittedValues, setSubmittedValues] = useState("");
  let { data: session, status } = useSession();
  const [descriptionEn, setDescriptionEn]: any = useState(
    content.descriptionEn,
  );
  const [description, setDescription]: any = useState(content.description);

  // Thêm state để lưu trữ hình ảnh đã chọn

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageURL, setSelectedImageURL] = useState(content.imgSrc);
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
    setSelectedImageURL(URL.createObjectURL(file));
  };

  const onSubmitForm = async (value) => {
    let updateData = JSON.parse(JSON.stringify(value));
    if (selectedImage && selectedImageURL != content.imgSrc) {
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

        updateData.imgSrc = data.secure_url;
      } catch (error) {
        console.error(error);
      }
    }

    updateData["description"] = description.toString();
    updateData["descriptionEn"] = descriptionEn.toString();

    let returnResult = await updateProductContent(
      product._id,
      updateData,
      session,
    );
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
    initialValues: JSON.parse(JSON.stringify(content)),
  });

  return (
    <div style={{ maxHeight: "700px", overflowY: "auto" }}>
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

                <div className="flex w-full flex-wrap md:flex-nowrap gap-4 justify-center">
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

                <div className="flex w-full flex-wrap md:flex-nowrap gap-4 justify-center">
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
                      {selectedImageURL ? (
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
                </div>

                <div className="flex w-full flex-wrap md:flex-nowrap gap-6 justify-center">
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

export default UpdateContentForm;
