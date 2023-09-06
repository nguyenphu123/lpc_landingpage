"use client";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import config from "@/config/config.json";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeLanguage,
  language,
} from "../../feature/changeLanguage/changeLanguageSlice";
import "../../styles/flag.scss";
import { Menu, Button } from "@mantine/core";
const ThemeSwitcher = ({ className }: { className: string }) => {
  const { theme_switcher } = config.settings;
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const curlanguage = useSelector((rootState) => language(rootState));
  useEffect(() => {
    if (curlanguage.changeLanguage.value == "en") {
      setMounted(true);
    } else {
      setMounted(false);
    }
  }, [curlanguage]);

  const dispatch = useDispatch();
  return (
    <>
      <Menu width={200} shadow="md">
        <Menu.Target>
          <Button
            variant="white"
            color="dark"
            radius="xl"
            leftIcon={
              curlanguage.changeLanguage.value == "en" ? (
                <span className=" flag-icon-rounded fi fi-us" />
              ) : (
                <span className="flag-icon-rounded fi  fi-vn" />
              )
            }
          >
            {curlanguage.changeLanguage.value == "en"
              ? "English"
              : "Vietnamese"}
          </Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item icon={<span className=" flag-icon-rounded fi fi-vn" />}>
            <button className="" onClick={() => dispatch(changeLanguage())}>
              Vietnamese
            </button>
          </Menu.Item>

          <Menu.Item icon={<span className="flag-icon-rounded fi fi-us" />}>
            <button className="" onClick={() => dispatch(changeLanguage())}>
              English
            </button>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
      {/* <button className="" onClick={() => dispatch(changeLanguage())}>
        {curlanguage.changeLanguage.value == "en" ? (
          <span className="flag-icon-rounded fi fi-us"></span>
        ) : (
          <span className=" flag-icon-rounded fi fi-vn"></span>
        )}
      </button> */}
      {/* {theme_switcher && (
        <div className={`theme-switcher ${className}`}>
          <input
            id="theme-switcher"
            type="checkbox"
            defaultChecked={
              mounted && (theme === "dark" || resolvedTheme === "dark")
            }
            onClick={() => dispatch(changeLanguage())}
          />
          <label htmlFor="theme-switcher">
            <span className="sr-only">theme switcher</span>

            {curlanguage.changeLanguage.value == "en" ? (
              <span className="flag-icon-rounded fi fi-us"></span>
            ) : (
              <span className=" flag-icon-rounded fi fi-vn"></span>
            )}
          </label>
        </div>
      )} */}
    </>
  );
};

export default ThemeSwitcher;
