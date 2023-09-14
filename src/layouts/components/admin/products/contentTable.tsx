import React, { useState } from "react";

import { Table, Modal, Button } from "@mantine/core";

import Image from "next/image";
import Popup from "@/components/popup";
import ContentForm from "./createContent";
import UpdateContentForm from "./updateContent";
import { useSession } from "next-auth/react";
import { updateProductContent } from "@/lib/updateData";
import ToastGenerator from "@/lib/toast-tify";

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

function ContentTable({ product }) {
  const { data: session, status } = useSession();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [isEditMode, setIsEditMode] = useState(false);

  const [showContent, setShowContent] = useState(false);
  const [isSucess, setIsSucess] = useState(false);
  const [sucessMessage, setSucessMessage] = useState("");
  const handleEditClick = (product: Product) => {
    setSelectedProduct(product);

    setIsEditMode(selectedProduct === product); // Chỉ thiết lập isEditMode thành true nếu sản phẩm đã được chọn đang được chỉnh sửa
  };

  const handleSaveClick = () => {
    // Thực hiện lưu thay đổi vào cơ sở dữ liệu (gọi API, ...)

    setIsEditMode(false); // Chuyển về chế độ xem sau khi lưu thành công
  };

  const handleViewClick = (product: Product) => {
    setSelectedProduct(product);

    setIsEditMode(false); // Chuyển sang chế độ xem
  };

  const toggleShowContent = () => {
    setShowContent(!showContent);
  };
  const changeStatus = async (item) => {
    let itemStatusChange = JSON.parse(JSON.stringify(item));
    if (itemStatusChange["status"] == "Active") {
      itemStatusChange["status"] = "Disable";
    } else {
      itemStatusChange["status"] = "Active";
    }
    let returnResult = await updateProductContent(
      product._id,
      itemStatusChange,
      session,
    );
    if (returnResult.success != undefined) {
      showToast(returnResult.msg);
      handleSaveClick();
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
  let rows:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | React.PromiseLikeOfReactNode
    | null
    | undefined;
  if (product != undefined) {
    rows = product.content.map((item, index) => (
      <tr key={item._id}>
        <td>{index + 1}</td>

        <td>{item.title}</td>

        <td>
          {item.content.length > 150
            ? `${item.content.slice(0, 150)}...`
            : item.content}
        </td>

        <td>
          {item.contentEn.length > 150
            ? `${item.contentEn.slice(0, 150)}...`
            : item.contentEn}
        </td>

        <td>
          <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} />
        </td>
        <td>{item.status}</td>
        <td>
          <button
            className="cursor-pointer"
            onClick={() => setSelectedProduct(item)}
          >
            View
          </button>
          |
          <button
            className="cursor-pointer"
            onClick={() => handleEditClick(item)}
          >
            Edit
          </button>
          |
          <button className="cursor-pointer" onClick={() => changeStatus(item)}>
            {item.status == "Active" ? "Disable" : "Active"}
          </button>
        </td>
      </tr>
    ));
  }

  return (
    <div>
      {isSucess ? <ToastGenerator message={sucessMessage} /> : <></>}
      <Popup>
        <ContentForm product={product} />
      </Popup>
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
        {selectedProduct && (
          <section className="section">
            <div className="container">
              <h3 className="flex justify-center">{isEditMode ? "" : ""}</h3>

              <UpdateContentForm product={product} content={selectedProduct} />

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

export default ContentTable;
