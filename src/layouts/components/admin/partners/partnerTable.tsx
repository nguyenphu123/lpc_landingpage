import React, { useEffect, useState } from "react";
import { Table } from "@mantine/core";
import Image from "next/image";
import { loadPartner } from "@/lib/loadData";
import { useUrl } from "nextjs-current-url";

interface Partner {
  _id: string;

  name: string;

  src: string;
}

function PartnerTable() {
  const { href } = useUrl() ?? {};
  const [partnerData, setPartnerData] = useState<Partner[]>([]);
  useEffect(() => {
    const fetchNew = async () => {
      if (partnerData.length == 0) {
        const partnerCheck = await loadPartner(href);
        setPartnerData(partnerCheck.partners);
      } else {
      }
    };
    // call the function
    fetchNew()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  const rows = partnerData.map((partner, index) => (
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
