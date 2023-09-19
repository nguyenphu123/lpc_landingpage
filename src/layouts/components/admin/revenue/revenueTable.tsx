import React from "react";

import chartData from "@/config/chartData.json";
import EditRevenue from "./editRevenue";
import Popup from "@/components/popup";
import { Table } from "@mantine/core";
import AddRevenue from "./addRevenue";
function RevenueTable() {
  let data = chartData.data;
  const refreshRevenue = () => {
    data = chartData.data;
  };
  const rows = data.map((revenue, index) => (
    <tr key={revenue.year}>
      <td>{index + 1}</td>
      <td>{revenue.year}</td>
      <td>{revenue.revenue}</td>
      <td>
        {revenue.background}
        <div style={{ backgroundColor: revenue.background, width:"30px", height:"30px" }}></div>
      </td>
    </tr>
  ));

  return (
    <div>
      <Popup>
        <AddRevenue refreshRevenue={refreshRevenue} />
      </Popup>
      <Table>
        <thead>
          <tr>
            <th>#</th>

            <th>year</th>
            <th>revenue</th>
            <th>background</th>
          </tr>
        </thead>

        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
}

export default RevenueTable;
