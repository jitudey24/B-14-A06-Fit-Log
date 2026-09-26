
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
            pathname === "/workouts" || pathname === "/"
              ? "text-[#C2F800]"
              : ""
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
        <div className="relative max-w-6xl mx-auto h-full px-3 sm:px-4">

          {/* ================= MOBILE NAVBAR ================= */}
          <div className="lg:hidden h-full flex items-center justify-between">

            {/* LEFT - HAMBURGER */}
            <div className="dropdown shrink-0">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-sm px-1"
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

              {/* MOBILE MENU */}
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-black border border-gray-800 rounded-box z-50 mt-3 w-52 p-2 shadow text-gray-300 font-bold"
              >
                {links}
              </ul>
            </div>

            {/* CENTER - LOGO */}
            <Link
              href="/"
              className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2"
            >
              <Image
                src={logo}
                alt="FITLOG logo"
                width={28}
                height={28}
                className="w-6 h-6 sm:w-7 sm:h-7"
              />

              <span className="text-xl sm:text-2xl font-black text-white">
                FITLOG
              </span>
            </Link>

            {/* RIGHT - PLAN + SAVED */}
            <div className="ml-auto flex items-center gap-2 sm:gap-3 shrink-0">

              {/* PLAN */}
              <Link
                href="/my-plan"
                className="flex items-center gap-1 text-white text-[11px] sm:text-sm font-medium"
              >
                <span>Plan</span>

                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#C2F800] text-black text-[10px] sm:text-xs font-bold">
                  {plan.length}
                </span>
              </Link>

              {/* SAVED */}
              <Link
                href="/my-plan"
                className="flex items-center gap-1 text-white text-[11px] sm:text-sm font-medium"
              >
                <span>Saved</span>

                <span className="flex items-center justify-center w-5 h-5 rounded-full border border-gray-500 text-white text-[10px] sm:text-xs font-bold">
                  {saved.length}
                </span>
              </Link>
            </div>
          </div>

          {/* ================= DESKTOP NAVBAR ================= */}
          <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center h-full gap-2">

            {/* LEFT - LOGO */}
            <div className="flex items-center">
              <Link
                href="/"
                className="flex items-center gap-2 shrink-0"
              >
                <Image
                  src={logo}
                  alt="FITLOG logo"
                  width={28}
                  height={28}
                  className="w-7 h-7"
                />

                <span className="text-3xl font-black text-white">
                  FITLOG
                </span>
              </Link>
            </div>

            {/* CENTER - NAV LINKS */}
            <ul className="menu menu-horizontal px-1 text-[15px] font-bold text-gray-400 justify-self-center whitespace-nowrap">
              {links}
            </ul>

            {/* RIGHT - PLAN + SAVED */}
            <div className="flex items-center justify-end gap-4">

              {/* PLAN */}
              <Link
                href="/my-plan"
                className="flex items-center gap-2 text-white text-sm font-medium"
              >
                <span>Plan</span>

                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#C2F800] text-black text-xs font-bold">
                  {plan.length}
                </span>
              </Link>

              {/* SAVED */}
              <Link
                href="/my-plan"
                className="flex items-center gap-2 text-white text-sm font-medium"
              >
                <span>Saved</span>

                <span className="flex items-center justify-center w-5 h-5 rounded-full border border-gray-500 text-white text-xs font-bold">
                  {saved.length}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Fixed navbar এর জন্য নিচে space */}
      <div className="h-16 sm:h-20" />
    </>
  );
};

export default Navbar;
