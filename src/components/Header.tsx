import React, { Component } from "react";
export const Header = () => {
  return (
    <header className="container p-0">
      <div className="row p-0 m-0">
        <div className="grid-7 ">
          <ul className="flex flex-space color-white text-xl font-bold">
            <li>
              <img src="" alt="" />
            </li>
            <li>
              <a
                className="cursor-pointer hover:text-black duration-500 ease-in-out"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:text-black duration-500 ease-in-out"
                href=""
              >
                About
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:text-black duration-500 ease-in-out"
                href=""
              >
                How to Help
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:text-black duration-500 ease-in-out"
                href=""
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
