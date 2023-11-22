import React, { useState, useEffect } from "react";
import { Modal, Button, useDisclosure, ModalContent } from "@nextui-org/react";
import {
  Box,
  Grid,
  TextInput,
  Textarea,
  Group,
  ActionIcon,
} from "@mantine/core"; // Import thêm Button
import { useSession } from "next-auth/react";
import { updateContactInfo } from "@/lib/updateData";
import ToastGenerator from "@/lib/toast-tify";
import { useForm } from "@mantine/form";

function EditContactInfo({ contact }) {
  let { data: session, status }: any = useSession();

  const [isSucess, setIsSucess] = useState(false);
  const [sucessMessage, setSucessMessage] = useState("");

  const handleSaveClick = async (values) => {
    // Thực hiện lưu thay đổi vào cơ sở dữ liệu (gọi API, ...)
    let returnResult = await updateContactInfo(values, session);
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
  const form = useForm({
    initialValues: JSON.parse(JSON.stringify(contact)),
  });
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        className="bg-primary rounded-full py-3 px-6 text-base font-medium text-white w-32"
      >
        Edit
      </Button>
      <Modal
        size="5xl"
        backdrop="blur"
        isOpen={isOpen}
        style={{ background: "#FFFFFF" }}
        onOpenChange={onOpenChange}
        scrollBehavior="normal"
      >
        <ModalContent>
          {contact && (
            <section className="section">
              <div className="container">
                <h3 className="flex justify-center">{"Edit Contact"}</h3>
                {isSucess ? <ToastGenerator message={sucessMessage} /> : <></>}
                <Box maw={900} mx="auto">
                  <form
                    onSubmit={form.onSubmit((values) =>
                      handleSaveClick(values),
                    )}
                  >
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4 justify-center">
                      <label>Address: </label>

                      <Textarea
                        {...form.getInputProps("address")}
                        style={{ width: "100%", height: "90px" }}
                      />
                      <label>Address (English): </label>

                      <Textarea
                        style={{ width: "100%", height: "90px" }}
                        {...form.getInputProps("addressEn")}
                      />
                    </div>
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4 justify-center">
                      <label>Address Link: </label>
                      <TextInput
                        style={{ width: "100%", height: "90px" }}
                        {...form.getInputProps("addressLink")}
                      />
                      <label>Link Website: </label>
                      <TextInput
                        {...form.getInputProps("linkWebsite")}
                        style={{ width: "100%", height: "90px" }}
                      />
                    </div>

                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4 justify-center">
                      <label>Email: </label>

                      <TextInput
                        {...form.getInputProps("email")}
                        style={{ width: "100%", height: "90px" }}
                      />
                      <label>Social Account: </label>
                      {contact.socialAccount.map((account, index) => (
                        <Group key={account} mt="xl">
                          <Textarea
                            {...form.getInputProps(`socialAccount.${index}`)}
                            style={{ width: "100%", height: "90px" }}
                          />
                          <ActionIcon
                            color="red"
                            onClick={() =>
                              form.removeListItem("socialAccount", index)
                            }
                          >
                            remove
                          </ActionIcon>
                        </Group>
                      ))}
                    </div>

                    <label>Phone Number: </label>

                    {contact.phoneNumber.map((number, index) => (
                      <Group key={number} mt="xs">
                        <TextInput
                          {...form.getInputProps(`phoneNumber.${index}`)}
                          style={{ width: "70%", height: "50px" }}
                        />
                        <ActionIcon
                          color="red"
                          onClick={() =>
                            form.removeListItem("phoneNumber", index)
                          }
                        >
                          remove
                        </ActionIcon>
                      </Group>
                    ))}

                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4 justify-center">
                      {/* Thêm class CSS để đặt nút submit ở góc phải */}

                      <Button
                        type="submit"
                        style={{ backgroundColor: "blue" }}
                        size="md"
                      >
                        Submit
                      </Button>
                    </div>
                  </form>
                </Box>
              </div>
            </section>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default EditContactInfo;
