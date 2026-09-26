"use client";

import Image from "next/image";
import React, { useContext } from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { LibraryContext } from "@/context/LibraryContext";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const links = (
    <>
      <li>
        <Link
          className={
            pathname === "/workouts" || pathname === "/" ? "text-[#C2F800]" : ""
          }
          href="/workouts"
        >
          Workouts
        </Link>
      </li>
      <li>
        <Link
          className={pathname === "/my-plan" ? "text-[#C2F800]" : ""}
          href="/my-plan"
        >
          My Plan
        </Link>
      </li>
    </>
  );
  const { plan, saved } = useContext(LibraryContext);

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full h-20 bg-black">
        <div className="navbar max-w-6xl mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  aria-label="Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>

              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>

            <Image src={logo} alt="logo icon" />

            <Link href="/">
              <span className="  text-3xl font-black text-white">
              FITLOG
            </span>
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex  ">
            <ul className="menu menu-horizontal px-1 text-[15px] font-bold text-gray-400">
              {links}
            </ul>
          </div>

          <div className="navbar-end gap-4">
            <Link
              href="/my-plan"
              className="flex items-center gap-2 text-white text-sm font-medium"
            >
              Plan
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#C2F800] text-black text-xs font-bold">
                {plan.length}
              </span>
            </Link>

            <Link
              href="/my-plan"
              className="flex items-center gap-2 text-white text-sm font-medium"
            >
              Saved
              <span className="flex items-center justify-center w-5 h-5 rounded-full border border-gray-500 text-white text-xs font-bold">
                {saved.length}
              </span>
            </Link>
          </div>
        </div>
      </nav>
      <div className="h-20" />
    </>
  );
};

export default Navbar;
