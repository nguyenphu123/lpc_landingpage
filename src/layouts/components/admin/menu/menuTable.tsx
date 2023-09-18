import React, { useState } from "react";
import { Modal, Table } from "@mantine/core";
import Menu from "../../../../config/menu.json";
import MenuEn from "../../../../config/menuEn.json";
import Popup from "@/components/popup";
import AddItem from "./addItem";
import UpdateItem from "./updateItem";
function MenuTable() {
  let HeaderMenu: any = Menu.main;
  let HeaderMenuEn: any = MenuEn.main;
  let [selectedItem, setSelectedItem] = useState(null);
  const onEdit = (item, language) => {
    let selected: any = JSON.stringify(JSON.parse(item));
    selected["language"] = language;
    setSelectedItem(selected);
  };
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
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
        onClick={() => onEdit(item, "vn")}
      >
        Edit
      </button>
    </tr>
  ));
  const rowsEn = HeaderMenuEn.map((item, index) => (
    <tr key={item.name}>
      <td>{index + 1}</td>
      <td>{item.name}</td>
      <td>{item.link}</td>
      <td>{item.hasChildren ? "true" : ""}</td>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
        onClick={() => onEdit(item, "en")}
      >
        Edit
      </button>
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
            <th>Has children</th>
          </tr>
        </thead>

        <tbody>{rows}</tbody>
        <tbody>{rowsEn}</tbody>
      </Table>

      <Modal
        size="1000px"
        opened={Boolean(selectedItem)}
        onClose={() => {
          setSelectedItem(null);
        }}
      >
        {selectedItem != null ? (
          <section className="section">
            <div className="container">
              <UpdateItem item={selectedItem} refresh={refresh} />
            </div>
          </section>
        ) : (
          <></>
        )}
      </Modal>
    </div>
  );
}

export default MenuTable;
