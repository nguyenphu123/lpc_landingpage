import React, { useEffect, useState } from "react";

import { Modal, Table } from "@mantine/core";

import Image from "next/image";

import { loadCustomer } from "@/lib/loadData";

import { useUrl } from "nextjs-current-url";

import UpdateCustomer from "./updateCustomer";

import { useSession } from "next-auth/react";

import { updateCustomer } from "@/lib/updateData";

import ToastGenerator from "@/lib/toast-tify";

import Popup from "@/components/popup";

import CustomerForm from "./createCustomer";

interface Customer {
  status: string;

  _id: string;

  name: string;

  src: string;
}

function CustomerTable() {
  const { data: session, status } = useSession();

  const { pathname, href } = useUrl() ?? {};

  const [custommerData, setCustomerData] = useState<Customer[]>([]);

  const [isEditMode, setIsEditMode] = useState(false);

  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const [showCustomer, setShowCustomer] = useState(false);

  const [isSucess, setIsSucess] = useState(false);

  const [sucessMessage, setSucessMessage] = useState("");

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

  const refreshCustomer = async () => {
    // Thực hiện lưu thay đổi vào cơ sở dữ liệu (gọi API, ...)

    const customerCheck = await loadCustomer(href);

    setCustomerData(customerCheck.customers);
  };

  const changeStatus = async (customer) => {
    const updatedCustomer = {
      ...customer,

      status: customer.status === "Active" ? "Disable" : "Active",
    };

    const returnResult = await updateCustomer(updatedCustomer, session);

    if (returnResult.success !== undefined) {
      showToast(returnResult.msg);

      const customerCheck = await loadCustomer(href);

      setCustomerData(customerCheck.customers);
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

  const rows = custommerData.map((customer, index) => (
    <tr
      key={customer._id}
      className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
    >
      <td>{index + 1}</td>

      <td>{customer.name}</td>

      <td>
        <Image src={customer.src} alt={customer.src} width={100} height={100} />
      </td>

      <td>
        {customer.status === "Active" ? (
          <span className="text-green-500 font-bold">Active</span>
        ) : (
          <span className="text-red-500 font-bold">Disable</span>
        )}
      </td>

      <td>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded mr-2"
          onClick={() => handleEditClick(customer)}
        >
          Edit
        </button>

        <button
          className={`${
            customer.status === "Active" ? "bg-red-500" : "bg-yellow-500"
          } hover:bg-red-700 text-white font-bold py-2 px-3 rounded`}
          onClick={() => changeStatus(customer)}
        >
          {customer.status === "Active" ? "Disable" : "Active"}
        </button>
      </td>
    </tr>
  ));

  return (
    <div>
      {isSucess ? <ToastGenerator message={sucessMessage} /> : <></>}

      <Popup>
        <CustomerForm refreshCustomer={refreshCustomer} />
      </Popup>

      <Table>
        <thead>
          <tr>
            <th className="w-1/20">#</th>

            <th className="w-1/3">Name</th>

            <th className="w-2/6">Logo</th>

            <th className="w-1/20">Status</th>

            <th className="w-3/10">Action</th>
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
          <section>
            <div className="container">
              <h3 className="flex justify-center">{isEditMode ? "" : ""}</h3>

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
