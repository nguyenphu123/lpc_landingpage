"use client";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { useEffect, useState } from "react";
import { loadCustomer } from "@/lib/loadData";
import { customer, customerData } from "@/feature/data/customerSlice";
import "../../styles/slider.scss";
import { useUrl } from "nextjs-current-url";
// posts will be populated at build time by getStaticProps()
export default function CustomerList() {
  // const newsCheck = await loadNews();
  const customerInfo = useSelector((rootState) => customer(rootState));

  let customerList = customerInfo.customerData.value.customerList;

  const [customers, setCustomers] = useState(customerList || []);
  const dispatch = useDispatch();
  const { href } = useUrl() ?? {};
  useEffect(() => {
    // declare the data fetching function
    const fetchNew = async () => {
      if (customers.length == 0) {
        const customerCheck = await loadCustomer(href);
        setCustomers(
          customerCheck.customers.filter((item) => item.status == "Active"),
        );
        dispatch(customerData(customerCheck));
      } else {
      }
    };
    // call the function
    fetchNew()
      // make sure to catch any error
      .catch(console.error);
  }, [customers]);
  return customers.length == 0 ? (
    <></>
  ) : (
    <div className="h-48 grid  content-center">
      <div className="slider">
        <div className="slide-track">
          {customers.map(
            (img: {
              status: string;
              _id: string;
              src: string;
              type: string;
            }) => (
              <div key={img._id} className="slide flex items-center mx-3">
                <Image
                  className="flex items-center col-span-2 max-h-16 w-full object-contain lg:col-span-1"
                  src={img.src}
                  alt={img.type}
                  width={158}
                  height={100}
                />
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
