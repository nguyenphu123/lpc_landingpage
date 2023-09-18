"use client";
import React, { useState } from "react";
import { useForm } from "@mantine/form";
import { TextInput, Button, Box, Grid, Col, Checkbox } from "@mantine/core";
import { useSession } from "next-auth/react";
import ToastGenerator from "@/lib/toast-tify";
import { UpdateMenuItem } from "@/lib/updateData";

function UpdateItem({ item, refresh }) {
  let { data: session, status } = useSession();
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // Updated type declaration
  const [isSucess, setIsSucess] = useState(false);
  const [sucessMessage, setSucessMessage] = useState("");
  const form = useForm({
    initialValues: JSON.stringify(JSON.parse(item)),
  });

  const onSubmitForm = async (values) => {
    // Continue with the rest of the form submission

    const item = await UpdateMenuItem(values, session);
    if (item.success != undefined) {
      showToast(item.msg);
      refresh();
    }
    form.reset();

    setSuccessMessage(item.msg);

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
          <h3 className="flex justify-center">Update item</h3>

          <Grid gutter="lg">
            <Col span={12}>
              <TextInput
                label="name"
                placeholder="name"
                {...form.getInputProps("name")}
              />
            </Col>
            
            <Col span={12}>
              <TextInput
                label="link"
                placeholder="link"
                {...form.getInputProps("link")}
              />
            </Col>
            <Checkbox
              mt="md"
              label="item has children?"
              {...form.getInputProps("hasChildren", { type: "checkbox" })}
            />
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

export default UpdateItem;
