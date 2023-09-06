import React, { useEffect, useState } from "react";
import { Modal, Table } from "@mantine/core";
import Image from "next/image";
import { loadUsers } from "@/lib/loadData";
import { useUrl } from "nextjs-current-url";
import UpdateUser from "./updateUser";

interface Customer {
  _id: string;

  name: string;

  src: string;
}

function CustomerTable() {
  const { pathname, href } = useUrl() ?? {};
  const [userData, setUserData] = useState<Customer[]>([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showCustomer, setShowCustomer] = useState(false);
  useEffect(() => {
    // declare the data fetching function
    const fetchNew = async () => {
      if (userData.length == 0) {
        const users = await loadUsers(href);
        setUserData(users.users);
      } else {
      }
    };
    // call the function
    fetchNew()
      // make sure to catch any error
      .catch(console.error);
  }, [userData]);
  const handleEditClick = (user) => {
    setSelectedUser(user);

    setIsEditMode(selectedUser === user); // Chỉ thiết lập isEditMode thành true nếu sản phẩm đã được chọn đang được chỉnh sửa
  };
  const handleSaveClick = async () => {
    // Thực hiện lưu thay đổi vào cơ sở dữ liệu (gọi API, ...)

    const users = await loadUsers(href);

    setUserData(users.users);
    setSelectedUser(null);
    setIsEditMode(false); // Chuyển về chế độ xem sau khi lưu thành công
  };
  const rows = userData.map((user, index) => (
    <tr key={user._id}>
      <td>{index + 1}</td>

      <td>{user.name}</td>

      <td></td>

      <td>
        <button onClick={() => handleEditClick(user)}>Edit</button>
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
        opened={Boolean(selectedUser)}
        onClose={() => {
          setSelectedUser(null);

          setIsEditMode(false); // Đảm bảo rằng sau khi đóng modal, chế độ xem lại được kích hoạt
        }}
      >
        {selectedUser && (
          <section className="section">
            <div className="container">
              <h3 className="flex justify-center">
                {isEditMode ? "Edit Product" : "Product Details"}
              </h3>

              <UpdateUser
                user={selectedUser}
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
