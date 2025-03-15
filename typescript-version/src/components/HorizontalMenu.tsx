"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa"; // Down arrow for submenu

const menuItems = [
  { label: "Home", id: "home" },
  {
    label: "Menu",
    id: "menu",
    subMenu: [
      { label: "Appetizers", id: "appetizers" },
      { label: "Main Dishes", id: "main-dishes" },
      { label: "Desserts", id: "desserts" },
    ],
  },
  { label: "About", id: "about" ,
    subMenu: [
        { label: "Appetizers", id: "appetizers" },
        { label: "Main Dishes", id: "main-dishes" },
        { label: "Desserts", id: "desserts" },
      ],
  },
  { label: "Contact", id: "contact" },
  { label: "Reserve Table", id: "reserve" },
];

export default function HorizontalMenu() {
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu toggle
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); // Active submenu

  // Close submenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".dropdown-menu")) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="px-6 py-4 relative bg-white shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <span className="text-xl font-bold text-gray-800">MyRestaurant</span>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-gray-800"
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links */}
        <div
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none flex flex-col md:flex-row md:space-x-6 p-4 md:p-0 transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          } md:flex`}
        >
          {menuItems.map((item) => (
            <div key={item.id} className="relative dropdown-menu">
              {/* Main menu item */}
              <div
                className="flex items-center justify-between py-2 md:py-0 cursor-pointer text-black px-4 hover:text-gray-600"
                onClick={() =>
                  item.subMenu && setOpenDropdown(openDropdown === item.id ? null : item.id)
                }
              >
                <a href={!item.subMenu ? `#${item.id}` : undefined}>{item.label}</a>
                {item.subMenu && <FaChevronDown className="ml-2 text-sm" />}
              </div>

              {/* Submenu (Correctly Aligned Below Parent) */}
              {item.subMenu && openDropdown === item.id && (
                <div className="md:absolute md:left-0 md:mt-2 bg-white shadow-lg rounded-lg w-full md:w-40">
                  {item.subMenu.map((subItem) => (
                    <a
                      key={subItem.id}
                      href={`#${subItem.id}`}
                      className="block px-8 py-2 text-black rounded hover:bg-[#A1A4A9] hover:text-white md:px-4"
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
