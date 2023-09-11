"use client";

import React, { useState } from "react";

import { useForm } from "@mantine/form";

import { Button, Box, PasswordInput, Grid, Col } from "@mantine/core";
import { updateCustomer } from "@/lib/updateData";
import { useSession } from "next-auth/react";
var bcrypt = require("bcryptjs");
function UpdateUser({ user, handleSaveClick }) {
  let { data: session, status } = useSession();
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // Updated type declaration

  const form = useForm({
    initialValues: { password: "", matchPassword: "" },
  });

  const onSubmitForm = async (values) => {
    let regularExpression =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{12,24}$/;
    if (values.password.match(regularExpression)) {
      if (values.password != values.matchPassword) {
      } else {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hash(values.password, salt).toString();
        let newPassword = {
          _id: user.__id,
          password: hash,
        };
        // Continue with the rest of the form submission

        updateCustomer(newPassword, session);

        form.reset();

        setSuccessMessage("Data added successfully!");
        handleSaveClick();
        setTimeout(() => {
          setSuccessMessage(null);
        }, 5000);
      }
    }
  };

  return (
    // <div style={{ maxHeight: "500px", overflowY: "auto" }}>

    <div className="container">
      <Box maw={"75%"} mx="auto">
        <form onSubmit={form.onSubmit((values) => onSubmitForm(values))}>
          <h3 className="flex justify-center">Update password</h3>

          <Grid gutter="lg">
            <Col span={12}>
              <PasswordInput
                placeholder="Password"
                label="Password"
                description="Password must include at least one letter, number and special character"
                radius="xl"
                withAsterisk
                {...form.getInputProps("password")}
              />
            </Col>
            <Col span={12}>
              <PasswordInput
                placeholder="Password"
                label="Confirm password"
                description="Password Please enter to confirm password"
                radius="xl"
                withAsterisk
                {...form.getInputProps("matchPassword")}
              />
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

export default UpdateUser;
