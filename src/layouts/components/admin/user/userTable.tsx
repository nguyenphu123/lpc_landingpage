import React, { useEffect, useState } from "react";
import { Modal, Table } from "@mantine/core";
import Image from "next/image";
import { loadCustomer } from "@/lib/loadData";
import { useUrl } from "nextjs-current-url";
import UpdateCustomer from "./updateCustomer";

interface Customer {
  _id: string;

  name: string;

  src: string;
}

function CustomerTable() {
  const { pathname, href } = useUrl() ?? {};
  const [custommerData, setCustomerData] = useState<Customer[]>([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showCustomer, setShowCustomer] = useState(false);
  useEffect(() => {
    // declare the data fetching function
    const fetchNew = async () => {
      if (custommerData.length == 0) {
        const customerCheck = await loadCustomer(href);
        setCustomerData(customerCheck.customers);
      } else {
      }
    };
    // call the function
    fetchNew()
      // make sure to catch any error
      .catch(console.error);
  }, [custommerData]);
  const handleEditClick = (customer) => {
    setSelectedCustomer(customer);

    setIsEditMode(selectedCustomer === customer); // Chỉ thiết lập isEditMode thành true nếu sản phẩm đã được chọn đang được chỉnh sửa
  };
  const handleSaveClick = async () => {
    // Thực hiện lưu thay đổi vào cơ sở dữ liệu (gọi API, ...)
    const customerCheck = await loadCustomer(href);
    setCustomerData(customerCheck.customers);
    setSelectedCustomer(null);
    setIsEditMode(false); // Chuyển về chế độ xem sau khi lưu thành công
  };
  const rows = custommerData.map((customer, index) => (
    <tr key={customer._id}>
      <td>{index + 1}</td>

      <td>{customer.name}</td>

      <td>
        <Image src={customer.src} alt={customer.src} width={100} height={100} />
      </td>

      <td></td>

      <td>
        <button onClick={() => handleEditClick(customer)}>Edit</button>
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

            <th>Logo</th>

            <th>Status</th>

            <th>Action</th>
          </tr>
        </thead>

        <tbody>{rows}</tbody>
      </Table>
      <Modal
        size="1000px"
        opened={Boolean(selectedCustomer)}
        onClose={() => {
          setSelectedCustomer(null);

          setIsEditMode(false); // Đảm bảo rằng sau khi đóng modal, chế độ xem lại được kích hoạt
        }}
      >
        {selectedCustomer && (
          <section className="section">
            <div className="container">
              <h3 className="flex justify-center">
                {isEditMode ? "Edit Product" : "Product Details"}
              </h3>

              <UpdateCustomer
                Customer={selectedCustomer}
                handleSaveClick={handleSaveClick}
              />
            </div>
          </section>
        )}
      </Modal>
    </div>
  );
}

export default CustomerTable;
