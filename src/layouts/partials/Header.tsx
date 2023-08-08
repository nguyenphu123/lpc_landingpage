"use client";
import { language } from "../../feature/changeLanguage/changeLanguageSlice";
import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import config from "@/config/config.json";
import menu from "@/config/menu.json";
import menuEn from "@/config/menuEn.json";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { IoSearch } from "react-icons/io5/index.js";
import useScroll from "../../lib/utils/use-scroll";
import { useSelector } from "react-redux";
import { company } from "@/feature/data/dataSlice";
import { UrlObject } from "url";
//  child navigation link interface

const Header = () => {
  // distructuring the main menu from menu object
  const curlanguage = useSelector(language);
  const { main } = curlanguage.changeLanguage.value == "en" ? menuEn : menu;

  const companyInfo = useSelector(company);
  const servicesMenu = companyInfo.data.value.product.filter(
    (item: { type: string }) => item.type == "service",
  );
  main[1].children = companyInfo.data.value.product.filter(
    (item: { type: string }) => item.type == "solution",
  );
  main[2].children = servicesMenu[0].content;

  const { navigation_button, settings } = config;
  // get current path
  const pathname = usePathname();

  // scroll to top on route change
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  const scrolled = useScroll(50);
  return (
    <header
      className={`fixed top-0 w-full flex justify-center ${
        scrolled
          ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
          : "bg-white/0"
      } z-30 transition-all`}
    >
      <nav className="navbar container">
        {/* logo */}
        <div className="order-0">
          <Logo />
        </div>
        {/* navbar toggler */}
        <input id="nav-toggle" type="checkbox" className="hidden" />
        <label
          id="show-button"
          htmlFor="nav-toggle"
          className="order-3 flex cursor-pointer items-center text-dark dark:text-white lg:order-1 lg:hidden"
        >
          <svg className="h-6 fill-current" viewBox="0 0 20 20">
            <title>Menu Open</title>
            <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
          </svg>
        </label>
        <label
          id="hide-button"
          htmlFor="nav-toggle"
          className="order-3 hidden cursor-pointer items-center text-dark dark:text-white lg:order-1"
        >
          <svg className="h-6 fill-current" viewBox="0 0 20 20">
            <title>Menu Close</title>
            <polygon
              points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
              transform="rotate(45 10 10)"
            ></polygon>
          </svg>
        </label>
        {/* /navbar toggler */}

        <ul
          id="nav-menu"
          className="navbar-nav order-3 hidden w-full pb-6 lg:order-1 lg:flex lg:w-auto lg:space-x-2 lg:pb-0 xl:space-x-8"
        >
          {main.map((menu, i) => (
            <React.Fragment key={`menu-${i}`}>
              {menu.hasChildren ? (
                <li className="nav-item nav-dropdown group relative">
                  <Link
                    className={`nav-link inline-flex items-center ${
                      menu.children
                        ?.map(({ url }: any) => url)
                        .includes(pathname) ||
                      menu.children
                        ?.map(({ url }: any) => `${url}/`)
                        .includes(pathname)
                        ? "active"
                        : ""
                    }`}
                    href={menu.link}
                  >
                    {menu.name}
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </Link>
                  <ul className="nav-dropdown-list hidden group-hover:block lg:invisible lg:absolute lg:block lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100">
                    {menu.children?.map(
                      (
                        child: {
                          titleEn: any;
                          link: string | UrlObject;
                          title: any;
                        },
                        i: any,
                      ) => (
                        <li className="nav-dropdown-item" key={`children-${i}`}>
                          <Link
                            href={child.link}
                            className={`nav-dropdown-link block ${
                              (pathname === `${child.link}/` ||
                                pathname === child.link) &&
                              "active"
                            }`}
                          >
                            {curlanguage.changeLanguage.value == "en"
                              ? child.titleEn
                              : child.title}
                          </Link>
                        </li>
                      ),
                    )}
                  </ul>
                </li>
              ) : (
                <li className="nav-item">
                  <Link
                    href={menu.link}
                    className={`nav-link block ${
                      (pathname === `${menu.link}/` ||
                        pathname === menu.link) &&
                      "active"
                    }`}
                  >
                    {menu.name}
                  </Link>
                </li>
              )}
            </React.Fragment>
          ))}
          {navigation_button.enable && (
            <li className="mt-4 inline-block lg:hidden">
              <Link
                className="btn btn-outline-primary btn-sm"
                href={navigation_button.link}
              >
                {navigation_button.label}
              </Link>
            </li>
          )}
        </ul>
        <div className="order-1 ml-auto flex items-center md:order-2 lg:ml-0">
          {settings.search && (
            <Link
              className="mr-5 inline-block border-r border-border pr-5 text-xl text-dark hover:text-primary dark:border-darkmode-border dark:text-white"
              href={`/search`}
              aria-label="search"
            >
              <IoSearch />
            </Link>
          )}
          <ThemeSwitcher className="mr-5" />
          {navigation_button.enable && (
            <Link
              className="btn btn-outline-primary btn-sm hidden lg:inline-block"
              href={navigation_button.link}
            >
              {curlanguage.changeLanguage.value == "en"
                ? navigation_button.labelEn
                : navigation_button.label}
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
