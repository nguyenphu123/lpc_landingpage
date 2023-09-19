import { loadCompanyInfo } from "@/lib/loadData";
import ToastGenerator from "@/lib/toast-tify";
import { Box, Button, Col, Grid, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useUrl } from "nextjs-current-url";
import { useEffect, useState } from "react";
import Image from "next/image";
import TextEditor from "../RichTextEditor";
import { updateCompanyInfo } from "@/lib/updateData";
import { useSession } from "next-auth/react";
function UpdateCompanyInfo({}) {
  let [companyDatas, setCompanyDatas]: any = useState({});
  const { href } = useUrl() ?? {};
  const [selectedDescriptionImage, setSelectedDescriptionImage] =
    useState(null);
  const [selectedDescriptionImageURL, setSelectedDescriptionImageURL] =
    useState("");
  const [selectedCoreImage, setSelectedCoreImage] = useState(null);
  const [selectedCoreImageURL, setSelectedCoreImageURL] = useState("");
  const [isSucess, setIsSucess] = useState(false);
  const [sucessMessage, setSucessMessage] = useState("");
  const [descriptionEn, setDescriptionEn]: any = useState("");
  const [description, setDescription]: any = useState("");
  const [coreEn, setCoreEn]: any = useState("");
  const [core, setCore]: any = useState("");
  let { data: session, status } = useSession();
  const form = useForm({
    initialValues: {},
  });
  const onHandleDescriptionChange = (e: any) => {
    if (e.language == "vn") {
      setDescription(e.data);
    } else {
      setDescriptionEn(e.data);
    }

    // form.insertListItem(`content.${e.idcontent}.description.${e.id}`, e);
  };
  const onHandleCoreChange = (e: any) => {
    if (e.language == "vn") {
      setCore(e.data);
    } else {
      setCoreEn(e.data);
    }

    // form.insertListItem(`content.${e.idcontent}.description.${e.id}`, e);
  };
  const onDescriptionImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedDescriptionImage(file);
    setSelectedDescriptionImageURL(URL.createObjectURL(file));
  };
  const onCoreImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedCoreImage(file);
    setSelectedCoreImageURL(URL.createObjectURL(file));
  };
  useEffect(() => {
    // declare the data fetching function
    async function fetchNew() {
      if (Object.keys(companyDatas).length == 0) {
        const companyCheck = await loadCompanyInfo(href);
        setCompanyDatas(companyCheck.company[0]);
        setSelectedDescriptionImageURL(
          companyCheck.company[0].companyDescription.image,
        );
        setSelectedCoreImageURL(companyCheck.company[0].companyCore.image);
        setDescriptionEn(companyCheck.company[0].companyDescriptionEn.content);
        setDescription(companyCheck.company[0].companyDescription.content);
        setCoreEn(companyCheck.company[0].companyCoreEn.content);
        setCore(companyCheck.company[0].companyCore.content);
        form.setValues(JSON.parse(JSON.stringify(companyCheck.company[0])));
      } else {
      }
    }

    // call the function
    fetchNew()
      // make sure to catch any error
      .catch(console.error);
  }, [companyDatas]);
  const onSubmitForm = async (value) => {
    let newInfo: any = JSON.parse(JSON.stringify(companyDatas));
    newInfo.companyName = value.companyName;
    newInfo._id = value._id;
    if (
      selectedDescriptionImage &&
      selectedDescriptionImageURL != companyDatas.companyDescription.image
    ) {
      const formData = new FormData();

      formData.append("file", selectedDescriptionImage);

      formData.append("upload_preset", "ml_default");

      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/derjssgq9/image/upload",

          {
            method: "POST",

            body: formData,
          },
        );

        const data = await response.json();

        newInfo.companyDescription.image = data.secure_url;
        newInfo.companyDescriptionEn.image = data.secure_url;
      } catch (error) {
        console.error(error);
      }
    }
    if (
      selectedCoreImage &&
      selectedCoreImageURL != companyDatas.companyCore.image
    ) {
      const formData = new FormData();

      formData.append("file", selectedCoreImage);

      formData.append("upload_preset", "ml_default");

      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/derjssgq9/image/upload",

          {
            method: "POST",

            body: formData,
          },
        );

        const data = await response.json();

        newInfo.companyCore.image = data.secure_url;
        newInfo.companyCoreEn.image = data.secure_url;
      } catch (error) {
        console.error(error);
      }
    }
    newInfo.companyDescription.content = description;
    newInfo.companyDescriptionEn.content = descriptionEn;
    newInfo.companyCore.content = core;
    newInfo.companyCoreEn.content = coreEn;
    let returnResult = await updateCompanyInfo(
      newInfo,

      session,
    );
    if (returnResult.success != undefined) {
      showToast(returnResult.msg);
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

  return Object.keys(companyDatas).length == 0 ? (
    <section className="section pt-7">
      <div className="container">
        <div className="row justify-center">
          <article className="lg:col-10">
            <div style={{ margin: "200px" }}></div>
            <div className="text-center">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  ) : (
    <div style={{ maxHeight: "500px", overflowY: "auto" }}>
      {isSucess ? <ToastGenerator message={sucessMessage} /> : <></>}
      <div className="container">
        <Box maw={"100%"} mx="auto">
          <form onSubmit={form.onSubmit((values) => onSubmitForm(values))}>
            <Grid gutter="lg">
              <Col span={4}>
                <TextInput
                  label="companyName"
                  placeholder="companyName"
                  {...form.getInputProps(`companyName`)}
                />
              </Col>
              <Col span={6}>
                <label>Choose description Image</label>

                {/* Trường input tệp ẩn */}

                <input
                  type="file"
                  accept="image/*"
                  onChange={onDescriptionImageChange}
                  style={{ display: "none" }}
                  id="imageInput"
                />

                {/* Nút thay thế */}

                <label
                  htmlFor="imageInput"
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      width: "100%",

                      height: "100px",

                      backgroundColor: "#f0f0f0",

                      display: "flex",

                      alignItems: "center",

                      justifyContent: "center",

                      border: "2px dashed #ccc",

                      borderRadius: "8px",
                    }}
                  >
                    {selectedDescriptionImageURL ? (
                      <Image
                        src={selectedDescriptionImageURL}
                        alt="Selected Image"
                        width={150}
                        height={150}
                      />
                    ) : (
                      <span>Click to choose an image</span>
                    )}
                  </div>
                </label>
              </Col>
              <TextEditor
                onChange={onHandleDescriptionChange}
                content={description}
                contentEn={descriptionEn}
              />
              <Col span={6}>
                <label>Choose core Image</label>

                {/* Trường input tệp ẩn */}

                <input
                  type="file"
                  accept="image/*"
                  onChange={onCoreImageChange}
                  style={{ display: "none" }}
                  id="imageInput"
                />

                {/* Nút thay thế */}

                <label
                  htmlFor="imageInput"
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      width: "100%",

                      height: "100px",

                      backgroundColor: "#f0f0f0",

                      display: "flex",

                      alignItems: "center",

                      justifyContent: "center",

                      border: "2px dashed #ccc",

                      borderRadius: "8px",
                    }}
                  >
                    {selectedCoreImageURL ? (
                      <Image
                        src={selectedCoreImageURL}
                        alt="Selected Image"
                        width={150}
                        height={150}
                      />
                    ) : (
                      <span>Click to choose an image</span>
                    )}
                  </div>
                </label>
              </Col>
              <TextEditor
                onChange={onHandleCoreChange}
                content={core}
                contentEn={coreEn}
              />
            </Grid>

            <div
              style={{
                marginTop: "16px",

                display: "flex",

                justifyContent: "flex-end",
              }}
            >
              <Button
                type="submit"
                style={{ backgroundColor: "#007bff", color: "white" }}
              >
                Submit
              </Button>
            </div>
          </form>
        </Box>
      </div>
    </div>
  );
}

export default UpdateCompanyInfo;
