import React from "react";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const RichTextEditor = ({
  onChange,

  content,
  contentEn,
}) => {
  const finishWrite = (data) => {
    const returnValue = {
      data: data.data,
      language: data.language,
    };
    onChange(returnValue);
  };

  return (
    <div>
      <p>Tiếng Việt</p>
      <SunEditor
        defaultValue={content}
        onChange={(vn) => {
          const data = {
            data: vn,
            language: "vn",
          };
          finishWrite(data);
        }}
        placeholder="Please type here..."
      />
      <p> Tiếng Anh</p>

      <SunEditor
        defaultValue={contentEn}
        onChange={(en) => {
          const data = {
            data: en,
            language: "en",
          };
          finishWrite(data);
        }}
        placeholder="Please type here..."
      />
    </div>
  );
};

export default RichTextEditor;
