"use client";

import { useState } from "react";

import { useForm } from "@mantine/form";

import { TextInput, Button, Box, Code } from "@mantine/core";
import { useSession } from "next-auth/react";
import { updateContactInfo } from "@/lib/updateData";

function ContactForm() {
  const [submittedValues, setSubmittedValues] = useState("");
  let { data: session, status }: any = useSession();
  const form = useForm({
    initialValues: {
      address: "",

      addressEn: "",

      addressLink: "",

      email: "",

      phoneNumber: [],

      linkWebsite: "",

      socialAccount: [],
    },
  });

  return (
    <section className="section">
      <div className="container">
        <Box maw={600} mx="auto">
          <form
            onSubmit={form.onSubmit((values) =>
              updateContactInfo(values, session),
            )}
          >
            <h3 className="flex justify-center">Update contact content</h3>

            <TextInput
              label="Address"
              placeholder="Address"
              {...form.getInputProps("address")}
            />

            <TextInput
              label="Address (English)"
              placeholder="Address (English)"
              {...form.getInputProps("addressEn")}
            />

            <TextInput
              label="Address Link"
              placeholder="Address Link"
              {...form.getInputProps("addressLink")}
            />

            <TextInput
              label="Email"
              placeholder="Email"
              {...form.getInputProps("email")}
            />

            <TextInput
              label="Phone Number"
              placeholder="Phone Number"
              {...form.getInputProps("phoneNumber[0]")}
            />

            <TextInput
              label="Website Link"
              placeholder="Website Link"
              {...form.getInputProps("linkWebsite")}
            />

            <TextInput
              label="Social Account"
              placeholder="Social Account"
              {...form.getInputProps("socialAccount[0]")}
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
                Update
              </Button>
            </div>
          </form>

          {submittedValues && <Code block>{submittedValues}</Code>}
        </Box>
      </div>
    </section>
  );
}

export default ContactForm;
