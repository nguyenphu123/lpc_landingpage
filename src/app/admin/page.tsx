"use client";

import { redirect } from "next/navigation";

import { signOut, useSession } from "next-auth/react";

import dynamic from "next/dynamic";

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

const UpdateUser = dynamic(() => import("@/components/admin/user/updateUser"));

import { useEffect, useState } from "react";

import { Button } from "@mantine/core";

import IpTable from "@/components/admin/ip/ipTable";

import AddIp from "@/components/admin/ip/addIp";

import { updateUserLoginCount } from "@/lib/updateData";

import ToastGenerator from "@/lib/toast-tify";

import MenuTable from "@/components/admin/menu/menuTable";

import RevenueTable from "@/components/admin/revenue/revenueTable";
import RecruitmentTable from "@/components/admin/recruit_banners/recruit_bannersTable";

//admin page

const Home = () => {
  //show banner table

  const [showBanner, setShowBanner] = useState("visible");

  //show contact table

  const [showContact, setShowContact] = useState("hidden");

  //show customer table

  const [showCustomer, setShowCustomer] = useState("hidden");

  //show article(New) table

  const [showNew, setShowNew] = useState("hidden");

  //show message table

  const [showMessage, setShowMessage] = useState("hidden");

  //show partner table

  const [showPartner, setShowPartner] = useState("hidden");

  //show product table

  const [showProduct, setShowProduct] = useState("hidden");

  //show user table

  const [showUser, setShowUser] = useState("hidden");
  const [showRecruitment, setShowRecruitment] = useState("hidden");
  const [showOther, setShowOther] = useState("hidden");
  //show change password page

  const [showChangePassword, setShowChangePassword] = useState("hidden");

  //is call api success

  const [isSucess, setIsSucess] = useState(false);

  //set show message

  const [sucessMessage, setSucessMessage] = useState("");

  //check user login status

  const { status }: any = useSession({
    required: true,

    onUnauthenticated() {
      redirect("/login");
    },
  });

  //check user login session

  const { data: session }: any = useSession();

  useEffect(() => {
    //check user is first time login or not

    const checkuserStatus = async () => {
      if (status !== "loading") {
        if (session.user.loginCount == 0) {
          //is first time login will direct user to change password

          setShowChangePassword("visible");

          setShowBanner("hidden");

          setShowContact("hidden");

          setShowCustomer("hidden");

          setShowNew("hidden");

          setShowMessage("hidden");

          setShowPartner("hidden");

          setShowProduct("hidden");
          setShowRecruitment("hidden")
          setShowUser("hidden");
          setShowOther("hidden");
        } else {
          //user already login more than once

          let userData = {
            _id: session.user._id,

            loginCount: session.user.loginCount + 1,
          };

          let returnResult = await updateUserLoginCount(userData, session); //will update user login count

          if (returnResult.success != undefined) {
            showToast(returnResult.msg);
          }
        }
      } else {
      }
    };

    // call the function

    checkuserStatus()
      // make sure to catch any error

      .catch(console.error);
  }, [status]);

  const showToast = (msg) => {
    //set a toast message in 10 second

    setIsSucess(true);

    setSucessMessage(msg);

    setTimeout(() => {
      setIsSucess(false);

      setSucessMessage("");
    }, 10000);
  };

  useEffect(() => {
    //sign out after 1 hour of not interacting

    onInactive(3600000, function () {
      signOut({ callbackUrl: "http://lp.com.vn/login" });
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
    //logout action

    signOut();
  };

  const onClick = (tabNo: string, e) => {
    e.preventDefault();

    //change tab

    switch (tabNo) {
      case "banner": //banner tab
        setShowBanner("visible");

        setShowContact("hidden");

        setShowCustomer("hidden");

        setShowNew("hidden");

        setShowMessage("hidden");

        setShowPartner("hidden");

        setShowProduct("hidden");
        setShowRecruitment("hidden")
        setShowUser("hidden");
        setShowOther("hidden");
        break;

      case "contact": //contact tab
        setShowBanner("hidden");

        setShowContact("visible");

        setShowCustomer("hidden");

        setShowNew("hidden");

        setShowMessage("hidden");

        setShowPartner("hidden");

        setShowProduct("hidden");
        setShowRecruitment("hidden")
        setShowUser("hidden");
        setShowOther("hidden");
        break;

      case "customer": //customer tab
        setShowBanner("hidden");

        setShowContact("hidden");

        setShowCustomer("visible");

        setShowNew("hidden");

        setShowMessage("hidden");

        setShowPartner("hidden");

        setShowProduct("hidden");
        setShowRecruitment("hidden")
        setShowUser("hidden");
        setShowOther("hidden");
        break;

      case "new": //new tab
        setShowBanner("hidden");

        setShowContact("hidden");

        setShowCustomer("hidden");

        setShowNew("visible");

        setShowMessage("hidden");

        setShowPartner("hidden");

        setShowProduct("hidden");
        setShowRecruitment("hidden")
        setShowUser("hidden");
        setShowOther("hidden");
        break;

      case "message": //message tab
        setShowBanner("hidden");

        setShowContact("hidden");

        setShowCustomer("hidden");

        setShowNew("hidden");

        setShowMessage("visible");

        setShowPartner("hidden");

        setShowProduct("hidden");
        setShowRecruitment("hidden")
        setShowUser("hidden");
        setShowOther("hidden");
        break;

      case "partner": //partner tab
        setShowBanner("hidden");

        setShowContact("hidden");

        setShowCustomer("hidden");

        setShowNew("hidden");

        setShowMessage("hidden");

        setShowPartner("visible");

        setShowProduct("hidden");
        setShowRecruitment("hidden")
        setShowUser("hidden");
        setShowOther("hidden");
        break;

      case "product": //product tab
        setShowBanner("hidden");

        setShowContact("hidden");

        setShowCustomer("hidden");

        setShowNew("hidden");

        setShowMessage("hidden");

        setShowPartner("hidden");

        setShowProduct("visible");
        setShowRecruitment("hidden")
        setShowUser("hidden");
        setShowOther("hidden");
        break;

      case "user": //user tab
        setShowBanner("hidden");

        setShowContact("hidden");

        setShowCustomer("hidden");

        setShowNew("hidden");

        setShowMessage("hidden");

        setShowPartner("hidden");

        setShowProduct("hidden");
        setShowRecruitment("hidden")
        setShowUser("visible");
        setShowOther("hidden");
        break;
      case "recruitment": //user tab
        setShowBanner("hidden");

        setShowContact("hidden");

        setShowCustomer("hidden");

        setShowNew("hidden");

        setShowMessage("hidden");

        setShowPartner("hidden");

        setShowProduct("hidden");
        setShowRecruitment("visible");
        setShowUser("hidden");
        setShowOther("hidden");
        break;
      case "other": //user tab
        setShowBanner("hidden");

        setShowContact("hidden");

        setShowCustomer("hidden");

        setShowNew("hidden");

        setShowMessage("hidden");

        setShowPartner("hidden");

        setShowProduct("hidden");
        setShowRecruitment("hidden")
        setShowUser("hidden");
        setShowOther("visible");
        break;
    }
  };

  const handleSaveClick = () => {
    //signout when change password completed

    signOut({ callbackUrl: "http://lp.com.vn/login" });
  };

  if (status == "loading") {
    return <></>;
  } else {
    return showChangePassword == "visible" ? (
      <div id="myTabContent">
        <UpdateUser user={session.user} handleSaveClick={handleSaveClick} />
      </div>
    ) : (
      <div className="max-w-7xl mx-auto ">
        {isSucess ? <ToastGenerator message={sucessMessage} /> : <></>}

        <h1 className="text-4xl text-center mb-8 mt-8">Admin Dashboard</h1>

        <Button
          onClick={() => logOut()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
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
                className={`${
                  showBanner == "visible" ? "text-gray-900" : "text-gray-500 "
                } inline-block active:text-gray-600 active:border-gray-300 text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300`}
                id="banner-tab"
                data-tabs-target="#banner"
                type="button"
                role="tab"
                aria-controls="banner"
                aria-selected="true"
                onClick={(e) => onClick("banner", e)}
              >
                Banner
              </button>
            </li>

            <li className="mr-2" role="presentation">
              <button
                className={`${
                  showContact == "visible" ? "text-gray-900" : "text-gray-500 "
                } inline-block active:text-gray-600 active:border-gray-300 text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300`}
                id="company-tab"
                data-tabs-target="#company"
                type="button"
                role="tab"
                aria-controls="company"
                aria-selected="false"
                onClick={(e) => onClick("contact", e)}
              >
                Company
              </button>
            </li>

            <li className="mr-2" role="presentation">
              <button
                className={`${
                  showCustomer == "visible" ? "text-gray-900" : "text-gray-500 "
                } inline-block active:text-gray-600 active:border-gray-300 text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300`}
                id="customer-tab"
                data-tabs-target="#customer"
                type="button"
                role="tab"
                aria-controls="customer"
                aria-selected="false"
                onClick={(e) => onClick("customer", e)}
              >
                Customer
              </button>
            </li>

            <li role="presentation">
              <button
                className={`${
                  showNew == "visible" ? "text-gray-900" : "text-gray-500 "
                } inline-block active:text-gray-600 active:border-gray-300 text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300`}
                id="new-tab"
                data-tabs-target="#new"
                type="button"
                role="tab"
                aria-controls="new"
                aria-selected="false"
                onClick={(e) => onClick("new", e)}
              >
                News
              </button>
            </li>

            <li role="presentation">
              <button
                className={`${
                  showMessage == "visible" ? "text-gray-900" : "text-gray-500 "
                } inline-block active:text-gray-600 active:border-gray-300 text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300`}
                id="message-tab"
                data-tabs-target="#message"
                type="button"
                role="tab"
                aria-controls="message"
                aria-selected="false"
                onClick={(e) => onClick("message", e)}
              >
                Messages
              </button>
            </li>

            <li role="presentation">
              <button
                className={`${
                  showPartner == "visible" ? "text-gray-900" : "text-gray-500 "
                } inline-block active:text-gray-600 active:border-gray-300 text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300`}
                id="partner-tab"
                data-tabs-target="#partner"
                type="button"
                role="tab"
                aria-controls="partner"
                aria-selected="false"
                onClick={(e) => onClick("partner", e)}
              >
                Partner
              </button>
            </li>

            <li role="presentation">
              <button
                className={`${
                  showProduct == "visible" ? "text-gray-900" : "text-gray-500 "
                } inline-block active:text-gray-600 active:border-gray-300 text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300`}
                id="product-tab"
                data-tabs-target="#product"
                type="button"
                role="tab"
                aria-controls="product"
                aria-selected="false"
                onClick={(e) => onClick("product", e)}
              >
                Product
              </button>
            </li>
            <li role="presentation">
              <button
                className={`${
                  showRecruitment == "visible"
                    ? "text-gray-900"
                    : "text-gray-500 "
                } inline-block active:text-gray-600 active:border-gray-300 text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300`}
                id="recruiment-tab"
                data-tabs-target="#recruiment"
                type="button"
                role="tab"
                aria-controls="recruiment"
                aria-selected="false"
                onClick={(e) => onClick("recruitment", e)}
              >
                Recruiment
              </button>
            </li>
            {status != "loading" && session.user.role == "sysadmin" ? (
              <li role="presentation">
                <button
                  className={`${
                    showUser == "visible" ? "text-gray-900" : "text-gray-500 "
                  } inline-block active:text-gray-600 active:border-gray-300 text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300`}
                  id="contacts-tab"
                  data-tabs-target="#contacts"
                  type="button"
                  role="tab"
                  aria-controls="contacts"
                  aria-selected="false"
                  onClick={(e) => onClick("user", e)}
                >
                  User
                </button>
              </li>
            ) : (
              <></>
            )}
            <li role="presentation">
              <button
                className={`${
                  showOther == "visible" ? "text-gray-900" : "text-gray-500 "
                } inline-block active:text-gray-600 active:border-gray-300 text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300`}
                id="other-tab"
                data-tabs-target="#other"
                type="button"
                role="tab"
                aria-controls="other"
                aria-selected="false"
                onClick={(e) => onClick("other", e)}
              >
                other
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
            <CustomerTable />
          </div>

          <div
            className={`bg-gray-50 p-4 rounded-lg dark:bg-gray-800 ${showNew}`}
            id="new"
            role="tabpanel"
            aria-labelledby="new-tab"
          >
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
            <PartnerTable />
          </div>

          <div
            className={`bg-gray-50 p-4 rounded-lg dark:bg-gray-800 ${showProduct}`}
            id="product"
            role="tabpanel"
            aria-labelledby="product-tab"
          >
            <ProductTable />
          </div>
          <div
            className={`bg-gray-50 p-4 rounded-lg dark:bg-gray-800 ${showRecruitment}`}
            id="recruitmentTable"
            role="tabpanel"
            aria-labelledby="recruitmentTable-tab"
          >
            <RecruitmentTable />
          </div>
          <div
            className={`bg-gray-50 p-4 rounded-lg dark:bg-gray-800 ${showUser}`}
            id="user"
            role="tabpanel"
            aria-labelledby="user-tab"
          >
            <UserTable />

            <IpTable />
          </div>
          <div
            className={`bg-gray-50 p-4 rounded-lg dark:bg-gray-800 ${showOther}`}
            id="other"
            role="tabpanel"
            aria-labelledby="other-tab"
          >
            <MenuTable />
            <RevenueTable />
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
