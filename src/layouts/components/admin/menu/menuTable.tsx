import React from "react";
import { Table } from "@mantine/core";
import Menu from "../../../../config/menu.json";
import MenuEn from "../../../../config/menuEn.json";
import Popup from "@/components/popup";
import AddItem from "./addItem";
function MenuTable() {
  let HeaderMenu: any = Menu.main;
  let HeaderMenuEn: any = MenuEn.main;
  const refresh = () => {
    HeaderMenu = Menu.main;
    HeaderMenuEn = MenuEn.main;
  };
  const rows = HeaderMenu.map((item, index) => (
    <tr key={item.name}>
      <td>{index + 1}</td>
      <td>{item.name}</td>
      <td>{item.link}</td>
      <td>{item.hasChildren ? "true" : ""}</td>
    </tr>
  ));
  const rowsEn = HeaderMenuEn.map((item, index) => (
    <tr key={item.name}>
      <td>{index + 1}</td>
      <td>{item.name}</td>
      <td>{item.link}</td>
      <td>{item.hasChildren ? "true" : ""}</td>
    </tr>
  ));
  return (
    <div>
      <Popup>
        <AddItem refresh={refresh} />
      </Popup>
      <Table>
        <thead>
          <tr>
            <th>#</th>

            <th>name</th>
            <th>link</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>{rows}</tbody>
      </Table>
      <Table>
        <thead>
          <tr>
            <th>#</th>

            <th>name</th>
            <th>link</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>{rowsEn}</tbody>
      </Table>
    </div>
  );
}

export default MenuTable;
