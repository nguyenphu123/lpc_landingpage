"use client";

import React, { useState } from "react";

import { useForm } from "@mantine/form";

import { TextInput, Button, Box, Grid, Col } from "@mantine/core";

import { addIp } from "@/lib/createData";
import { useSession } from "next-auth/react";
import ToastGenerator from "@/lib/toast-tify";

function AddIp({ refreshIp }) {
  let { data: session, status } = useSession();
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // Updated type declaration
  const [isSucess, setIsSucess] = useState(false);
  const [sucessMessage, setSucessMessage] = useState("");
  const form = useForm({
    initialValues: {
      ip: "",
    },
  });

  const onSubmitForm = async (values) => {
    // Continue with the rest of the form submission

    const ip = await addIp(values, session);
    if (ip.success != undefined) {
      showToast(ip.msg);
      refreshIp();
    }
    form.reset();

    setSuccessMessage(ip.msg);

    setTimeout(() => {
      setSuccessMessage(null);
    }, 10000);
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
          <h3 className="flex justify-center">Add new ip</h3>

          <Grid gutter="lg">
            <Col span={12}>
              <TextInput
                label="ip"
                placeholder="ip"
                {...form.getInputProps("ip")}
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

export default AddIp;
