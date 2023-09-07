import React, { useRef } from "react";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import { Editor } from "@tinymce/tinymce-react";
const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

export default function RichTextEditor({
  onChange,

  content,
  contentEn,
}) {
  // const editor = useRef();

  // const getSunEditorInstance = (sunEditor) => {
  //   editor.current = sunEditor;
  // };

  const finishWrite = (data) => {
    const returnValue = {
      data: data.data,
      language: data.language,
    };

    onChange(returnValue);
  };
  const handleImageUploadBefore = async (
    blobInfo,
    success,
    failure,
    progress,
  ) => {
    const formData = new FormData();
    formData.append("file", blobInfo.blob(), blobInfo.filename());
    formData.append("upload_preset", "ml_default");
    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/derjssgq9/image/upload",
        {
          method: "POST",
          body: formData,
        },
      );
    } catch (error) {
      console.error(error);
    }

    // called here for stop double image
  };

  // let options = {
  //   defaultTag: "",
  //   textTags: {
  //     bold: "b",
  //     underline: "u",
  //     italic: "i",
  //     strike: "s",
  //   },
  //   font: ["Arial", "tohoma", "Courier New,Courier", "Times New Roman"],
  //   mode: "classic",
  //   rtl: false,
  //   katex: "window.katex",
  //   imageSizeOnlyPercentage: true,
  //   // imageUploadUrl: "https://api.cloudinary.com/v1_1/derjssgq9/image/upload",
  //   imageMultipleFile: true,
  //   imageAccept: "",
  //   // videoResizing: false,
  //   // videoHeightShow: false,
  //   // videoAlignShow: false,
  //   // videoFileInput: false,
  //   // videoUrlInput: false,
  //   // videoRatioShow: false,
  //   tableCellControllerPosition: "",
  //   tabDisable: false,
  //   linkProtocol: "",
  //   templates: [
  //     {
  //       name: "Template-1",
  //       html: "<p>HTML source1</p>",
  //     },
  //     {
  //       name: "Template-2",
  //       html: "<p>HTML source2</p>",
  //     },
  //   ],
  //   icons: {
  //     paragraph_style:
  //       '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>',
  //   },
  //   buttonList: [
  //     [
  //       "undo",
  //       "redo",
  //       "font",
  //       "fontSize",
  //       "formatBlock",
  //       "paragraphStyle",
  //       "blockquote",
  //       "bold",
  //       "underline",
  //       "italic",
  //       "strike",
  //       "subscript",
  //       "superscript",
  //       "fontColor",
  //       "hiliteColor",
  //       "textStyle",
  //       "removeFormat",
  //       "outdent",
  //       "indent",
  //       "align",
  //       "horizontalRule",
  //       "list",
  //       "lineHeight",
  //       "table",
  //       "link",
  //       "image",
  //       // "video",
  //       // "audio",
  //       "math",
  //       "imageGallery",
  //       "fullScreen",
  //       "showBlocks",
  //       "codeView",
  //       "preview",
  //       "print",
  //       "save",
  //       "template",
  //     ],
  //   ],

  //   "lang(In nodejs)": "en",
  // };

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
          images_file_types: "jpg,svg,webp",
          file_picker_callback: handleImageUploadBefore,
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
      {/* <SunEditor
        setOptions={options}
        defaultValue={content}
        // getSunEditorInstance={getSunEditorInstance}
        onImageUploadBefore={(files, info, uploadHandler) =>
          handleImageUploadBefore(files, info, uploadHandler)
        }
        height="1500px"
        onChange={(vn) => {
          const data = {
            data: vn,
            language: "vn",
          };

          finishWrite(data);
        }}
        placeholder="Please type here..."
      /> */}
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
          images_file_types: "jpg,svg,webp",
          file_picker_callback: handleImageUploadBefore,
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
      {/* <SunEditor
        setOptions={options}
        defaultValue={contentEn}
        getSunEditorInstance={getSunEditorInstance}
        onImageUploadBefore={(files, info, uploadHandler) =>
          handleImageUploadBefore(files, info, uploadHandler)
        }
        height="1500px"
        onChange={(en) => {
          const data = {
            data: en,
            language: "en",
          };
          finishWrite(data);
        }}
        placeholder="Please type here..."
      /> */}
    </div>
  );
}
