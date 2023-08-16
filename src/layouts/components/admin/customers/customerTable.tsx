import React, { useEffect } from "react";

import { Table } from "@mantine/core";

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { customer, customerData } from "@/feature/data/customerSlice";
import { loadCustomer } from "@/lib/loadData";

interface Customer {
  _id: string;

  name: string;

  src: string;
}

function CustomerTable() {
  const customerInfo = useSelector((rootState) => customer(rootState));

  let customerList = customerInfo.customerData.value.customerList;

  const dispatch = useDispatch();
  useEffect(() => {
    // declare the data fetching function
    const fetchNew = async () => {
      if (customerList.length == 0) {
        if (
          JSON.parse(localStorage.getItem("customerList") || "[]").length == 1
        ) {
          const customerCheck = await loadCustomer();

          dispatch(customerData(customerCheck));
        } else {
          customerList = JSON.parse(
            localStorage.getItem("customerList") || "[]",
          );
        }
      } else {
      }
    };
    // call the function
    fetchNew()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  const rows = customerList.map((customer, index) => (
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
