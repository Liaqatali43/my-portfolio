"use client";

import { useState } from "react";
import Button from "../common/Button";

const Header = () => {
  const [active, setActive] = useState(false);

  const logoFirstSign = "<";
  const logoSecSign = " />";

  //Navbar Links
  const links = [
    { num: "01. ", name: "About", href: "#home" },
    {
      num: "02. ",
      name: "Skills",
      href: "#skills",
    },
    {
      num: "03. ",
      name: "Projects",
      href: "#projects",
    },
    {
      num: "04. ",
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <div className="relative">
      <header className=" w-full h-20 px-7  fixed top-0 right-0 left-0  flex justify-between  items-center ">
        <a href="#home" className="flex justify-center items-center gap-2">
          <h4 className="text-2xl font-bold font-mono text-purpleA hover:scale-105 duration-500">
            {logoFirstSign}
            <span className="text-whiteA">Liaqat</span>
            <span className="text-blueA">.dev</span>
            {logoSecSign}
          </h4>
        </a>

        <ul className="flex justify-between items-center gap-7">
          {links.map((item, index) => {
            const { num, name, href } = item;
            return (
              <li key={index}>
                <a
                  href={href}
                  className="text-grayA hover:scale-150 duration-500"
                >
                  <span className="text-purpleA">{num}</span>
                  {name}
                </a>
              </li>
            );
          })}

          <a href="#contact">
            {" "}
            <Button className="cursor-pointer hover:scale-95 duration-500">
              Hire me
            </Button>
          </a>
        </ul>
      </header>
    </div>
  );
};

export default Header;
