import React from "react";

import Data from "../../../../config/data.json";
import DataEn from "../../../../config/dataEn.json";
import EditRevenue from "./editRevenue";
function RevenueTable() {
  let Revenue: any = Data.revenue;
  let RevenueEn: any = DataEn.revenue;
  const refreshRevenue = () => {
    Revenue = Data.revenue;
    RevenueEn = DataEn.revenue;
  };

  return (
    <div>
      <EditRevenue
        Revenue={RevenueEn}
        language={"en"}
        refreshRevenue={refreshRevenue}
      ></EditRevenue>
      <EditRevenue
        Revenue={Revenue}
        language={"vn"}
        refreshRevenue={refreshRevenue}
      ></EditRevenue>
    </div>
  );
}

export default RevenueTable;
