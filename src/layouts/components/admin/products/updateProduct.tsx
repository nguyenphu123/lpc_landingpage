"use client";

import React, { useState } from "react";

import Image from "next/image";

import { useForm } from "@mantine/form";

import { TextInput, Button, Box, Grid } from "@mantine/core";
import { Select, SelectItem } from "@nextui-org/react";
import { updateProduct } from "@/lib/updateData";
import { useSession } from "next-auth/react";
import ToastGenerator from "@/lib/toast-tify";

function UpdateProductForm({ product, handleSaveClick }) {
  let { data: session, status } = useSession();
  const [showCols, setShowCols] = useState(true);

  // Thêm state để lưu trữ hình ảnh đã chọn

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageURL, setSelectedImageURL] = useState(product.image);
  const [isSucess, setIsSucess] = useState(false);
  const [sucessMessage, setSucessMessage] = useState("");
  const onImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    setSelectedImageURL(URL.createObjectURL(file));
  };

  const onSubmitForm = async (value) => {
    if (selectedImage && selectedImageURL != product.image) {
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

    let returnResult = await updateProduct(value, session);
    if (returnResult.success != undefined) {
      showToast(returnResult.msg);
      handleSaveClick();
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
    initialValues: JSON.parse(JSON.stringify(product)),
  });

  return (
    <div style={{ maxHeight: "500px", overflowY: "auto" }}>
      {isSucess ? <ToastGenerator message={sucessMessage} /> : <></>}
      <div className="container">
        <Box maw={"100%"} mx="auto">
          <form onSubmit={form.onSubmit((values) => onSubmitForm(values))}>
            {showCols && (
              <>
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
                  <Select
                    label="Type"
                    placeholder="Select Type"
                    defaultSelectedKeys={[form.getInputProps("type").value]}
                    onChange={(value) =>
                      (form.getInputProps("type").value = value)
                    }
                  >
                    {[
                      { label: "Solution", value: "Solution" },

                      { label: "Service", value: "Service" },
                    ].map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-6 justify-center">
                  <TextInput
                    label="Title"
                    placeholder="Title"
                    {...form.getInputProps("title")}
                  />
                  <TextInput
                    label="Title (English)"
                    placeholder="Title (English)"
                    {...form.getInputProps("titleEn")}
                  />
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-6 justify-center">
                  <TextInput
                    label="General content"
                    placeholder="General content"
                    {...form.getInputProps("description1")}
                  />
                  <TextInput
                    label="General content (English)"
                    placeholder="General content (English)"
                    {...form.getInputProps("descriptionEn1")}
                  />
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-6 justify-center">
                  <TextInput
                    label="Details"
                    placeholder="Details"
                    {...form.getInputProps("description2")}
                  />
                  <TextInput
                    label="Details (English)"
                    placeholder="Details (English)"
                    {...form.getInputProps("descriptionEn2")}
                  />
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-6 justify-center">
                  <TextInput
                    label="Benefits"
                    placeholder="Benefits, comma-separated"
                    {...form.getInputProps("pros")}
                  />
                  <TextInput
                    label="Benefits(English)"
                    placeholder="Benefits, comma-separated (English)"
                    {...form.getInputProps("prosEn")}
                  />
                </div>
              </>
            )}

            <div
              style={{
                marginTop: "16px",

                display: "flex",

                justifyContent: "flex-end",
              }}
            >
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded mr-2"
              >
                Submit
              </button>
            </div>
          </form>
        </Box>
      </div>
    </div>
  );
}

export default UpdateProductForm;
