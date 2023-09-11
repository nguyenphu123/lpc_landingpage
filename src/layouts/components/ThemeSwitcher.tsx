"use client";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changeLanguage,
  language,
} from "../../feature/changeLanguage/changeLanguageSlice";
import "../../styles/flag.scss";
import { Menu, Button } from "@mantine/core";
const ThemeSwitcher = () => {
  const curlanguage = useSelector((rootState) => language(rootState));

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
    </>
  );
};

export default ThemeSwitcher;
