import Image from "next/image";
import React from "react";
import banner from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-6">
      <div
        className="
          relative overflow-hidden
          min-h-105
          rounded-2xl
          
          bg-[#15171D]
          px-6 py-10
          md:px-10 md:py-12
          lg:px-14
        "
      >
        {/* Decorative glow */}
        <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#C2F800]/10 blur-3xl" />
        <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-[#08A8FF]/10 blur-3xl" />

        <div className="relative z-10 grid min-h-90 items-center gap-10 md:grid-cols-2">

          {/* ================= LEFT CONTENT ================= */}
          <div className="max-w-xl">
            {/* Small Label */}
            <div className="mb-5 inline-flex items-center ">
           <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C2F800]">
                Workout Library
              </p>
            </div>

            {/* Heading */}
            <h1
              className="
                text-3xl font-black uppercase leading-[0.95]
                tracking-tight text-white
                sm:text-4xl
                lg:text-5xl
              "
            >
              Train With Intent.Log
              <br />
             Every Set.
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-lg text-sm leading-6 text-gray-400 md:text-base">
              FitLog is a dark, no-nonsense gym companion: pick a lift,
              lock it into today's plan, and watch the week's work add up.
            </p>

            {/* Button */}
            <button
              className="
                mt-7
                rounded-md
                bg-[#C2F800]
                px-6 py-3
                text-xs font-black uppercase
                tracking-wide
                text-black
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-[#d5ff32]
                hover:shadow-[0_8px_25px_rgba(194,248,0,0.25)]
              "
            >
              Browse Workouts
            </button>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative flex h-75 items-center justify-center md:h-full">

            {/* Image glow */}
            <div className="absolute h-56 w-56 rounded-full bg-[#C2F800]/10 blur-3xl" />

            <Image
              src={banner}
              alt="Workout illustration"
              width={500}
              height={500}
              priority
              className="
                relative z-10
                h-auto
                w-65
                object-contain
                drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)]
                transition-transform
                duration-500
                hover:scale-105
                sm:w-75
                md:w-85
                lg:w-97.5
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
