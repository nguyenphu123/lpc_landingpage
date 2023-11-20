"use client";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changeLanguage,
  language,
} from "../../feature/changeLanguage/changeLanguageSlice";
import "../../styles/flag.scss";

import { useEffect, useState } from "react";
import languageChange from "@/models/language";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
const ThemeSwitcher = () => {
  const curlanguage = useSelector((rootState: languageChange) =>
    language(rootState),
  );
  const [width, setWidth]: any = useState(
    typeof window !== "undefined" && window.innerWidth,
  ); // default width, detect on server.
  const handleResize = () =>
    setWidth(typeof window !== "undefined" && window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);
  const dispatch = useDispatch();
  return (
    <Dropdown showArrow shouldBlockScroll={false}>
      <DropdownTrigger>
        <Button
          className="text-sm font-black text-black"
          startContent={
            curlanguage.changeLanguage.value == "en" ? (
              <span className=" flag-icon-rounded fi fi-us" />
            ) : (
              <span className=" flag-icon-rounded fi fi-vn" />
            )
          }
          variant="light"
        >
          {width > 1030
            ? curlanguage.changeLanguage.value == "en"
              ? "English"
              : "Vietnamese"
            : ""}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        onAction={(key) => dispatch(changeLanguage(key))}
        className="bg-white rounded w-32 h-24 sticky top-0 z-50 transition-all "
        aria-label="Dropdown Variants"
        variant="shadow"
      >
        <DropdownItem
          className="text-sm gap-2 items-center flow-root mt-4"
          startContent={<span className=" flag-icon-rounded fi fi-vn" />}
          key="vn"
        >
          {width > 1030 ? "Vietnamese" : ""}
        </DropdownItem>
        <DropdownItem
          className="text-sm gap-2 flow-root items-center"
          startContent={<span className="flag-icon-rounded fi fi-us" />}
          key="en"
        >
          {width > 1030 ? "English" : ""}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ThemeSwitcher;
