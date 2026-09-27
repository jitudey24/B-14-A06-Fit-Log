"use client";

import Link from "next/link";
import React from "react";

const NotFound = () => {
return ( <main className="min-h-screen bg-[#0b0f10] px-4 py-16 text-white"> <div className="mx-auto flex min-h-[70vh] max-w-4xl items-center justify-center"> <div className="w-full rounded-3xl border border-white/10 bg-[#111518] px-6 py-12 text-center shadow-2xl sm:px-10 md:px-16">

      {/* 404 */}
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C2F800]">
        FITLOG
      </p>

      <h1 className="mt-4 text-8xl font-black tracking-tight text-[#C2F800] sm:text-9xl">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-black uppercase sm:text-3xl">
        Page Not Found
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-zinc-500 sm:text-base">
        Looks like this workout route does not exist. Head back to the
        workout library and keep training with intent.
      </p>

      {/* Buttons */}
      <div className="mt-8  sm:flex-row">
        <Link
          href="/"
          className="rounded-xl bg-[#C2F800] px-6 py-3 text-sm font-black uppercase text-black transition hover:bg-[#d4ff38]"
        >
          Go to Home
        </Link>
      </div>

      {/* Bottom text */}
      <div className="mt-10 border-t border-white/10 pt-6">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-600">
          Train hard. Log honest.
        </p>
      </div>
    </div>
  </div>
</main>


);
};

export default NotFound;
