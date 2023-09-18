import React, { useEffect, useState } from "react";

import { Table, Modal, Button } from "@mantine/core";

import Image from "next/image";
import Popup from "@/components/popup";
import ContentForm from "./createContent";
import UpdateContentForm from "./updateContent";
import { useSession } from "next-auth/react";
import { updateProductContent } from "@/lib/updateData";
import ToastGenerator from "@/lib/toast-tify";
import { useUrl } from "nextjs-current-url";
import { loadService, loadSolutionContent } from "@/lib/loadData";

function ContentTable({ product }) {
  const { data: session, status } = useSession();
  const [selectedContent, setSelectedContent] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isSucess, setIsSucess] = useState(false);
  const [sucessMessage, setSucessMessage] = useState("");
  const { href } = useUrl() ?? {};
  let [data, setData]: any = useState(null);
  const handleEditClick = (content) => {
    setSelectedContent(content);

    setIsEditMode(selectedContent === content); // Chỉ thiết lập isEditMode thành true nếu sản phẩm đã được chọn đang được chỉnh sửa
  };
  useEffect(() => {
    const fetchContent = async () => {
      if (data == null) {
        if (product.type == "Service") {
          const serviceCheck = await loadService(
            {
              title: 1,
              _id: 1,
              titleEn: 1,
              "content.title": 1,
              "content.titleEn": 1,
              "content._id": 1,
              "content.imgSrc": 1,
              "content.content": 1,
              "content.contentEn": 1,
              "content.status": 1,
            },
            href,
          );
          setData(serviceCheck.products[0]);
        } else {
          const solutionCheck = await loadSolutionContent(
            {
              title: 1,
              _id: 1,
              titleEn: 1,
              "content.title": 1,
              "content.titleEn": 1,
              "content._id": 1,
              "content.imgSrc": 1,
              "content.content": 1,
              "content.contentEn": 1,
              "content.status": 1,
            },
            href,
            product._id,
          );
          setData(solutionCheck.products[0]);
        }
      } else {
      }
    };
    // call the function

    // call the function
    if (status != "loading") {
      fetchContent()
        // make sure to catch any error
        .catch(console.error);
    }
  }, []);
  const handleSaveClick = async () => {
    // Thực hiện lưu thay đổi vào cơ sở dữ liệu (gọi API, ...)
    if (product.type == "Service") {
      const serviceCheck = await loadService(
        {
          title: 1,
          _id: 1,
          titleEn: 1,
          "content.title": 1,
          "content.titleEn": 1,
          "content._id": 1,
          "content.imgSrc": 1,
          "content.content": 1,
          "content.contentEn": 1,
          "content.status": 1,
        },
        href,
      );
      setData(serviceCheck.products[0]);
    } else {
      const solutionCheck = await loadSolutionContent(
        {
          title: 1,
          _id: 1,
          titleEn: 1,
          "content.title": 1,
          "content.titleEn": 1,
          "content._id": 1,
          "content.imgSrc": 1,
          "content.content": 1,
          "content.contentEn": 1,
          "content.status": 1,
        },
        href,
        product._id,
      );
      setData(solutionCheck.products[0]);
    }
    setIsEditMode(false); // Chuyển về chế độ xem sau khi lưu thành công
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

  if (data != null) {
    rows = data.content.map((item, index) => (
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
            onClick={() => setSelectedContent(item)}
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
        opened={Boolean(selectedContent)}
        onClose={() => {
          setSelectedContent(null);

          setIsEditMode(false); // Đảm bảo rằng sau khi đóng modal, chế độ xem lại được kích hoạt
        }}
      >
        {selectedContent && (
          <section className="section">
            <div className="container">
              <h3 className="flex justify-center">{isEditMode ? "" : ""}</h3>

              <UpdateContentForm product={product} content={selectedContent} />

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
