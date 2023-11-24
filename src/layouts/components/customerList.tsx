"use client";
import Image from "next/image";
import { memo, useEffect, useState } from "react";
import { loadCustomer } from "@/lib/loadData";
import "../../styles/slider.scss";
import { useUrl } from "nextjs-current-url";
// posts will be populated at build time by getStaticProps()
function CustomerList() {
  // const newsCheck = await loadNews();

  const [customers, setCustomers] = useState([]);

  const { href } = useUrl() ?? {};
  useEffect(() => {
    // declare the data fetching function
    const fetchNew = async () => {
      if (customers.length == 0) {
        const customerCheck = await loadCustomer(href);
        setCustomers(
          customerCheck.customers.filter((item) => item.status == "Active"),
        );
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
export default memo(CustomerList);
