
"use client";

import Image from "next/image";
import React, { useContext } from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { LibraryContext } from "@/context/LibraryContext";
import { usePathname } from "next/navigation";



const Navbar = () => {
    const pathname = usePathname()

  const links = (
  <>
    <li>
      <Link
      className={pathname === '/workouts' ? "text-[#C2F800]" : ""}
       href="/workouts">Workouts</Link>
    </li>
    <li>
      <Link
       className={pathname === '/my-plan' ? "text-[#C2F800]" : ""}
       href="/my-plan">My Plan</Link>
    </li>
  </>
);
  const { plan, saved } = useContext(LibraryContext);

  return (
    <nav className="bg-black shadow-sm ">
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
                stroke="currentColor"
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

          <a className="btn btn-ghost text-xl text-white">FITLOG</a>
        </div>

        <div className="navbar-center hidden lg:flex  ">
          <ul className="menu menu-horizontal px-1 text-[15px] font-bold text-gray-400">
            {links}
          </ul>
        </div>

        <div className="navbar-end gap-2">
          <Link href="/my-plan" className=" bg-black text-white ">
            Plan ({plan.length})
          </Link>

          <Link href="/my-plan" className="bg-black text-white">
            Saved ({saved.length})
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

