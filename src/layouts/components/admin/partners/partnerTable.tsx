import React, { useEffect } from "react";

import { Table } from "@mantine/core";

import Image from "next/image";
import { loadPartner } from "@/lib/loadData";
import { companyPartner, partner } from "@/feature/data/partnerSlice";
import { useDispatch, useSelector } from "react-redux";

interface Partner {
  _id: string;

  name: string;

  src: string;
}

function PartnerTable() {
  const partnerInfo = useSelector((rootState) => partner(rootState));
  let partnerList = partnerInfo.partnerData.value.partnerList;

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchNew = async () => {
      if (partnerList.length == 0) {
        if (
          JSON.parse(localStorage.getItem("partnerList") || "[]").length == 1
        ) {
          const partnerCheck = await loadPartner();
          dispatch(companyPartner(partnerCheck));
        } else {
          partnerList = JSON.parse(localStorage.getItem("partnerList") || "[]");
        }
      } else {
      }
    };
    // call the function
    fetchNew()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  const rows = partnerList.map((partner, index) => (
    <tr key={partner._id}>
      <td>{index + 1}</td>

      <td>{partner.name}</td>

      <td>
        <Image src={partner.src} alt={partner.src} width={100} height={100} />
      </td>

      <td></td>

      <td>
        <button>Edit</button>
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
    </div>
  );
}

export default PartnerTable;
