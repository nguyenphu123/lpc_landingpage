"use client";

import React, { useState } from "react";

import { useForm } from "@mantine/form";

import { TextInput, Button, Box, Code } from "@mantine/core";

const BannerForm = () => {
  const [submittedValues, setSubmittedValues] = useState("");

  const form = useForm({
    initialValues: {
      title: "",

      titleEn: "",

      content: "",

      contentEn: "",

      image: "",
    },
  });

  return (
    <section className="section">
      <div className="container">
        <Box maw={400} mx="auto">
          <form
            onSubmit={form.onSubmit((values) => {
              setSubmittedValues(JSON.stringify(values, null, 2));
            })}
          >
            <h3 className="flex justify-center">Update banner content</h3>

            <TextInput
              label="Title"
              placeholder="Title"
              {...form.getInputProps("title")}
            />

            <TextInput
              label="Title (English)"
              placeholder="Title (English)"
              mt="md"
              {...form.getInputProps("titleEn")}
            />

            <TextInput
              label="Content"
              placeholder="Content"
              mt="md"
              {...form.getInputProps("content")}
            />

            <TextInput
              label="Content (English)"
              placeholder="Content (English)"
              mt="md"
              {...form.getInputProps("contentEn")}
            />

            <TextInput
              label="Image URL"
              placeholder="Image URL"
              mt="md"
              {...form.getInputProps("image")}
            />

            <Button type="submit" mt="md">
              Submit
            </Button>
          </form>

          {submittedValues && <Code block>{submittedValues}</Code>}
        </Box>
      </div>
    </section>
  );
};

export default BannerForm;
