"use client";

import React, { useState } from "react";

import { useForm } from "@mantine/form";

import { TextInput, Button, Box, Grid } from "@mantine/core";

import { CreateRecruitBanners } from "@/lib/createData";

import { useSession } from "next-auth/react";
import TextEditor from "../RichTextEditor";
import ToastGenerator from "@/lib/toast-tify";

function RecruitBannersForm({ refreshRecruitBanners }) {
  let { data: session, status } = useSession();

  const [successMessage, setSuccessMessage] = useState<string | null>(null); // Updated type declaration

  const [isSucess, setIsSucess] = useState(false);

  const [sucessMessage, setSucessMessage] = useState("");
  const [descriptionEn, setDescriptionEn]: any = useState();
  const [description, setDescription]: any = useState();
  const form = useForm({
    initialValues: {
      title: "",
      titleEn: "",
      description: "",
      descriptionEn: "",
      numberOfRecruitment: "",
      numberOfRecruitmentEn: "",
      salary: "",
      salaryEn: "",
      status: "Active",
    },
  });
  const onHandleChange = (e: any) => {
    if (e.language == "vn") {
      setDescription(e.data);
    } else {
      setDescriptionEn(e.data);
    }

    // form.insertListItem(`content.${e.idcontent}.description.${e.id}`, e);
  };
  const onSubmitForm = async (values) => {
    // Continue with the rest of the form submission
    values["description"] = description.toString();
    values["descriptionEn"] = descriptionEn.toString();
    let returnResult = await CreateRecruitBanners(values, session);

    form.reset();

    if (returnResult.success != undefined) {
      showToast(returnResult.msg);

      refreshRecruitBanners();
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

      <Box maw={"100%"} mx="auto">
        <form onSubmit={form.onSubmit((values) => onSubmitForm(values))}>
          <h3 className="flex justify-center">Add new recruit banner</h3>

          <Grid gutter="lg">
            <Grid.Col span={12}>
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
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput
                label="numberOfRecruitment"
                placeholder="numberOfRecruitment"
                {...form.getInputProps("numberOfRecruitment")}
              />
              <TextInput
                label="numberOfRecruitment (English)"
                placeholder="numberOfRecruitment (English)"
                {...form.getInputProps("numberOfRecruitmentEn")}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput
                label="salary"
                placeholder="salary"
                {...form.getInputProps("salary")}
              />
              <TextInput
                label="salary (English)"
                placeholder="salary (English)"
                {...form.getInputProps("salaryEn")}
              />
            </Grid.Col>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-6 justify-center">
              <TextEditor
                onChange={onHandleChange}
                content={description}
                contentEn={descriptionEn}
              />
            </div>
            <Grid.Col span={6} className="flex justify-end mt-6">
              {/* Thêm class CSS để đặt nút submit ở góc phải */}

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded mr-2"
              >
                Submit
              </button>
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

export default RecruitBannersForm;
