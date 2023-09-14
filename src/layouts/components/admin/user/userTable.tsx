import React, { useEffect, useState } from "react";
import { Modal, Table } from "@mantine/core";
import Image from "next/image";
import { loadUsers } from "@/lib/loadData";
import { useUrl } from "nextjs-current-url";
import UpdateUser from "./updateUser";
import { useSession } from "next-auth/react";
import { updateCustomer } from "@/lib/updateData";
import ToastGenerator from "@/lib/toast-tify";
import Popup from "@/components/popup";
import UserForm from "./createUser";

interface Customer {
  status: string;
  _id: string;

  email: string;
}

function UserTable() {
  let { data: session, status } = useSession();
  const { pathname, href } = useUrl() ?? {};
  const [userData, setUserData] = useState<Customer[]>([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showCustomer, setShowCustomer] = useState(false);
  const [isSucess, setIsSucess] = useState(false);
  const [sucessMessage, setSucessMessage] = useState("");
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
  const changeStatus = async (user) => {
    let userStatusChange = JSON.parse(JSON.stringify(user));
    if (userStatusChange["status"] == "Active") {
      userStatusChange["status"] = "Disable";
    } else {
      userStatusChange["status"] = "Active";
    }
    let returnResult = await updateCustomer(userStatusChange, session);
    if (returnResult.success != undefined) {
      showToast(returnResult.msg);
      const users = await loadUsers(href);

      setUserData(users.users);
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
  const refreshUser = async () => {
    const users = await loadUsers(href);

    setUserData(users.users);
  };
  const rows = userData.map((user, index) => (
    <tr key={user._id}>
      <td>{index + 1}</td>

      <td>{user.email}</td>

      <td>{user.status}</td>

      {/* <td>
        <button onClick={() => handleEditClick(user)}>Edit</button>
      </td> */}
      <td>
        <button className="cursor-pointer" onClick={() => changeStatus(user)}>
          {user.status == "Active" ? "Disable" : "Active"}
        </button>
      </td>
    </tr>
  ));

  return (
    <div>
      {isSucess ? <ToastGenerator message={sucessMessage} /> : <></>}
      <Popup>
        <UserForm refreshUser={refreshUser} />
      </Popup>
      <Table>
        <thead>
          <tr>
            <th>#</th>

            <th>Name</th>

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
              <h3 className="flex justify-center">{isEditMode ? "" : ""}</h3>

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

export default UserTable;
