"use client";
import React from "react";
import { MdDashboard, MdManageAccounts } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { IoAnalytics, IoSettings } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";

const menus = [
  {
    title: "Dashboard",
    icon: <MdDashboard />,
    href: "/admin/dashboard",
  },
  {
    title: "Products",
    icon: <RiShoppingCartLine />,
    href: "/admin/products",
  },
  {
    title: "Accounts",
    icon: <MdManageAccounts />,
    href: "#",
  },
  {
    title: "Transactions",
    icon: <GrTransaction />,
    href: "/admin/transactions",
  },
  {
    title: "Analytics",
    icon: <IoAnalytics />,
    href: "/admin/analytics",
  },
  {
    title: "Settings",
    icon: <IoSettings />,
    href: "/admin/settings",
  },
];
const Sidebar = () => {
  return (
    <div>
      <div className="flex items-center gap-6">
        <img className="size-12 rounded-lg" src="/logo.png" alt="logo" />
        <h2>Code</h2>
      </div>
      <ul className="space-y-4 mt-6">
        {menus.map((menu, index) => (
          <li
            key={index}
            className="flex flex-row items-center gap-4 border p-4 bg-gray-200 hover:bg-pink-600"
          >
            <a href={menu.href} className="menu-link">
              {menu.icon}
            </a>{" "}
            <span>{menu.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
