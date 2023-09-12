import React from "react";
import { Table } from "@mantine/core";
import Whitelist from "../../../../config/whitelist.json";
function IpTable() {
  const ipList: any = Whitelist.whitelist;

  const rows = ipList.map((ip, index) => (
    <tr key={ip.publicIp}>
      <td>{index + 1}</td>

      <td>{ip.publicIp}</td>
      <td>{ip.status}</td>
    </tr>
  ));

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>

            <th>ip</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
}

export default IpTable;
