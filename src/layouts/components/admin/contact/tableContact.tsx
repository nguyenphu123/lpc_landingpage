import React, { useState, useEffect } from "react";

import {
  Table,
  Modal,
  Button,
  Box,
  Grid,
  Col,
  TextInput,
  Textarea,
  Group,
  Switch,
  ActionIcon,
} from "@mantine/core"; // Import thêm Button
import { loadContact } from "@/lib/loadData";
import { useUrl } from "nextjs-current-url";
import { useSession } from "next-auth/react";
import { updateContactInfo } from "@/lib/updateData";
import ToastGenerator from "@/lib/toast-tify";
import { useForm } from "@mantine/form";
import UpdateCompanyInfo from "./updateCompanyInfo";

interface Contact {
  _id: string;

  address: string;

  addressEn: string;

  addressLink: string;

  email: string;

  linkWebsite: string;

  phoneNumber: string[];

  socialAccount: string[];
}

function ContactTable() {
  const { pathname, href } = useUrl() ?? {};
  const [contactData, setContactData] = useState<Contact[]>([]);
  let { data: session, status }: any = useSession();
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  const [isEditMode, setIsEditMode] = useState(false);

  const [showContent, setShowContent] = useState(false);
  const [isSucess, setIsSucess] = useState(false);
  const [sucessMessage, setSucessMessage] = useState("");
  useEffect(() => {
    const fetchNew = async () => {
      if (contactData.length == 0) {
        const contactCheck = await loadContact(href);
        setContactData(contactCheck.contact);
      }
    };
    // call the function
    fetchNew()
      // make sure to catch any error
      .catch(console.error);
  }, [contactData]);

  const handleEditClick = (contact: Contact) => {
    setSelectedContact(contact);

    setIsEditMode(selectedContact === contact); // Chỉ thiết lập isEditMode thành true nếu sản phẩm đã được chọn đang được chỉnh sửa
    form.setValues(contact);
  };

  const handleSaveClick = async (values) => {
    // Thực hiện lưu thay đổi vào cơ sở dữ liệu (gọi API, ...)
    let returnResult = await updateContactInfo(values, session);
    if (returnResult.success != undefined) {
      showToast(returnResult.msg);
      const contactCheck = await loadContact(href);
      setContactData(contactCheck.contact);
    }
    setIsEditMode(false); // Chuyển về chế độ xem sau khi lưu thành công
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
    initialValues: JSON.parse(JSON.stringify({})),
  });
  const rows = contactData.map((contact, index) => (
    <tr key={contact._id}>
      <td>{index + 1}</td>

      <td>{contact.address}</td>

      <td>{contact.email}</td>

      <td>{contact.linkWebsite}</td>

      <td>
        <button onClick={() => handleEditClick(contact)}>Edit</button>
      </td>

      <td>
        {/* <button onClick={() => handleEditClick(news)}>Edit</button> */}
      </td>
    </tr>
  ));
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <>
        <div className="container mx-auto">
          <div className="flex justify-between items-center p-4">
            <div className="w-32"></div>

            <button
              onClick={togglePopup}
              className="bg-primary rounded-full py-3 px-6 text-base font-medium text-white w-32"
            >
              Update
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="max-w-[1000px] bg-white rounded-lg p-8">
              <div className="flex justify-end">
                <button
                  onClick={togglePopup}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <UpdateCompanyInfo />
            </div>
          </div>
        )}
      </>

      <Table>
        <thead>
          <tr>
            <th>#</th>

            <th>Address</th>

            <th>Email</th>

            <th>Link website</th>

            <th>Action</th>
          </tr>
        </thead>

        <tbody>{rows}</tbody>
      </Table>

      <Modal
        size="1000px"
        opened={Boolean(selectedContact)}
        onClose={() => {
          setSelectedContact(null);

          setIsEditMode(false); // Đảm bảo rằng sau khi đóng modal, chế độ xem lại được kích hoạt
        }}
      >
        {selectedContact && (
          <section className="section">
            <div className="container">
              <h3 className="flex justify-center">
                {isEditMode ? "Edit Contact" : "Contact Details"}
              </h3>
              {isSucess ? <ToastGenerator message={sucessMessage} /> : <></>}
              <Box maw={900} mx="auto">
                <form
                  onSubmit={form.onSubmit((values) => handleSaveClick(values))}
                >
                  <Grid gutter="lg">
                    <Col span={6}>
                      <label>Address: </label>

                      <Textarea
                        {...form.getInputProps("address")}
                        style={{ width: "100%", height: "90px" }}
                      />
                    </Col>

                    <Col span={6}>
                      <label>Address (English): </label>

                      <Textarea
                        style={{ width: "100%", height: "90px" }}
                        {...form.getInputProps("addressEn")}
                      />
                    </Col>

                    <Col span={6}>
                      <label>Address Link: </label>

                      <TextInput
                        style={{ width: "100%", height: "90px" }}
                        {...form.getInputProps("addressLink")}
                      />
                    </Col>

                    <Col span={6}>
                      <label>Link Website: </label>

                      <TextInput
                        {...form.getInputProps("linkWebsite")}
                        style={{ width: "100%", height: "90px" }}
                      />
                    </Col>

                    <Col span={4}>
                      <label>Email: </label>

                      <TextInput
                        {...form.getInputProps("email")}
                        style={{ width: "100%", height: "90px" }}
                      />
                    </Col>

                    <Col span={4}>
                      <label>Phone Number: </label>

                      {selectedContact.phoneNumber.map((number, index) => (
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
                      {/* <Group position="center" mt="md">
                        <Button
                          variant="default"
                          onClick={() => form.insertListItem("phoneNumber", "")}
                        >
                          Add phone number
                        </Button>
                      </Group> */}
                    </Col>

                    <Col span={4}>
                      <label>Social Account: </label>
                      {selectedContact.socialAccount.map((account, index) => (
                        <Group key={account} mt="xl">
                          <Textarea
                            {...form.getInputProps(`socialAccount.${index}`)}
                            style={{ width: "70%", height: "150px" }}
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
                      {/* <Group position="center" mt="md">
                        <Group position="center" mt="md">
                          <Button
                            variant="default"
                            onClick={() =>
                              form.insertListItem("socialAccount", "")
                            }
                          >
                            Add account
                          </Button>
                        </Group>
                      </Group> */}
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
                    {/* ... Các phần khác tương tự như trên */}
                  </Grid>
                </form>
              </Box>
            </div>
          </section>
        )}
      </Modal>
    </div>
  );
}

export default ContactTable;
