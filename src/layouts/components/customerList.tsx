import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { useEffect, useState } from "react";
import { loadCustomer } from "@/lib/loadData";
import { customer, customerData } from "@/feature/data/customerSlice";
import "../../styles/slider.scss";
// posts will be populated at build time by getStaticProps()
export default function CustomerList() {
  // const newsCheck = await loadNews();
  const customerInfo = useSelector((rootState) => customer(rootState));

  let customerList = customerInfo.customerData.value.customerList;
  const [customers, setCustomers] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    // declare the data fetching function
    const fetchNew = async () => {
      if (customers.length == 0) {
        if (
          JSON.parse(localStorage.getItem("customerList") || "[]").length ==
            1 ||
          JSON.parse(localStorage.getItem("customerList") || "[]").length == 0
        ) {
          const customerCheck = await loadCustomer();

          dispatch(customerData(customerCheck));
          setCustomers(customerCheck.customer);
        } else {
          customerList = JSON.parse(
            localStorage.getItem("customerList") || "[]",
          );
          setCustomers(customerList);
        }
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
          {customers.map((img: { _id: string; src: string; type: string }) => {
            return (
              <div key={img._id} className="slide">
                <Image
                  key={img.src}
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src={img.src + ""}
                  alt={img.type + ""}
                  width={158}
                  height={48}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
