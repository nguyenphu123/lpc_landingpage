import React, { useState, useEffect } from "react";

import { Table, Modal, Box } from "@mantine/core";

import { loadProduct } from "@/lib/loadData";

import { companyProduct, product } from "@/feature/data/productSlice";

import { useDispatch, useSelector } from "react-redux";

import ContentTable from "./contentTable";

import { useUrl } from "nextjs-current-url";

import { useSession } from "next-auth/react";

import UpdateProductForm from "./updateProduct";

import { updateProduct } from "@/lib/updateData";

import ToastGenerator from "@/lib/toast-tify";

import Popup from "@/components/popup";

import ProductForm from "./createProduct";

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
  const { data: session, status } = useSession();

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const { href } = useUrl() ?? {};

  const [isEditMode, setIsEditMode] = useState(false);

  const [showContent, setShowContent] = useState(false);

  const [showInfo, setShowInfo] = useState(false);

  const [isSucess, setIsSucess] = useState(false);

  const [sucessMessage, setSucessMessage] = useState("");

  const productInfo = useSelector((rootState) => product(rootState));

  let serviceList = productInfo.productData.value.product;

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchNew = async () => {
      const productCheck = await loadProduct(
        {
          title: 1,

          _id: 1,

          type: 1,

          titleEn: 1,

          image: 1,

          descriptionEn1: 1,

          description1: 1,

          pros: 1,

          prosEn: 1,

          content: 1,

          description2: 1,

          descriptionEn2: 1,

          status: 1,
        },

        href,
      );

      dispatch(companyProduct(productCheck));
    };

    // call the function

    if (status != "loading") {
      fetchNew().catch(console.error);
    }
  }, []);

  const handleEditClick = (product: Product) => {
    setSelectedProduct(product);

    setIsEditMode(true); // Chỉ thiết lập isEditMode thành true nếu sản phẩm đã được chọn đang được chỉnh sửa
  };

  const viewContent = (product: Product) => {
    setSelectedProduct(product);

    setShowContent(true); // Chỉ thiết lập isEditMode thành true nếu sản phẩm đã được chọn đang được chỉnh sửa
  };

  const handleSaveClick = async () => {
    // Thực hiện lưu thay đổi vào cơ sở dữ liệu (gọi API, ...)

    const productCheck = await loadProduct(
      {
        title: 1,

        _id: 1,

        type: 1,

        titleEn: 1,

        image: 1,

        descriptionEn1: 1,

        description1: 1,

        pros: 1,

        prosEn: 1,

        // content: 1,

        description2: 1,

        descriptionEn2: 1,

        status: 1,
      },

      href,
    );

    dispatch(companyProduct(productCheck));
  };

  const refreshProduct = async (e) => {
    // Thực hiện lưu thay đổi vào cơ sở dữ liệu (gọi API, ...)

    e.preventDefault();

    const productCheck = await loadProduct(
      {
        title: 1,

        _id: 1,

        type: 1,

        titleEn: 1,

        image: 1,

        descriptionEn1: 1,

        description1: 1,

        pros: 1,

        prosEn: 1,

        // content: 0,

        description2: 1,

        descriptionEn2: 1,

        status: 1,
      },

      href,
    );

    dispatch(companyProduct(productCheck));
  };

  const changeStatus = async (product) => {
    const productStatusChange = {
      ...product,

      status: product.status === "Active" ? "Disable" : "Active",
    };

    const returnResult = await updateProduct(productStatusChange, session);

    if (returnResult.success !== undefined) {
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

  const rows = serviceList.map((product, index) => (
    <tr
      key={product._id}
      className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
    >
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

      <td>
        {product.status === "Active" ? (
          <span className="text-green-500 font-bold">Active</span>
        ) : (
          <span className="text-red-500 font-bold">Disable</span>
        )}
      </td>

      <td>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded mr-2"
          onClick={() => handleEditClick(product)}
        >
          Edit
        </button>

        <button
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-3 rounded mr-2"
          onClick={() => viewContent(product)}
        >
          Content
        </button>

        <button
          className={`${
            product.status === "Active" ? "bg-red-500" : "bg-yellow-500"
          } hover:bg-red-700 text-white font-bold py-2 px-3 rounded`}
          onClick={() => changeStatus(product)}
        >
          {product.status === "Active" ? "Disable" : "Active"}
        </button>
      </td>
    </tr>
  ));

  return (
    <div>
      {isSucess ? <ToastGenerator message={sucessMessage} /> : <></>}

      <Popup>
        <ProductForm handleSaveClick={handleSaveClick} />
      </Popup>

      <button
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-3 rounded mr-2"
        onClick={(e) => refreshProduct(e)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3.111 5.018C2.633 5.18 2.259 5.553 2.097 6.03A7.97 7.97 0 001 10c0 4.418 3.582 8 8 8s8-3.582 8-8a7.97 7.97 0 00-1.097-3.97 1.001 1.001 0 00-1.607 1.15 5.972 5.972 0 011.171 3.82 6.002 6.002 0 01-6 6 6 6 0 01-6-6c0-1.947.906-3.686 2.317-4.832a1.001 1.001 0 00-1.523-1.15z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <Table>
        <thead>
          <tr>
            <th className="w-1/20">#</th>

            <th className="w-1/10">Name</th>

            <th className="w-1/4">General</th>

            <th className="w-1/4">Introduce</th>

            <th className="w-1/20">Status</th>

            <th className="w-3/10">Action</th>
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
        {selectedProduct != null && isEditMode ? (
          <section className="section">
            <div className="container">
              <h3 className="flex justify-center">{isEditMode ? "" : ""}</h3>

              <UpdateProductForm
                product={selectedProduct}
                handleSaveClick={handleSaveClick}
              />
            </div>
          </section>
        ) : (
          <></>
        )}
      </Modal>

      <Modal
        size="1000px"
        opened={Boolean(showContent)}
        onClose={() => {
          setSelectedProduct(null);

          setShowContent(false); // Đảm bảo rằng sau khi đóng modal, chế độ xem lại được kích hoạt
        }}
      >
        <section className="section">
          <div className="container">
            <h3 className="flex justify-center">Content</h3>

            <Box maw={800} mx="auto">
              {selectedProduct != null && showContent ? (
                <ContentTable product={selectedProduct} />
              ) : (
                <></>
              )}
            </Box>
          </div>
        </section>
      </Modal>
    </div>
  );
}

export default ProductTable;
