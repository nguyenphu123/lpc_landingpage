import React, { useEffect, useState } from "react";

import { Table } from "@mantine/core";

import Image from "next/image";

import { loadPartner } from "@/lib/loadData";
import { Modal, Button, useDisclosure, ModalContent } from "@nextui-org/react";
import { useUrl } from "nextjs-current-url";

import UpdatePartner from "./updatePartner";

import { updatePartner } from "@/lib/updateData";

import { useSession } from "next-auth/react";

import ToastGenerator from "@/lib/toast-tify";

import Popup from "@/components/popup";

import PartnerForm from "./createPartner";

interface Partner {
  status: string;

  _id: string;

  name: string;

  src: string;
}

function PartnerTable() {
  const { data: session, status } = useSession();

  const { href } = useUrl() ?? {};

  const [partnerData, setPartnerData] = useState<Partner[]>([]);

  const [isEditMode, setIsEditMode] = useState(false);

  const [selectedPartner, setSelectedPartner] = useState(null);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isSucess, setIsSucess] = useState(false);

  const [sucessMessage, setSucessMessage] = useState("");

  useEffect(() => {
    const fetchNew = async () => {
      if (partnerData.length == 0) {
        const partnerCheck = await loadPartner(href);

        setPartnerData(partnerCheck.partners);
      } else {
      }
    };

    // call the function

    fetchNew()
      // make sure to catch any error

      .catch(console.error);
  }, []);

  const handleEditClick = (partner) => {
    setSelectedPartner(partner);

    setIsEditMode(selectedPartner === partner); // Chỉ thiết lập isEditMode thành true nếu sản phẩm đã được chọn đang được chỉnh sửa
  };

  const handleSaveClick = async () => {
    // Thực hiện lưu thay đổi vào cơ sở dữ liệu (gọi API, ...)

    const partnerCheck = await loadPartner(href);

    setPartnerData(partnerCheck.partners);

    setSelectedPartner(null);

    setIsEditMode(false); // Chuyển về chế độ xem sau khi lưu thành công
  };

  const changeStatus = async (partner) => {
    const partnerStatusChange = {
      ...partner,

      status: partner.status === "Active" ? "Disable" : "Active",
    };

    const returnResult = await updatePartner(partnerStatusChange, session);

    if (returnResult.success !== undefined) {
      showToast(returnResult.msg);

      const partnerCheck = await loadPartner(href);

      setPartnerData(partnerCheck.partners);
    }
  };

  const refreshPartner = async () => {
    const partnerCheck = await loadPartner(href);

    setPartnerData(partnerCheck.partners);
  };

  const showToast = (msg) => {
    setIsSucess(true);

    setSucessMessage(msg);

    setTimeout(() => {
      setIsSucess(false);

      setSucessMessage("");
    }, 10000);
  };

  const rows = partnerData.map((partner, index) => (
    <tr
      key={partner._id}
      className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
    >
      <td>{index + 1}</td>

      <td>{partner.name}</td>

      <td>
        <Image src={partner.src} alt={partner.src} width={100} height={100} />
      </td>

      <td>
        {partner.status === "Active" ? (
          <span className="text-green-500 font-bold">Active</span>
        ) : (
          <span className="text-red-500 font-bold">Disable</span>
        )}
      </td>

      <td>
        <Button
          onPress={onOpen}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded mr-2"
          onClick={() => handleEditClick(partner)}
        >
          Edit
        </Button>

        <button
          className={`${
            partner.status === "Active" ? "bg-red-500" : "bg-yellow-500"
          } hover:bg-red-700 text-white font-bold py-2 px-3 rounded`}
          onClick={() => changeStatus(partner)}
        >
          {partner.status === "Active" ? "Disable" : "Active"}
        </button>
      </td>
    </tr>
  ));

  return (
    <div>
      {isSucess ? <ToastGenerator message={sucessMessage} /> : <></>}

      <Popup>
        <PartnerForm refreshPartner={refreshPartner} />
      </Popup>

      <Table className="w-full">
        <thead>
          <tr>
            <th className="w-1/20">#</th>

            <th className="w-1/3">Name</th>

            <th className="w-2/6">Logo</th>

            <th className="w-1/20">Status</th>

            <th className="w-3/10">Action</th>
          </tr>
        </thead>

        <tbody>{rows}</tbody>
      </Table>

      <Modal
        size="xs"
        backdrop="blur"
        isOpen={isOpen}
        style={{ background: "#FFFFFF", height: "50%" }}
        onOpenChange={onOpenChange}
        scrollBehavior="normal"
        onClose={() => {
          setSelectedPartner(null);

          setIsEditMode(false); // Đảm bảo rằng sau khi đóng modal, chế độ xem lại được kích hoạt
        }}
      >
        <ModalContent>
          {selectedPartner && (
            <section>
              <div>
                <h3 className="flex justify-center">{isEditMode ? "" : ""}</h3>

                <UpdatePartner
                  partner={selectedPartner}
                  handleSaveClick={handleSaveClick}
                />
              </div>
            </section>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default PartnerTable;
