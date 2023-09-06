"use client";

import React, { useState } from "react";

import { useForm } from "@mantine/form";

import { TextInput, Button, Box, Code, Grid, Col } from "@mantine/core";

import { addCustomer } from "@/lib/createData";
import { useSession } from "next-auth/react";

function CustomerForm() {
  const [selectedImage, setSelectedImage] = useState(null);
  let { data: session, status } = useSession();
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // Updated type declaration

  const form = useForm({
    initialValues: {
      name: "",

      src: "",
    },
  });

  const onImageChange = (e) => {
    const file = e.target.files[0];

    setSelectedImage(file);
  };

  const onSubmitForm = async (values) => {
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

        values.src = data.secure_url; // Save the uploaded image URL to the form data
      } catch (error) {
        console.error(error);
      }
    }

    // Continue with the rest of the form submission

    addCustomer(values, session);

    form.reset();

    setSuccessMessage("Data added successfully!");

    setTimeout(() => {
      setSuccessMessage(null);
    }, 5000);
  };

  return (
    // <div style={{ maxHeight: "500px", overflowY: "auto" }}>

    <div className="container">
      <Box maw={"75%"} mx="auto">
        <form onSubmit={form.onSubmit((values) => onSubmitForm(values))}>
          <h3 className="flex justify-center">Add new customers</h3>

          <Grid gutter="lg">
            <Col span={12}>
              <TextInput
                label="Name"
                placeholder="Name"
                {...form.getInputProps("name")}
              />
            </Col>

            <Col span={6}>
              <input type="file" accept="image/*" onChange={onImageChange} />
            </Col>

            <Col span={6} className="flex justify-end mt-6">
              {/* Thêm class CSS để đặt nút submit ở góc phải */}

              <Button
                type="submit"
                style={{ backgroundColor: "blue" }}
                size="md"
              >
                Submit
              </Button>
            </Col>
          </Grid>
        </form>

        {successMessage && (
          <div style={{ marginTop: "16px", color: "green" }}>
            {successMessage}
          </div>
        )}
      </Box>
    </div>

    // </div>
  );
}

export default CustomerForm;
