import React, { useRef } from "react";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import { Editor } from "@tinymce/tinymce-react";

export default function RichTextEditor({
  onChange,

  content,
  contentEn,
}) {
  const finishWrite = (data) => {
    const returnValue = {
      data: data.data,
      language: data.language,
    };

    onChange(returnValue);
  };
  const handleImageUploadBefore = async (blobInfo) => {
    const formData = new FormData();
    formData.append("file", blobInfo.blob(), blobInfo.filename());
    formData.append("upload_preset", "ml_default");
    try {
    } catch (error) {
      console.error(error);
    }

    // called here for stop double image
  };

  return (
    <div>
      <p>Tiếng Việt</p>
      <Editor
        apiKey="8jo1uligpkc7y1v598qze63nfgfvcflmy7ifyfqt9ah17l7m"
        init={{
          height: 1500,
          width: 850,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help | image",
          images_file_types: "jpg,svg,webp,png",
          paste_data_images: true,
        }}
        initialValue={content}
        onEditorChange={(vn) => {
          const data = {
            data: vn,
            language: "vn",
          };

          finishWrite(data);
        }}
      />

      <p> Tiếng Anh</p>
      <Editor
        apiKey="8jo1uligpkc7y1v598qze63nfgfvcflmy7ifyfqt9ah17l7m"
        init={{
          height: 1500,
          width: 850,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help | image",
          images_file_types: "jpg,svg,webp,png",
          paste_data_images: true,
        }}
        initialValue={contentEn}
        onEditorChange={(en) => {
          const data = {
            data: en,
            language: "en",
          };

          finishWrite(data);
        }}
      />
    </div>
  );
}
