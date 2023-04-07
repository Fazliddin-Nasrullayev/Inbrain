import React from "react";
import "./Sidebar.scss";
import Menu from "./menu/menu";
const Sidebar = ({ handleSidebar, sidebar }) => {
  return (
    <>
      <Menu handleSidebar={handleSidebar} sidebar={sidebar} />
    </>
  );
};

export default Sidebar;
