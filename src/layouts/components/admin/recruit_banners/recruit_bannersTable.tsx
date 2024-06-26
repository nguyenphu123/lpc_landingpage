import React, { useEffect, useState } from "react";

import { Table } from "@mantine/core";

import Image from "next/image";

import { loadRecruitBannersAdmin } from "@/lib/loadData";
import { Modal, Button, useDisclosure, ModalContent } from "@nextui-org/react";
import { useUrl } from "nextjs-current-url";

import UpdateRecruitBannersForm from "./updateRecruit_banners";

import { UpdateRecruitBanners } from "@/lib/updateData";

import { useSession } from "next-auth/react";

import ToastGenerator from "@/lib/toast-tify";

import Popup from "@/components/popup";

import RecruitBannersForm from "./createRecruit_banners";

interface RecruitBanner {
  status: string;

  _id: string;

  title: string;

  description: string;
  numberOfRecruitment: string;
  salary: string;
}

function RecruitmentTable() {
  const { data: session, status } = useSession();

  const { href } = useUrl() ?? {};

  const [recruitBannerData, setRecruitBannerData] = useState<RecruitBanner[]>(
    [],
  );

  const [isEditMode, setIsEditMode] = useState(false);

  const [selectedRecruitBanner, setSelectedRecruitBanner] = useState(null);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isSucess, setIsSucess] = useState(false);

  const [sucessMessage, setSucessMessage] = useState("");

  useEffect(() => {
    const fetchNew = async () => {
      if (recruitBannerData.length == 0) {
        const recruitBannersCheck = await loadRecruitBannersAdmin(href);

        setRecruitBannerData(recruitBannersCheck.RecruitBanner || []);
      } else {
      }
    };

    // call the function

    fetchNew()
      // make sure to catch any error

      .catch(console.error);
  }, []);

  const handleEditClick = (recruitBanner) => {
    setSelectedRecruitBanner(recruitBanner);

    setIsEditMode(selectedRecruitBanner === recruitBanner); // Chỉ thiết lập isEditMode thành true nếu sản phẩm đã được chọn đang được chỉnh sửa
  };

  const handleSaveClick = async () => {
    // Thực hiện lưu thay đổi vào cơ sở dữ liệu (gọi API, ...)

    const recruitBannerCheck = await loadRecruitBannersAdmin(href);

    setRecruitBannerData(recruitBannerCheck.RecruitBanner);

    setSelectedRecruitBanner(null);

    setIsEditMode(false); // Chuyển về chế độ xem sau khi lưu thành công
  };

  const changeStatus = async (recruitBanner) => {
    const partnerStatusChange = {
      ...recruitBanner,

      status: recruitBanner.status === "Active" ? "Disable" : "Active",
    };

    const returnResult = await UpdateRecruitBanners(
      partnerStatusChange,
      session,
    );

    if (returnResult.success !== undefined) {
      showToast(returnResult.msg);

      const recruitBannerCheck = await loadRecruitBannersAdmin(href);

      setRecruitBannerData(recruitBannerCheck.RecruitBanner);
    }
  };

  const refreshRecruitBanners = async () => {
    const recruitBannerCheck = await loadRecruitBannersAdmin(href);

    setRecruitBannerData(recruitBannerCheck.RecruitBanner);
  };

  const showToast = (msg) => {
    setIsSucess(true);

    setSucessMessage(msg);

    setTimeout(() => {
      setIsSucess(false);

      setSucessMessage("");
    }, 10000);
  };

  const rows = recruitBannerData?.map((recruitBanner, index) => (
    <tr
      key={recruitBanner._id}
      className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
    >
      <td>{index + 1}</td>

      <td>{recruitBanner.title}</td>
      <td>
        {recruitBanner.description.length > 150
          ? `${recruitBanner.description.slice(0, 150)}...`
          : recruitBanner.description}
      </td>
      <td>{recruitBanner.numberOfRecruitment}</td>
      <td>{recruitBanner.salary}</td>

      <td>
        {recruitBanner.status === "Active" ? (
          <span className="text-green-500 font-bold">Active</span>
        ) : (
          <span className="text-red-500 font-bold">Disable</span>
        )}
      </td>

      <td>
        <Button
          onPress={onOpen}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded mr-2"
          onClick={() => handleEditClick(recruitBanner)}
        >
          Edit
        </Button>

        <button
          className={`${
            recruitBanner.status === "Active" ? "bg-red-500" : "bg-yellow-500"
          } hover:bg-red-700 text-white font-bold py-2 px-3 rounded`}
          onClick={() => changeStatus(recruitBanner)}
        >
          {recruitBanner.status === "Active" ? "Disable" : "Active"}
        </button>
      </td>
    </tr>
  ));

  return (
    <div>
      {isSucess ? <ToastGenerator message={sucessMessage} /> : <></>}

      <Popup>
        <RecruitBannersForm refreshRecruitBanners={refreshRecruitBanners} />
      </Popup>

      <Table className="w-full">
        <thead>
          <tr>
            <th className="w-1/20">#</th>

            <th className="w-1/3">Title</th>

            <th className="w-2/6">Description</th>
            <th className="w-2/6">Number of Recruitment</th>
            <th className="w-2/6">Salary</th>
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
          setSelectedRecruitBanner(null);

          setIsEditMode(false); // Đảm bảo rằng sau khi đóng modal, chế độ xem lại được kích hoạt
        }}
      >
        <ModalContent>
          {selectedRecruitBanner && (
            <section>
              <div>
                <h3 className="flex justify-center">{isEditMode ? "" : ""}</h3>

                <UpdateRecruitBannersForm
                  recruitBanner={selectedRecruitBanner}
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

export default RecruitmentTable;
