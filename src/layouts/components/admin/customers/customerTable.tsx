import React, { useEffect, useState } from "react";
import { Table } from "@mantine/core";
import Image from "next/image";
import { loadCustomer } from "@/lib/loadData";
import { useUrl } from "nextjs-current-url";

interface Customer {
  _id: string;

  name: string;

  src: string;
}

function CustomerTable() {
  const { pathname, href } = useUrl() ?? {};
  const [custommerData, setCustomerData] = useState<Customer[]>([]);
  useEffect(() => {
    // declare the data fetching function
    const fetchNew = async () => {
      if (custommerData.length == 0) {
        const customerCheck = await loadCustomer(href);
        setCustomerData(customerCheck.customer);
      } else {
      }
    };
    // call the function
    fetchNew()
      // make sure to catch any error
      .catch(console.error);
  }, [custommerData]);

  const rows = custommerData.map((customer, index) => (
    <tr key={customer._id}>
      <td>{index + 1}</td>

      <td>{customer.name}</td>

      <td>
        <Image src={customer.src} alt={customer.src} width={100} height={100} />
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

export default CustomerTable;
