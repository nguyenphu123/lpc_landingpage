import React, { useState, useEffect } from "react";

import { Table, Modal } from "@mantine/core"; // Import thêm Button

import { loadBanner } from "@/lib/loadData";
import { useUrl } from "nextjs-current-url";
import UpdateBanner from "./updateBanner";
import { useSession } from "next-auth/react";
import { updateBanner } from "@/lib/updateData";

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

  const [selectedBanner, setSelectedBanner] = useState<Banner | null>(null);

  const [isEditMode, setIsEditMode] = useState(false);

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

    setIsEditMode(selectedBanner === banner); // Chỉ thiết lập isEditMode thành true nếu sản phẩm đã được chọn đang được chỉnh sửa
  };

  const handleSaveClick = () => {
    // Thực hiện lưu thay đổi vào cơ sở dữ liệu (gọi API, ...)
    setSelectedBanner(null);
    setIsEditMode(false); // Chuyển về chế độ xem sau khi lưu thành công
  };

  const changeStatus = (banner) => {
    let bannerStatusChange = JSON.parse(JSON.stringify(banner));
    if (bannerStatusChange["status"] == "Active") {
      bannerStatusChange["status"] = "Disable";
    } else {
      bannerStatusChange["status"] = "Active";
    }
    updateBanner(bannerStatusChange, session);
  };
  const rows = bannerData.map((banner, index) => (
    <tr key={banner._id}>
      <td>{index + 1}</td>

      <td>{banner.title}</td>

      <td>
        {banner.content.length > 150
          ? `${banner.content.slice(0, 150)}...`
          : banner.content}
      </td>

      <td>{banner.status}</td>

      <td>
        <button
          className="cursor-pointer"
          onClick={() => setSelectedBanner(banner)}
        >
          View
        </button>{" "}
        |
        <button
          className="cursor-pointer"
          onClick={() => handleEditClick(banner)}
        >
          Edit
        </button>{" "}
        |
        <button className="cursor-pointer" onClick={() => changeStatus(banner)}>
          {banner.status == "Active" ? "Disable" : "Active"}
        </button>
      </td>

      <td>
        {/* <button onClick={() => handleEditClick(news)}>Edit</button> */}
      </td>
    </tr>
  ));

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>

            <th>Title</th>

            <th>Content</th>

            <th>Status</th>

            <th>Action</th>
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
        {selectedBanner && (
          <section className="section">
            <div className="container">
              <h3 className="flex justify-center">
                {isEditMode ? "Edit Product" : "Product Details"}
              </h3>

              <UpdateBanner
                banner={selectedBanner}
                handleSaveClick={handleSaveClick}
              />
            </div>
          </section>
        )}
      </Modal>
    </div>
  );
}

export default BannerTable;
