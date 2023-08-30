import React, { useState, useEffect } from "react";

import { Table, Modal, Button, Box, Grid, Col } from "@mantine/core"; // Import thêm Button

import Image from "next/image";
import { loadBanner } from "@/lib/loadData";
import { useUrl } from "nextjs-current-url";

interface Banner {
  _id: string;

  title: string;

  titleEn: string;

  content: string;

  contentEn: string;

  image: string;
}

function BannerTable() {
  const { pathname, href } = useUrl() ?? {};
  const [bannerData, setBannerData] = useState<Banner[]>([]);

  const [selectedBanner, setSelectedBanner] = useState<Banner | null>(null);

  const [addBannerVisible, setAddBannerVisible] = useState(false);

  const [isEditMode, setIsEditMode] = useState(false);

  const [showContent, setShowContent] = useState(false);

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

    setIsEditMode(false); // Chuyển về chế độ xem sau khi lưu thành công
  };

  const handleViewClick = (banner: Banner) => {
    setSelectedBanner(banner);

    setIsEditMode(false); // Chuyển sang chế độ xem
  };

  const toggleShowContent = () => {
    setShowContent(!showContent);
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

      <td></td>

      <td>
        <button onClick={() => setSelectedBanner(banner)}>View</button> |{" "}
        <button onClick={() => handleEditClick(banner)}>Edit</button>
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
                {isEditMode ? "Edit News" : "News Details"}
              </h3>

              <Box maw={800} mx="auto">
                <form>
                  <Grid gutter="lg">
                    <Col span={6}>
                      <label>Title: </label>

                      <textarea
                        value={selectedBanner.title}
                        disabled
                        style={{ width: "100%", height: "65px" }}
                      />
                    </Col>

                    <Col span={6}>
                      <label>Title (English): </label>

                      <textarea
                        value={selectedBanner.titleEn}
                        disabled
                        style={{ width: "100%", height: "65px" }}
                      />
                    </Col>

                    <Col span={6}>
                      <label>Content: </label>

                      <textarea
                        value={selectedBanner.content}
                        disabled
                        style={{ width: "100%", height: "65px" }}
                      />
                    </Col>

                    <Col span={6}>
                      <label>Content (English): </label>

                      <textarea
                        value={selectedBanner.contentEn}
                        disabled
                        style={{ width: "100%", height: "65px" }}
                      />
                    </Col>

                    <Col span={6}>
                      <label>Categories: </label>

                      <textarea
                        value={selectedBanner.content}
                        disabled
                        style={{ width: "100%", height: "65px" }} // Đặt chiều rộng và chiều cao
                      />
                    </Col>

                    <Col span={6}>
                      <label>Categories (English): </label>

                      <textarea
                        value={selectedBanner.contentEn}
                        disabled
                        style={{ width: "100%", height: "65px" }} // Đặt chiều rộng và chiều cao
                      />
                    </Col>

                    <Col span={12}>
                      <label>Image:</label>

                      <Image
                        src={selectedBanner.image}
                        alt="Product Image"
                        width={300}
                        height={300}
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
    </div>
  );
}

export default BannerTable;
