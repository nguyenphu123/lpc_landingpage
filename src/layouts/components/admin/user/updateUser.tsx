"use client";

import React, { useState } from "react";

import { useForm } from "@mantine/form";

import { Button, Box, PasswordInput, Grid } from "@mantine/core";
import { updateUsersPassword } from "@/lib/updateData";
import { useSession } from "next-auth/react";
import ToastGenerator from "@/lib/toast-tify";
var bcrypt = require("bcryptjs");
function UpdateUser({ user, handleSaveClick }) {
  let { data: session, status } = useSession();
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // Updated type declaration
  const [isSucess, setIsSucess] = useState(false);
  const [sucessMessage, setSucessMessage] = useState("");
  const form = useForm({
    initialValues: { password: "", matchPassword: "" },
  });

  const onSubmitForm = async (values) => {
    let regularExpression =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{12,}$/;
    if (values.password.match(regularExpression)) {
      if (values.password != values.matchPassword) {
        showToast("Confirm password does not match");
      } else {
        var salt = await bcrypt.genSaltSync(10);
        var hash = await bcrypt.hash(values.password, salt);
        let newPassword = {
          _id: user._id,
          password: hash,
          loginCount: 1,
        };
        // Continue with the rest of the form submission

        let returnResult = await updateUsersPassword(newPassword, session);
        if (returnResult.success != undefined) {
          showToast(returnResult.msg);
        }
        form.reset();
        setTimeout(() => {
          handleSaveClick();
        }, 10000);
      }
    } else {
      showToast("Your password format is not correct");
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
    // <div style={{ maxHeight: "500px", overflowY: "auto" }}>

    <div className="container">
      {isSucess ? <ToastGenerator message={sucessMessage} /> : <></>}
      <Box maw={"75%"} mx="auto">
        <form onSubmit={form.onSubmit((values) => onSubmitForm(values))}>
          <h3 className="flex justify-center">Update password</h3>

          <Grid gutter="lg">
            <Grid.Col span={12}>
              <PasswordInput
                placeholder="Password"
                label="Password"
                description="Password must include at least one letter, number and special character"
                radius="xl"
                withAsterisk
                {...form.getInputProps("password")}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <PasswordInput
                placeholder="Password"
                label="Confirm password"
                description="Password Please enter to confirm password"
                radius="xl"
                withAsterisk
                {...form.getInputProps("matchPassword")}
              />
            </Grid.Col>
            <Grid.Col span={6} className="flex justify-end mt-6">
              {/* Thêm class CSS để đặt nút submit ở góc phải */}

              <Button
                type="submit"
                style={{ backgroundColor: "blue" }}
                size="md"
              >
                Submit
              </Button>
            </Grid.Col>
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
