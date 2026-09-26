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
      <nav className="fixed top-0 left-0 z-50 w-full h-16 sm:h-20 bg-black">
        <div className="relative navbar max-w-6xl mx-auto h-full px-3 sm:px-4">
          {/* LEFT: hamburger + desktop links */}
          <div className="navbar-start gap-1 sm:gap-2">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-sm sm:btn-md lg:hidden px-2"
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
                className="menu menu-sm dropdown-content bg-black border border-gray-800 rounded-box z-1 mt-3 w-52 p-2 shadow text-gray-300 font-bold"
              >
                {links}
              </ul>
            </div>

            <ul className="hidden lg:flex menu menu-horizontal px-1 text-[15px] font-bold text-gray-400">
              {links}
            </ul>
          </div>

          {/* CENTER: logo - সবসময় সত্যিকারের মাঝখানে থাকবে */}
          <Link
            href="/"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2"
          >
            <Image
              src={logo}
              alt="logo icon"
              width={28}
              height={28}
              className="w-6 h-6 sm:w-7 sm:h-7 shrink-0"
            />
            <span className="text-xl sm:text-2xl lg:text-3xl font-black text-white whitespace-nowrap">
              FITLOG
            </span>
          </Link>

          {/* RIGHT: Plan / Saved */}
          <div className="navbar-end gap-2 sm:gap-4">
            <Link
              href="/my-plan"
              className="flex items-center gap-1 sm:gap-2 text-white text-xs sm:text-sm font-medium"
            >
              <span className="hidden sm:inline">Plan</span>
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#C2F800] text-black text-xs font-bold">
                {plan.length}
              </span>
            </Link>

            <Link
              href="/my-plan"
              className="flex items-center gap-1 sm:gap-2 text-white text-xs sm:text-sm font-medium"
            >
              <span className="hidden sm:inline">Saved</span>
              <span className="flex items-center justify-center w-5 h-5 rounded-full border border-gray-500 text-white text-xs font-bold">
                {saved.length}
              </span>
            </Link>
          </div>
        </div>
      </nav>
      <div className="h-16 sm:h-20" />
    </>
  );
};

export default Navbar;
