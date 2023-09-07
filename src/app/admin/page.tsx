"use client";
import { useSelector } from "react-redux";
import { language } from "@/feature/changeLanguage/changeLanguageSlice";
import { redirect, usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import dynamic from "next/dynamic";
const BannerForm = dynamic(
  () => import("@/components/admin/banner/createBanner"),
);
const ContactForm = dynamic(
  () => import("@/components/admin/contact/addContact"),
);
const CustomerForm = dynamic(
  () => import("@/components/admin/customers/createCustomer"),
);
const AddNews = dynamic(() => import("@/components/admin/news/createNew"));
const PartnerForm = dynamic(
  () => import("@/components/admin/partners/createPartner"),
);
const ProductForm = dynamic(
  () => import("@/components/admin/products/createProduct"),
);
const Popup = dynamic(() => import("@/components/popup"));
const NewsTable = dynamic(() => import("@/components/admin/news/newTable"));
const CustomerTable = dynamic(
  () => import("@/components/admin/customers/customerTable"),
);
const PartnerTable = dynamic(
  () => import("@/components/admin/partners/partnerTable"),
);
const ProductTable = dynamic(
  () => import("@/components/admin/products/productTable"),
);
const ContactTable = dynamic(
  () => import("@/components/admin/contact/tableContact"),
);
const BannerTable = dynamic(
  () => import("@/components/admin/banner/bannerTable"),
);
const MessageTable = dynamic(
  () => import("@/components/admin/message/messageTable"),
);
const UserTable = dynamic(() => import("@/components/admin/user/userTable"));
const UserForm = dynamic(() => import("@/components/admin/user/createUser"));
const UpdateUser = dynamic(() => import("@/components/admin/user/updateUser"));

import { useEffect, useState } from "react";

import { Button } from "@mantine/core";

// import "../styles/homepage.scss"
const Home = () => {
  const [showBanner, setShowBanner] = useState("visible");
  const [showContact, setShowContact] = useState("hidden");
  const [showCustomer, setShowCustomer] = useState("hidden");
  const [showNew, setShowNew] = useState("hidden");
  const [showMessage, setShowMessage] = useState("hidden");
  const [showPartner, setShowPartner] = useState("hidden");
  const [showProduct, setShowProduct] = useState("hidden");
  const [showUser, setShowUser] = useState("hidden");
  const [showChangePassword, setShowChangePassword] = useState("hidden");
  const curlanguage = useSelector(language);
  const { status }: any = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login");
    },
  });
  const { data: session }: any = useSession();
  useEffect(() => {
    if (status !== "loading") {
      if (session.user.loginCount == 0) {
        // redirect("/admin/changepassword");
        // setShowChangePassword("visible");
        // setShowBanner("hidden");
        // setShowContact("hidden");
        // setShowCustomer("hidden");
        // setShowNew("hidden");
        // setShowMessage("hidden");
        // setShowPartner("hidden");
        // setShowProduct("hidden");
        // setShowUser("hidden");
      }
    }
  }, [status, session]);
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
  const logOut = () => {
    signOut();
    // redirect("/login");
  };
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
        setShowUser("hidden");
        break;
      case "contact":
        setShowBanner("hidden");
        setShowContact("visible");
        setShowCustomer("hidden");
        setShowNew("hidden");
        setShowMessage("hidden");
        setShowPartner("hidden");
        setShowProduct("hidden");
        setShowUser("hidden");
        break;
      case "customer":
        setShowBanner("hidden");
        setShowContact("hidden");
        setShowCustomer("visible");
        setShowNew("hidden");
        setShowMessage("hidden");
        setShowPartner("hidden");
        setShowProduct("hidden");
        setShowUser("hidden");
        break;
      case "new":
        setShowBanner("hidden");
        setShowContact("hidden");
        setShowCustomer("hidden");
        setShowNew("visible");
        setShowMessage("hidden");
        setShowPartner("hidden");
        setShowProduct("hidden");
        setShowUser("hidden");
        break;
      case "message":
        setShowBanner("hidden");
        setShowContact("hidden");
        setShowCustomer("hidden");
        setShowNew("hidden");
        setShowMessage("visible");
        setShowPartner("hidden");
        setShowProduct("hidden");
        setShowUser("hidden");
        break;
      case "partner":
        setShowBanner("hidden");
        setShowContact("hidden");
        setShowCustomer("hidden");
        setShowNew("hidden");
        setShowMessage("hidden");
        setShowPartner("visible");
        setShowProduct("hidden");
        setShowUser("hidden");
        break;
      case "product":
        setShowBanner("hidden");
        setShowContact("hidden");
        setShowCustomer("hidden");
        setShowNew("hidden");
        setShowMessage("hidden");
        setShowPartner("hidden");
        setShowProduct("visible");
        setShowUser("hidden");
        break;
      case "user":
        setShowBanner("hidden");
        setShowContact("hidden");
        setShowCustomer("hidden");
        setShowNew("hidden");
        setShowMessage("hidden");
        setShowPartner("hidden");
        setShowProduct("hidden");
        setShowUser("visible");
        break;
    }
  };
  const handleSaveClick = () => {
    setShowChangePassword("hidden");
    setShowBanner("visible");
    setShowContact("hidden");
    setShowCustomer("hidden");
    setShowNew("hidden");
    setShowMessage("hidden");
    setShowPartner("hidden");
    setShowProduct("hidden");
    setShowUser("hidden");
  };
  if (status == "loading") {
    return <>Loginout</>;
  } else {
    return showChangePassword == "visible" ? (
      <div id="myTabContent">
        <UpdateUser user={session.user} handleSaveClick={handleSaveClick} />
      </div>
    ) : (
      <div className="max-w-7xl mx-auto ">
        <Button onClick={() => logOut()} variant="default">
          Log out
        </Button>
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
            {status != "loading" && session.user.role == "sysadmin" ? (
              <li role="presentation">
                <button
                  className="inline-block text-gray-500 active:text-gray-600 active:border-gray-300 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
                  id="contacts-tab"
                  data-tabs-target="#contacts"
                  type="button"
                  role="tab"
                  aria-controls="contacts"
                  aria-selected="false"
                  onClick={(e) => onClick("user")}
                >
                  User
                </button>
              </li>
            ) : (
              <></>
            )}
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
          <div
            className={`bg-gray-50 p-4 rounded-lg dark:bg-gray-800 ${showUser}`}
            id="user"
            role="tabpanel"
            aria-labelledby="user-tab"
          >
            <Popup>
              <UserForm />
            </Popup>
            <UserTable />
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
