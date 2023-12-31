"use client";
import { useRouter } from "next/navigation";
import { language } from "@/feature/changeLanguage/changeLanguageSlice";
import { useSelector } from "react-redux";
import Data from "@/config/data.json";
import DataEn from "@/config/dataEn.json";
import Whitelist from "@/config/whitelist.json";
const SeoMeta = dynamic(() => import("@/partials/SeoMeta"));
import PageHeader from "@/partials/PageHeader";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { publicIpv4 } from "public-ip";
import languageChange from "@/models/language"
var bcrypt = require("bcryptjs");

export default function Login() {
  // Get the client's IP address from the request headers
  const { data: session }: any = useSession();
  const curlanguage = useSelector((rootState : languageChange) => language(rootState));
  // let loginState = useSelector(loginStatus);
  const [errorMessage, setErrorMessage] = useState(false);
  const [userIp, setUserIp] = useState("");
  const router = useRouter();
  const ipList: any = Whitelist.whitelist;

  const data = {
    title: "Login",
    meta_title: "",
    description: "this is meta description",
    image: "",
  };
  // useEffect(() => {
  //   const checkSession = async () => {
  //     if (session != undefined) {
  //       signOut({ redirect: false }).then(() => {});
  //     } else {
  //     }
  //   };
  //   // call the function
  //   checkSession()
  //     // make sure to catch any error
  //     .catch(console.error);
  // }, [session]);
  useEffect(() => {
    const fetchIp = async () => {
      if (userIp == "") {
        let ipAddress = await publicIpv4();

        let acceptList = ipList.filter(
          (item) => item.publicIp == ipAddress && item.status == "Active",
        );

        if (acceptList.length == 0) {
          router.push("/404");
        }
      } else {
      }
    };
    // call the function
    fetchIp()
      // make sure to catch any error
      .catch(console.error);
  }, [userIp]);
  async function onsubmit(e: any) {
    e.preventDefault();

    const loginInfo: any = {
      email: e.target.email.value,
      password: e.target.password.value,
      redirect: false,
    };
    try {
      const res: any = await signIn("credentials", loginInfo);

      if (res.error != null || res.status != 200) {
        setErrorMessage(true);
        //setError("Invalid Credentials");
        return;
      }
      // dispatch(userLogin(loginInfo));
      router.push("/admin");
    } catch (error) {
      setErrorMessage(true);
    }
  }
  return (
    <>
      <SeoMeta
        title={data.title}
        meta_title={data.meta_title}
        description={data.description}
        image={data.image}
      />
      <PageHeader
        title={
          curlanguage.changeLanguage.value == "en"
            ? DataEn["login_title"].name
            : Data["login_title"].name
        }
      />
      <section className="bg-gray-50 dark:bg-gray-900">
        <div
          style={{ height: "60vh" }}
          className="flex flex-col items-center px-6 mx-auto  lg:py-0"
        >
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                {curlanguage.changeLanguage.value == "en"
                  ? DataEn["login_title"].name
                  : Data["login_title"].name}
              </h1>
              <form className="space-y-4 md:space-y-3" onSubmit={onsubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {curlanguage.changeLanguage.value == "en"
                      ? DataEn["email"].name
                      : Data["email"].name}
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required={true}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {curlanguage.changeLanguage.value == "en"
                      ? DataEn["password"].name
                      : Data["password"].name}
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required={true}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5"></div>
                  </div>
                </div>
                {errorMessage ? (
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                    role="alert"
                  >
                    <strong className="font-bold">User error!</strong>
                    <span className="block sm:inline">
                      Please check your email or password
                    </span>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                      <svg
                        className="fill-current h-6 w-6 text-red-500"
                        role="button"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <title>Close</title>
                        <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                      </svg>
                    </span>
                  </div>
                ) : (
                  <></>
                )}
                <button
                  type="submit"
                  className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  {curlanguage.changeLanguage.value == "en"
                    ? "Sign in"
                    : "Đăng nhập"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
