"use client";
import { US, VN } from "country-flag-icons/react/3x2";
import config from "@/config/config.json";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeLanguage,
  language,
} from "../../feature/changeLanguage/changeLanguageSlice";
const ThemeSwitcher = ({ className }: { className: string }) => {
  const { theme_switcher } = config.settings;
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  const curlanguage = useSelector((rootState) => language(rootState));
  const dispatch = useDispatch();
  return (
    <>
      {theme_switcher && (
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
            <span>
              {curlanguage.changeLanguage.value == "en" ? (
                <svg
                  className="absolute left-[4px] top-[4px] z-10 opacity-100 dark:opacity-0"
                  viewBox="0 0 56 56"
                  fill="#fff"
                  height="16"
                  width="16"
                >
                  <US title="United States" className="..." />{" "}
                </svg>
              ) : (
                <svg
                  className="absolute left-[4px] top-[4px] z-10 opacity-100 dark:opacity-0"
                  viewBox="0 0 56 56"
                  fill="#fff"
                  height="16"
                  width="16"
                >
                  <VN title="Viet Nam" className="..." />
                </svg>
              )}
            </span>
          </label>
        </div>
      )}
    </>
  );
};

export default ThemeSwitcher;
