import React, { useState, useEffect } from "react";

import { Table, Modal, Button, Box, Grid, Col, TextInput } from "@mantine/core"; // Import thêm Button
import { loadContact } from "@/lib/loadData";
import { useUrl } from "nextjs-current-url";
import { useSession } from "next-auth/react";
import { updateContactInfo } from "@/lib/updateData";
import ToastGenerator from "@/lib/toast-tify";

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

  const [addContactVisible, setAddContactVisible] = useState(false);

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

  // const handleEditClick = (news: News) => {

  //   setSelectedNews(news);

  //   setEditNewsVisible(true);

  // };

  const handleEditClick = (contact: Contact) => {
    setSelectedContact(contact);

    setIsEditMode(selectedContact === contact); // Chỉ thiết lập isEditMode thành true nếu sản phẩm đã được chọn đang được chỉnh sửa
  };

  const handleSaveClick = async () => {
    // Thực hiện lưu thay đổi vào cơ sở dữ liệu (gọi API, ...)
    let returnResult = await updateContactInfo(selectedContact, session);
    if (returnResult.success != undefined) {
      showToast(returnResult.msg);
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
  const handleViewClick = (news: Contact) => {
    setSelectedContact(news);

    setIsEditMode(false); // Chuyển sang chế độ xem
  };

  const toggleShowContent = () => {
    setShowContent(!showContent);
  };

  const rows = contactData.map((contact, index) => (
    <tr key={contact._id}>
      <td>{index + 1}</td>

      <td>{contact.address}</td>

      <td>{contact.email}</td>

      <td>{contact.linkWebsite}</td>

      <td>
        <button onClick={() => setSelectedContact(contact)}>View</button> |{" "}
        <button onClick={() => handleEditClick(contact)}>Edit</button>
      </td>

      <td>
        {/* <button onClick={() => handleEditClick(news)}>Edit</button> */}
      </td>
    </tr>
  ));

  return (
    <div>
      {/* <Button

        style={{ backgroundColor: "#007bff", color: "white" }}

        onClick={() => setAddContactVisible(true)}

      >

        Add News

      </Button> */}
      {isSucess ? <ToastGenerator message={sucessMessage} /> : <></>}
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

              <Box maw={800} mx="auto">
                <form>
                  <Grid gutter="lg">
                    <Col span={6}>
                      <label>Address: </label>

                      <textarea
                        value={selectedContact.address}
                        disabled
                        style={{ width: "100%", height: "90px" }}
                      />
                    </Col>

                    <Col span={6}>
                      <label>Address (English): </label>

                      <textarea
                        value={selectedContact.addressEn}
                        disabled
                        style={{ width: "100%", height: "90px" }}
                      />
                    </Col>

                    <Col span={6}>
                      <label>Address Link: </label>

                      <TextInput
                        value={selectedContact.addressLink}
                        disabled
                        style={{ width: "100%", height: "90px" }}
                      />
                    </Col>

                    <Col span={6}>
                      <label>Link Website: </label>

                      <TextInput
                        value={selectedContact.linkWebsite}
                        disabled
                        style={{ width: "100%", height: "90px" }}
                      />
                    </Col>

                    <Col span={4}>
                      <label>Email: </label>

                      <input
                        value={selectedContact.email}
                        disabled
                        style={{ width: "100%", height: "90px" }}
                      />
                    </Col>

                    <Col span={4}>
                      <label>Phone Number: </label>

                      <textarea
                        value={selectedContact.phoneNumber.join("\n")} // Join các phần tử cách nhau bằng dấu xuống dòng
                        disabled
                        style={{ width: "100%", height: "90px" }} // Đặt chiều rộng và chiều cao
                      />
                    </Col>

                    <Col span={4}>
                      <label>Social Account: </label>

                      <textarea
                        value={selectedContact.socialAccount.join("\n")} // Join các phần tử cách nhau bằng dấu xuống dòng
                        disabled
                        style={{ width: "100%", height: "90px" }} // Đặt chiều rộng và chiều cao
                      />
                    </Col>

                    {/* ... Các phần khác tương tự như trên */}
                  </Grid>
                </form>
              </Box>

              <div style={{ marginTop: "16px" }}>
                {isEditMode ? (
                  <Button
                    type="button"
                    onClick={handleSaveClick}
                    style={{ backgroundColor: "#28a745", color: "white" }}
                  >
                    Save
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={() => setIsEditMode(true)}
                    style={{ backgroundColor: "#007bff", color: "white" }}
                  >
                    Edit
                  </Button>
                )}
              </div>
            </div>
          </section>
        )}
      </Modal>

      {/* <Modal
        size="1000px"
        opened={addContactVisible}
        onClose={() => setAddContactVisible(false)}
      >
        <ContactForm onClose={() => setAddContactVisible(false)} />
      </Modal> */}
    </div>
  );
}

export default ContactTable;
