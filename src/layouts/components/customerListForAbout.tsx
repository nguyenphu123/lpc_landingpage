import Image from "next/image";
import { useEffect, useState } from "react";
import { loadCustomer } from "@/lib/loadData";
import "../../styles/slider.scss";
import { useUrl } from "nextjs-current-url";
// posts will be populated at build time by getStaticProps()
export default function CustomerListForAbout() {
  // const newsCheck = await loadNews();

  const [customers, setCustomers] = useState([]);

  const { pathname, href } = useUrl() ?? {};
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
    <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
      {customers.map((img: { status: string; src: string; type: string }) => (
        <Image
          key={img.src}
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          src={img.src + ""}
          alt={img.type + ""}
          width={158}
          height={48}
        />
      ))}
    </div>
  );
}
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
