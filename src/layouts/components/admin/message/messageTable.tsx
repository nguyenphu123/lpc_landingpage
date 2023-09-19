import React, { useEffect, useState } from "react";

import { Table } from "@mantine/core";

import { loadMessageAdmin } from "@/lib/loadData";

import { useUrl } from "nextjs-current-url";

import { useSession } from "next-auth/react";

interface Message {
  phoneNumber: string;

  _id: string;

  name: string;

  email: string;

  message: string;
}

function MessageTable() {
  const { pathname, href } = useUrl() ?? {};

  let { data: session, status } = useSession();

  const [messageData, setMessageData] = useState<Message[]>([]);

  useEffect(() => {
    const fetchNew = async () => {
      if (messageData.length == 0) {
        const messageCheck = await loadMessageAdmin(href, session);

        setMessageData(messageCheck.messages.reverse());
      } else {
      }
    };

    // call the function

    fetchNew()
      // make sure to catch any error

      .catch(console.error);
  }, []);

  let counter = messageData.length;

  const rows = messageData.map((partner) => {
    counter--; // Giảm giá trị biến đếm ngược lại

    return (
      <tr
        key={partner._id}
        className={counter % 2 === 0 ? "bg-white" : "bg-gray-100"}
      >
        <td>{counter}</td> {/* Sử dụng giá trị của biến đếm */}
        <td>{partner.name}</td>
        <td>{partner.email}</td>
        <td>{partner.phoneNumber}</td>
        <td>{partner.message}</td>
      </tr>
    );
  });

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th style={{ width: "5%" }}>#</th>

            <th style={{ width: "20%" }}>Name</th>

            <th style={{ width: "25%" }}>From</th>

            <th style={{ width: "15%" }}>Phone</th>

            <th style={{ width: "35%" }}>Message</th>
          </tr>
        </thead>

        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
}

export default MessageTable;
