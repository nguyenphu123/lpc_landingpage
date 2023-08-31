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
      <button className="" onClick={() => dispatch(changeLanguage())}>
        {curlanguage.changeLanguage.value == "en" ? (
          <span className="flag-icon-rounded fi fi-us"></span>
        ) : (
          <span className=" flag-icon-rounded fi fi-vn"></span>
        )}
      </button>
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
