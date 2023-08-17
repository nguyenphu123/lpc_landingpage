"use client";

import { useState } from "react";

import { useForm } from "@mantine/form";

import { TextInput, Button, Box, Code } from "@mantine/core";
import { addCustomer } from "@/lib/createData";

function CustomerForm() {
  const [submittedValues, setSubmittedValues] = useState("");

  const form = useForm({
    initialValues: {
      name: "",

      src: "",
    },
  });

  return (
    <section className="section">
      <div className="container">
        <Box maw={400} mx="auto">
          <form onSubmit={form.onSubmit((values) => addCustomer(values))}>
            <h3 className="flex justify-center">Add new customers</h3>

            <TextInput
              label="Name"
              placeholder="Name"
              {...form.getInputProps("name")}
            />

            <TextInput
              label="Source Image"
              placeholder="Source Image"
              mt="md"
              {...form.getInputProps("src")}
            />

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

export default CustomerForm;
