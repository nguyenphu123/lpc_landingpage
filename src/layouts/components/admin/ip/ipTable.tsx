import React from "react";
import { Table } from "@mantine/core";

import Whitelist from "../../../../config/whitelist.json";

import { useSession } from "next-auth/react";

function UserTable() {
  const ipList: any = Whitelist.whitelist;

  const rows = ipList.map((ip, index) => (
    <tr key={ip.publicIp}>
      <td>{index + 1}</td>

      <td>{ip.publicIp}</td>
    </tr>
  ));

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>

            <th>ip</th>
          </tr>
        </thead>

        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
}

export default UserTable;
