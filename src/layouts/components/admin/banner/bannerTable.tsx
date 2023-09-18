import React, { useState, useEffect } from "react";

import { Table, Modal } from "@mantine/core"; // Import thêm Button

import Image from "next/image";

import { loadBanner } from "@/lib/loadData";

import { useUrl } from "nextjs-current-url";

import UpdateBanner from "./updateBanner";

import { useSession } from "next-auth/react";

import { updateBanner } from "@/lib/updateData";

import ToastGenerator from "@/lib/toast-tify";

import Popup from "@/components/popup";

import BannerForm from "./createBanner";

import DataEn from "@/config/dataEn.json";

interface Banner {
  status: string;

  _id: string;

  title: string;

  titleEn: string;

  content: string;

  contentEn: string;

  image: string;
}

function BannerTable() {
  const { data: session } = useSession();

  const { href } = useUrl() ?? {};

  const [bannerData, setBannerData] = useState<Banner[]>([]);

  const [selectedBanner, setSelectedBanner]: any = useState<Banner | null>(
    null,
  );

  const [isEditMode, setIsEditMode] = useState(false);

  const [isSucess, setIsSucess] = useState(false);

  const [sucessMessage, setSucessMessage] = useState("");

  useEffect(() => {
    const fetchNew = async () => {
      if (bannerData.length == 0) {
        const bannerCheck = await loadBanner(href);

        setBannerData(bannerCheck.banner);
      }
    };

    // call the function

    fetchNew()
      // make sure to catch any error

      .catch(console.error);
  }, [bannerData]);

  const handleEditClick = (banner: Banner) => {
    setSelectedBanner(banner);

    setIsEditMode(true); // Chỉ thiết lập isEditMode thành true nếu sản phẩm đã được chọn đang được chỉnh sửa
  };

  const handleSaveClick = async () => {
    // Thực hiện lưu thay đổi vào cơ sở dữ liệu (gọi API, ...)

    const bannerCheck = await loadBanner(href);

    setBannerData(bannerCheck.banner);

    setSelectedBanner(null);

    setIsEditMode(false); // Chuyển về chế độ xem sau khi lưu thành công
  };

  const refreshBanner = async () => {
    const bannerCheck = await loadBanner(href);

    setBannerData(bannerCheck.banner);
  };

  const changeStatus = async (banner) => {
    const bannerStatusChange = {
      ...banner,

      status: banner.status === "Active" ? "Disable" : "Active",
    };

    const returnResult = await updateBanner(bannerStatusChange, session);

    if (returnResult.success) {
      showToast(returnResult.msg);

      const bannerCheck = await loadBanner(href);

      setBannerData(bannerCheck.banner);
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

  const rows = bannerData.map((banner, index) => (
    <tr
      key={banner._id}
      className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
    >
      <td>{index + 1}</td>

      <td>
        {banner.title.length > 115
          ? `${banner.title.slice(0, 115)}...`
          : banner.title}
      </td>

      <td>
        {banner.content.length > 150
          ? `${banner.content.slice(0, 150)}...`
          : banner.content}
      </td>

      <td>
        {banner.status === "Active" ? (
          <span className="text-green-500 font-bold">Active</span>
        ) : (
          <span className="text-red-500 font-bold">Disable</span>
        )}
      </td>

      <td>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded mr-2"
          onClick={() => setSelectedBanner(banner)}
        >
          Preview
        </button>

        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded mr-2"
          onClick={() => handleEditClick(banner)}
        >
          Edit
        </button>

        <button
          className={`${
            banner.status === "Active" ? "bg-red-500" : "bg-yellow-500"
          } hover:bg-red-700 text-white font-bold py-2 px-3 rounded`}
          onClick={() => changeStatus(banner)}
        >
          {banner.status === "Active" ? "Disable" : "Active"}
        </button>
      </td>
    </tr>
  ));

  return (
    <div>
      <div className="fixed top-10 right-10 z-50">
        {isSucess ? <ToastGenerator message={sucessMessage} /> : <></>}
      </div>

      <Popup>
        <BannerForm refreshBanner={refreshBanner} />
      </Popup>

      <Table>
        <thead>
          <tr>
            <th className="w-1/20">#</th>

            <th className="w-1/3">Title</th>

            <th className="w-2/6">Content</th>

            <th className="w-1/20">Status</th>

            <th className="w-3/10">Action</th>
          </tr>
        </thead>

        <tbody>{rows}</tbody>
      </Table>

      <Modal
        size="1000px"
        opened={Boolean(selectedBanner)}
        onClose={() => {
          setSelectedBanner(null);

          setIsEditMode(false); // Đảm bảo rằng sau khi đóng modal, chế độ xem lại được kích hoạt
        }}
      >
        {selectedBanner != null && isEditMode == true ? (
          <section>
            <div className="container">
              <h3 className="flex justify-center">{isEditMode ? "" : ""}</h3>

              <UpdateBanner
                banner={selectedBanner}
                handleSaveClick={handleSaveClick}
              />
            </div>
          </section>
        ) : selectedBanner != null && isEditMode == false ? (
          <section>
            <div className="container">
              <div className="slideshow">
                <div
                  className="slideshowSlider"
                  style={{ transform: `0, 0, 0)` }}
                >
                  <div className="slide">
                    <Image
                      fill
                      className={`bg-cover bg-center bg-no-repeat `}
                      src={`${selectedBanner.image}`}
                      alt={""}
                      priority
                    />

                    <div className="relative w-3xl whitespace-normal mx-auto max-w-screen-xl px-4 py-52 sm:px-6 lg:flex lg:h-max lg:items-center lg:px-5 containerbanner">
                      <div className=" whitespace-normal ltr:sm:text-left rtl:sm:text-right">
                        <h1
                          className="text-3xl whitespace-normal font-extrabold sm:text-3xl"
                          style={{ width: "550px" }}
                        >
                          {selectedBanner.titleEn}
                        </h1>

                        <p className="mt-4 whitespace-normal max-w-lg sm:text-xl/relaxed">
                          {selectedBanner.contentEn}
                        </p>

                        <div className="mt-8 whitespace-normal flex flex-wrap gap-4 text-center">
                          <a className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto">
                            {DataEn["bannertext1"].name}
                          </a>

                          <a className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-600 shadow hover:blue-rose-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto">
                            {DataEn["bannertext2"].name}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <></>
        )}
      </Modal>
    </div>
  );
}

export default BannerTable;
