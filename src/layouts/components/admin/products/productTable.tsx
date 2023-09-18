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
  const [contentView, setContentView] = useState(false);
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

    setIsEditMode(selectedProduct === product); // Chỉ thiết lập isEditMode thành true nếu sản phẩm đã được chọn đang được chỉnh sửa
    setShowInfo(true);
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
    let productStatusChange = JSON.parse(JSON.stringify(product));
    if (productStatusChange["status"] == "Active") {
      productStatusChange["status"] = "Disable";
    } else {
      productStatusChange["status"] = "Active";
    }
    let returnResult = await updateProduct(productStatusChange, session);
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

      <td>{product.status}</td>

      <td>
        <button
          className="cursor-pointer"
          onClick={() => setSelectedProduct(product)}
        >
          View
        </button>
        |
        <button
          className="cursor-pointer"
          onClick={() => handleEditClick(product)}
        >
          Edit
        </button>
        |
        <button className="cursor-pointer" onClick={() => viewContent(product)}>
          View content
        </button>
        |
        <button
          className="cursor-pointer"
          onClick={() => changeStatus(product)}
        >
          {product.status == "Active" ? "Disable" : "Active"}
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
      <button className="cursor-pointer" onClick={(e) => refreshProduct(e)}>
        refresh
      </button>
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
        {selectedProduct && showInfo ? (
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
              {showContent ? <ContentTable product={selectedProduct} /> : <></>}
            </Box>
          </div>
        </section>
      </Modal>
    </div>
  );
}

export default ProductTable;
