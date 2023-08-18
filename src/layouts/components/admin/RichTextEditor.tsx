import React, { useState } from "react";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import { Button } from "@mantine/core";
const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const RichTextEditor = ({
  id,
  title,
  titleEn,
  onChange,
  language,
  descriptionId,
}) => {
  const [description, setDescription] = useState({});
  const [descriptionVn, setDescriptionVn]: any = useState({});
  const [descriptionEn, setDescriptionEn]: any = useState({});
  const finishWrite = (data) => {
    if (data.language == "en") {
      setDescriptionEn(data);
    } else {
      setDescriptionVn(data);
    }
  };
  const onSubmit = () => {
    const resultData = {
      id: descriptionId,
      title: descriptionVn.title,
      titleEn: descriptionEn.titleEn,

      content: descriptionVn.content,
      contentEn: descriptionEn.contentEn,
      show: true,
      idcontent: id,
    };
    onChange(resultData);
  };
  return (
    <>
      <Button onClick={() => onSubmit()}>Done</Button>
      <p>Tiếng Việt</p>
      <SunEditor
        onChange={(vn) => {
          const data = {
            id: descriptionId,
            title: title,

            content: vn,

            show: true,
            idcontent: id,
            language: "vn",
          };
          finishWrite(data);
        }}
        placeholder="Please type here..."
      />
      <p> Tiếng Anh</p>

      <SunEditor
        onChange={(en) => {
          const data = {
            id: descriptionId,

            titleEn: titleEn,

            contentEn: en,
            show: true,
            idcontent: id,
            language: "en",
          };
          finishWrite(data);
        }}
        placeholder="Please type here..."
      />
    </>
  );
};

export default RichTextEditor;
