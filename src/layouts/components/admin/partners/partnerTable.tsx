import React, { useEffect, useState } from "react";
import { Modal, Table } from "@mantine/core";
import Image from "next/image";
import { loadPartner } from "@/lib/loadData";
import { useUrl } from "nextjs-current-url";
import UpdatePartner from "./updatePartner";
import { updatePartner } from "@/lib/updateData";
import { useSession } from "next-auth/react";
import ToastGenerator from "@/lib/toast-tify";

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
  const [showPartner, setShowPartner] = useState(false);
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
  const handleSaveClick = () => {
    // Thực hiện lưu thay đổi vào cơ sở dữ liệu (gọi API, ...)
    setSelectedPartner(null);
    setIsEditMode(false); // Chuyển về chế độ xem sau khi lưu thành công
  };
  const changeStatus = async (partner) => {
    let partnerStatusChange = JSON.parse(JSON.stringify(partner));
    if (partnerStatusChange["status"] == "Active") {
      partnerStatusChange["status"] = "Disable";
    } else {
      partnerStatusChange["status"] = "Active";
    }
    let returnResult = await updatePartner(partnerStatusChange, session);
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
  const rows = partnerData.map((partner, index) => (
    <tr key={partner._id}>
      <td>{index + 1}</td>

      <td>{partner.name}</td>

      <td>
        <Image src={partner.src} alt={partner.src} width={100} height={100} />
      </td>

      <td>{partner.status}</td>
      <td>
        <button
          className="cursor-pointer"
          onClick={() => handleEditClick(partner)}
        >
          Edit
        </button>
        |
        <button
          className="cursor-pointer"
          onClick={() => changeStatus(partner)}
        >
          {partner.status == "Active" ? "Disable" : "Active"}
        </button>
      </td>
    </tr>
  ));

  return (
    <div>
      {isSucess ? <ToastGenerator message={sucessMessage} /> : <></>}
      <Table>
        <thead>
          <tr>
            <th>#</th>

            <th>Name</th>

            <th>Logo</th>

            <th>Status</th>

            <th>Action</th>
          </tr>
        </thead>

        <tbody>{rows}</tbody>
      </Table>
      <Modal
        size="1000px"
        opened={Boolean(selectedPartner)}
        onClose={() => {
          setSelectedPartner(null);

          setIsEditMode(false); // Đảm bảo rằng sau khi đóng modal, chế độ xem lại được kích hoạt
        }}
      >
        {selectedPartner && (
          <section className="section">
            <div className="container">
              <h3 className="flex justify-center">
                {isEditMode ? "Edit Product" : "Product Details"}
              </h3>

              <UpdatePartner
                partner={selectedPartner}
                handleSaveClick={handleSaveClick}
              />
            </div>
          </section>
        )}
      </Modal>
    </div>
  );
}

export default PartnerTable;
