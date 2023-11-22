import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import {
  Table,
  Box,
  Grid,
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
import EditContactInfo from "./editContactInfo";

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

  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

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

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const rows = contactData.map((contact, index) => (
    <tr key={contact._id}>
      <td>{index + 1}</td>

      <td>{contact.address}</td>

      <td>{contact.email}</td>

      <td>{contact.linkWebsite}</td>

      <td>
        <EditContactInfo contact={contact}></EditContactInfo>
      </td>
    </tr>
  ));

  return contactData.length == 0 ? (
    <></>
  ) : (
    <div>
      <>
        <div className="container mx-auto">
          <div className="flex justify-between items-center p-4">
            <div className="w-32"></div>

            <Button
              onPress={onOpen}
              className="bg-primary rounded-full py-3 px-6 text-base font-medium text-white w-32"
            >
              Update
            </Button>
          </div>
        </div>
        <Modal
          size="5xl"
          backdrop="blur"
          isOpen={isOpen && !selectedContact}
          style={{ background: "#FFFFFF" }}
          onOpenChange={onOpenChange}
          scrollBehavior="normal"
        >
          <ModalContent>
            {(onClose) => (
              <div className="max-w-[1000px] bg-white rounded-lg p-8 h-screen">
                <UpdateCompanyInfo />
              </div>
            )}
          </ModalContent>
        </Modal>
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
    </div>
  );
}

export default ContactTable;
