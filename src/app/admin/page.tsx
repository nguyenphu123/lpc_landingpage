"use client";
import { useSelector } from "react-redux";
import { language } from "@/feature/changeLanguage/changeLanguageSlice";
import { redirect, usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import BannerForm from "@/components/admin/banner/createBanner";
import ContactForm from "@/components/admin/contact/addContact";
import CustomerForm from "@/components/admin/customers/createCustomer";
import AddNews from "@/components/admin/news/createNew";
import PartnerForm from "@/components/admin/partners/createPartner";
import ProductForm from "@/components/admin/products/createProduct";
import { useEffect, useState } from "react";
import Popup from "@/components/popup";
import NewsTable from "@/components/admin/news/newTable";
import CustomerTable from "@/components/admin/customers/customerTable";
import PartnerTable from "@/components/admin/partners/partnerTable";
import ProductTable from "@/components/admin/products/productTable";
import ContactTable from "@/components/admin/contact/tableContact";
import BannerTable from "@/components/admin/banner/bannerTable";
import MessageTable from "@/components/admin/message/messageTable";
// import "../styles/homepage.scss"
const Home = () => {
  const [showBanner, setShowBanner] = useState("visible");
  const [showContact, setShowContact] = useState("hidden");
  const [showCustomer, setShowCustomer] = useState("hidden");
  const [showNew, setShowNew] = useState("hidden");
  const [showMessage, setShowMessage] = useState("hidden");
  const [showPartner, setShowPartner] = useState("hidden");
  const [showProduct, setShowProduct] = useState("hidden");
  const curlanguage = useSelector(language);
  const session: any = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login");
    },
  });
  const pathname = usePathname();
  useEffect(() => {
    onInactive(600000, function () {
      //signOut();
    });
    function onInactive(ms, cb) {
      var wait = setTimeout(cb, ms);

      document.onmousemove =
        document.onmousedown =
        document.onmouseup =
        document.onkeydown =
        document.onkeyup =
        document.onfocus =
          function () {
            clearTimeout(wait);
            wait = setTimeout(cb, ms);
          };
    }
  }, []);

  const onClick = (tabNo: string) => {
    switch (tabNo) {
      case "banner":
        setShowBanner("visible");
        setShowContact("hidden");
        setShowCustomer("hidden");
        setShowNew("hidden");
        setShowMessage("hidden");
        setShowPartner("hidden");
        setShowProduct("hidden");
        break;
      case "contact":
        setShowBanner("hidden");
        setShowContact("visible");
        setShowCustomer("hidden");
        setShowNew("hidden");
        setShowMessage("hidden");
        setShowPartner("hidden");
        setShowProduct("hidden");
        break;
      case "customer":
        setShowBanner("hidden");
        setShowContact("hidden");
        setShowCustomer("visible");
        setShowNew("hidden");
        setShowMessage("hidden");
        setShowPartner("hidden");
        setShowProduct("hidden");
        break;
      case "new":
        setShowBanner("hidden");
        setShowContact("hidden");
        setShowCustomer("hidden");
        setShowNew("visible");
        setShowMessage("hidden");
        setShowPartner("hidden");
        setShowProduct("hidden");
        break;
      case "message":
        setShowBanner("hidden");
        setShowContact("hidden");
        setShowCustomer("hidden");
        setShowNew("hidden");
        setShowMessage("visible");
        setShowPartner("hidden");
        setShowProduct("hidden");
        break;
      case "partner":
        setShowBanner("hidden");
        setShowContact("hidden");
        setShowCustomer("hidden");
        setShowNew("hidden");
        setShowMessage("hidden");
        setShowPartner("visible");
        setShowProduct("hidden");
        break;
      case "product":
        setShowBanner("hidden");
        setShowContact("hidden");
        setShowCustomer("hidden");
        setShowNew("hidden");
        setShowMessage("hidden");
        setShowPartner("hidden");
        setShowProduct("visible");
        break;
    }
  };
  return (
    <div className="max-w-7xl mx-auto ">
      <div className="border-b border-gray-200 dark:border-gray-700 mb-4">
        <ul
          className="flex flex-wrap -mb-px"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li className="mr-2" role="presentation">
            <button
              className="inline-block active:text-gray-600 active:border-gray-300 text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
              id="banner-tab"
              data-tabs-target="#banner"
              type="button"
              role="tab"
              aria-controls="banner"
              aria-selected="true"
              onClick={(e) => onClick("banner")}
            >
              Banner
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className="inline-block text-gray-500 active:text-gray-600 active:border-gray-300 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
              id="company-tab"
              data-tabs-target="#company"
              type="button"
              role="tab"
              aria-controls="company"
              aria-selected="false"
              onClick={(e) => onClick("contact")}
            >
              Company
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className="inline-block text-gray-500 active:text-gray-600 active:border-gray-300 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
              id="customer-tab"
              data-tabs-target="#customer"
              type="button"
              role="tab"
              aria-controls="customer"
              aria-selected="false"
              onClick={(e) => onClick("customer")}
            >
              Customer
            </button>
          </li>
          <li role="presentation">
            <button
              className="inline-block text-gray-500 active:text-gray-600 active:border-gray-300 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
              id="new-tab"
              data-tabs-target="#new"
              type="button"
              role="tab"
              aria-controls="new"
              aria-selected="false"
              onClick={(e) => onClick("new")}
            >
              News
            </button>
          </li>
          <li role="presentation">
            <button
              className="inline-block text-gray-500 active:text-gray-600 active:border-gray-300 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
              id="message-tab"
              data-tabs-target="#message"
              type="button"
              role="tab"
              aria-controls="message"
              aria-selected="false"
              onClick={(e) => onClick("message")}
            >
              Messages
            </button>
          </li>
          <li role="presentation">
            <button
              className="inline-block text-gray-500 active:text-gray-600 active:border-gray-300 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
              id="partner-tab"
              data-tabs-target="#partner"
              type="button"
              role="tab"
              aria-controls="partner"
              aria-selected="false"
              onClick={(e) => onClick("partner")}
            >
              Partner
            </button>
          </li>
          <li role="presentation">
            <button
              className="inline-block text-gray-500 active:text-gray-600 active:border-gray-300 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
              id="product-tab"
              data-tabs-target="#product"
              type="button"
              role="tab"
              aria-controls="product"
              aria-selected="false"
              onClick={(e) => onClick("product")}
            >
              Product
            </button>
          </li>
          <li role="presentation">
            <button
              className="inline-block text-gray-500 active:text-gray-600 active:border-gray-300 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
              id="contacts-tab"
              data-tabs-target="#contacts"
              type="button"
              role="tab"
              aria-controls="contacts"
              aria-selected="false"
            >
              User
            </button>
          </li>
        </ul>
      </div>
      <div id="myTabContent">
        <div
          className={`bg-gray-50 p-4 rounded-lg dark:bg-gray-800 ${showBanner}`}
          id="banner"
          role="tabpanel"
          aria-labelledby="banner-tab"
        >
          <Popup>
            <BannerForm />
          </Popup>
          <BannerTable />
        </div>
        <div
          className={`bg-gray-50 p-4 rounded-lg dark:bg-gray-800 ${showContact}`}
          id="company"
          role="tabpanel"
          aria-labelledby="company-tab"
        >
          <ContactTable />
        </div>
        <div
          className={`bg-gray-50 p-4 rounded-lg dark:bg-gray-800 ${showCustomer}`}
          id="customer"
          role="tabpanel"
          aria-labelledby="customer-tab"
        >
          <Popup>
            <CustomerForm />
          </Popup>
          <CustomerTable />
        </div>
        <div
          className={`bg-gray-50 p-4 rounded-lg dark:bg-gray-800 ${showNew}`}
          id="new"
          role="tabpanel"
          aria-labelledby="new-tab"
        >
          <Popup>
            {" "}
            <AddNews />
          </Popup>
          <NewsTable />
        </div>
        <div
          className={`bg-gray-50 p-4 rounded-lg dark:bg-gray-800 ${showMessage}`}
          id="message"
          role="tabpanel"
          aria-labelledby="message-tab"
        >
          <MessageTable />
        </div>
        <div
          className={`bg-gray-50 p-4 rounded-lg dark:bg-gray-800 ${showPartner}`}
          id="partner"
          role="tabpanel"
          aria-labelledby="partner-tab"
        >
          <Popup>
            <PartnerForm />
          </Popup>
          <PartnerTable />
        </div>
        <div
          className={`bg-gray-50 p-4 rounded-lg dark:bg-gray-800 ${showProduct}`}
          id="product"
          role="tabpanel"
          aria-labelledby="product-tab"
        >
          <Popup>
            <ProductForm />
          </Popup>
          <ProductTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
