import React, { useState, useEffect } from "react";

import { Table, Modal, Button, Box, Grid, Col } from "@mantine/core";

import Image from "next/image";
import { loadProduct } from "@/lib/loadData";
import { companyProduct, product } from "@/feature/data/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ContentTable from "./contentTable";

interface Product {
  _id: string;

  title: string;

  titleEn: string;

  description1: string;

  description2: string;

  descriptionEn1: string;

  descriptionEn2: string;

  type: string;

  image: string;

  pros: string[];

  prosEn: string[];

  content: Array<Record<string, any>>;
}

function ProductTable() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [isEditMode, setIsEditMode] = useState(false);
  const [contentView, setContentView] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const productInfo = useSelector((rootState) => product(rootState));

  let serviceList = productInfo.productData.value.product;
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchNew = async () => {
      const productCheck = await loadProduct("");
      dispatch(companyProduct(productCheck));
    };
    // call the function
    fetchNew()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  const handleEditClick = (product: Product) => {
    setSelectedProduct(product);

    setIsEditMode(selectedProduct === product); // Chỉ thiết lập isEditMode thành true nếu sản phẩm đã được chọn đang được chỉnh sửa
  };
  const viewContent = (product: Product) => {
    setSelectedProduct(product);

    setShowContent(true); // Chỉ thiết lập isEditMode thành true nếu sản phẩm đã được chọn đang được chỉnh sửa
  };
  const handleSaveClick = () => {
    // Thực hiện lưu thay đổi vào cơ sở dữ liệu (gọi API, ...)

    setIsEditMode(false); // Chuyển về chế độ xem sau khi lưu thành công
  };

  const handleViewClick = (product: Product) => {
    setSelectedProduct(product);

    setContentView(true); // Chuyển sang chế độ xem
  };

  const toggleShowContent = () => {
    setShowContent(!showContent);
  };

  const rows = serviceList.map((product, index) => (
    <tr key={product._id}>
      <td>{index + 1}</td>

      <td>{product.title}</td>

      <td>
        {product.description1.length > 150
          ? `${product.description1.slice(0, 150)}...`
          : product.description1}
      </td>

      <td>
        {product.description2.length > 150
          ? `${product.description2.slice(0, 150)}...`
          : product.description2}
      </td>

      <td></td>

      <td>
        <button onClick={() => setSelectedProduct(product)}>View</button>

        <button onClick={() => handleEditClick(product)}>Edit</button>
        <button onClick={() => viewContent(product)}>View content</button>
      </td>
    </tr>
  ));

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>

            <th>Name</th>

            <th>General</th>

            <th>Introduce</th>

            <th>Status</th>

            <th>Action</th>
          </tr>
        </thead>

        <tbody>{rows}</tbody>
      </Table>

      <Modal
        size="1000px"
        opened={Boolean(selectedProduct)}
        onClose={() => {
          setSelectedProduct(null);

          setIsEditMode(false); // Đảm bảo rằng sau khi đóng modal, chế độ xem lại được kích hoạt
        }}
      >
        {selectedProduct && !showContent && (
          <section className="section">
            <div className="container">
              <h3 className="flex justify-center">
                {isEditMode ? "Edit Product" : "Product Details"}
              </h3>

              <Box maw={800} mx="auto">
                <form>
                  <Grid gutter="lg">
                    <Col span={12}>
                      <label>Type: </label>

                      <input
                        value={selectedProduct.type}
                        disabled
                        style={{ width: "100%" }}
                      />
                    </Col>

                    <Col span={6}>
                      <label>Title: </label>

                      <input
                        value={selectedProduct.title}
                        disabled
                        style={{ width: "100%" }}
                      />
                    </Col>

                    <Col span={6}>
                      <label>Title (English): </label>

                      <input
                        value={selectedProduct.titleEn}
                        disabled
                        style={{ width: "100%" }}
                      />
                    </Col>

                    <Col span={6}>
                      <label>Description 1: </label>

                      <textarea
                        value={selectedProduct.description1}
                        disabled
                        style={{ width: "100%", height: "150px" }}
                      />
                    </Col>

                    <Col span={6}>
                      <label>Description 1 (English): </label>

                      <textarea
                        value={selectedProduct.descriptionEn1}
                        disabled
                        style={{ width: "100%", height: "150px" }}
                      />
                    </Col>

                    <Col span={6}>
                      <label>Description 2: </label>

                      <textarea
                        value={selectedProduct.description2}
                        disabled
                        style={{ width: "100%", height: "150px" }}
                      />
                    </Col>

                    <Col span={6}>
                      <label>Description 2 (English): </label>

                      <textarea
                        value={selectedProduct.descriptionEn2}
                        disabled
                        style={{ width: "100%", height: "150px" }}
                      />
                    </Col>

                    <Col span={12}>
                      <label>Image:</label>

                      <Image
                        src={selectedProduct.image}
                        alt="Product Image"
                        width={300}
                        height={300}
                      />
                    </Col>

                    <Col span={6}>
                      <label>Pros: </label>

                      <textarea
                        value={selectedProduct.pros.join("\n")} // Join các phần tử cách nhau bằng dấu xuống dòng
                        disabled
                        style={{ width: "100%", height: "150px" }} // Đặt chiều rộng và chiều cao
                      />
                    </Col>

                    <Col span={6}>
                      <label>Pros (English): </label>

                      <textarea
                        value={selectedProduct.prosEn.join("\n")} // Join các phần tử cách nhau bằng dấu xuống dòng
                        disabled
                        style={{ width: "100%", height: "150px" }} // Đặt chiều rộng và chiều cao
                      />
                    </Col>

                    <Col span={12}>
                      <label>Content: </label>

                      <div>
                        {selectedProduct.content.map((content, index) => (
                          <div key={index}>
                            <div style={{ display: "flex", gap: "16px" }}>
                              <div style={{ flex: 1 }}>
                                <label>Title: </label>

                                <textarea
                                  value={content.title}
                                  disabled
                                  style={{ width: "100%" }}
                                />
                              </div>

                              <div style={{ flex: 1 }}>
                                <label>Title (English): </label>

                                <textarea
                                  value={content.titleEn}
                                  disabled
                                  style={{ width: "100%" }}
                                />
                              </div>
                            </div>

                            {/* Hiển thị nội dung còn lại */}

                            <div style={{ display: "flex", gap: "16px" }}>
                              <div style={{ flex: 1 }}>
                                <label>Content: </label>

                                <textarea
                                  value={content.content}
                                  disabled
                                  style={{ width: "100%", height: "150px" }}
                                />
                              </div>

                              <div style={{ flex: 1 }}>
                                <label>Content (English): </label>

                                <textarea
                                  value={content.contentEn}
                                  disabled
                                  style={{ width: "100%", height: "150px" }}
                                />
                              </div>
                            </div>

                            {/* <p>{content.content}</p>

                            <p>{content.contentEn}</p> */}

                            <Image
                              src={content.imgSrc}
                              alt={`Content Image ${index}`}
                              width={300}
                              height={300}
                            />

                            {content.description &&
                              Array.isArray(content.description) &&
                              content.description.map(
                                (desc: any, descIndex: number) => (
                                  <div key={descIndex}>
                                    <div
                                      style={{ display: "flex", gap: "16px" }}
                                    >
                                      <div style={{ flex: 1 }}>
                                        <label>Description Title: </label>

                                        <textarea
                                          value={desc.title}
                                          disabled
                                          style={{
                                            width: "100%",

                                            height: "150px",
                                          }}
                                        />
                                      </div>

                                      <div style={{ flex: 1 }}>
                                        <label>
                                          Description Title (English):{" "}
                                        </label>

                                        <textarea
                                          value={desc.titleEn}
                                          disabled
                                          style={{
                                            width: "100%",

                                            height: "150px",
                                          }}
                                        />
                                      </div>
                                    </div>

                                    {/* Hiển thị nội dung còn lại của mô tả */}

                                    <div style={{ marginTop: "16px" }}>
                                      <label>Description Content: </label>

                                      <textarea
                                        value={desc.content}
                                        disabled
                                        style={{
                                          width: "100%",

                                          height: "200px",
                                        }}
                                      />
                                    </div>

                                    <div style={{ marginTop: "16px" }}>
                                      <label>
                                        Description Content (English):{" "}
                                      </label>

                                      <textarea
                                        value={desc.contentEn}
                                        disabled
                                        style={{
                                          width: "100%",

                                          height: "200px",
                                        }}
                                      />
                                    </div>
                                  </div>
                                ),
                              )}

                            {index !== selectedProduct.content.length - 1 && (
                              <hr
                                className=""
                                style={{
                                  border: "none",

                                  borderTop: "1px solid red",

                                  margin: "16px 0",
                                }}
                              />
                            )}
                          </div>
                        ))}
                      </div>
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
      <Modal
        size="1000px"
        opened={Boolean(selectedProduct)}
        onClose={() => {
          setSelectedProduct(null);
          setShowContent(false); // Đảm bảo rằng sau khi đóng modal, chế độ xem lại được kích hoạt
        }}
      >
        <section className="section">
          <div className="container">
            <h3 className="flex justify-center">Content</h3>

            <Box maw={800} mx="auto">
              {showContent ? <ContentTable product={selectedProduct} /> : <></>}
            </Box>
          </div>{" "}
        </section>
      </Modal>
    </div>
  );
}

export default ProductTable;
