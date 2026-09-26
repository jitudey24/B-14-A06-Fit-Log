import Image from "next/image";
import React from "react";
import { ILibrary } from "@/types/library.type";
import AddPlanButton from "../libraryDetails/AddPlanButton";
import SavedPlan from "../libraryDetails/SavedPlan";

interface LibraryDetailsCardProps {
  library: ILibrary;
}


const LibraryDetailsCard = ({
  library,
}: LibraryDetailsCardProps) => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 bg-black">

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

        {/* ================= LEFT IMAGE ================= */}
        <div className="overflow-hidden rounded-xl">
          <Image
            src={library.image}
            alt={library.name}
            width={700}
            height={700}
            priority
            className="h-full min-h-[450px] w-full object-cover"
          />
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="flex flex-col">

          {/* Title */}
          <h1 className="text-3xl font-black uppercase tracking-tight text-white">
            {library.name}
          </h1>

          {/* Description */}
          <p className="mt-2 max-w-xl text-sm leading-5 text-gray-400">
            {library.description}
          </p>

          {/* Muscle Groups */}
          <div className="mt-3 flex gap-2">
            {library.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#C2F800] px-3 py-1 text-[10px] font-bold uppercase text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* ================= DETAILS BOX ================= */}
          <div className="mt-5 overflow-hidden rounded-xl border border-[#292c34] bg-[#17191f]">

            {/* Equipment */}
            <div className="flex items-center justify-between border-b border-[#292c34] px-4 py-3">
              <span className="text-[9px] font-bold uppercase tracking-wider text-gray-500">
                Equipment
              </span>

              <span className="text-xs text-gray-300">
                {library.equipment}
              </span>
            </div>

            {/* Difficulty */}
            <div className="flex items-center justify-between border-b border-[#292c34] px-4 py-3">
              <span className="text-[9px] font-bold uppercase tracking-wider text-gray-500">
                Difficulty
              </span>

              <span className="text-xs text-gray-300">
                {library.difficulty}
              </span>
            </div>

            {/* Sets */}
            <div className="flex items-center justify-between border-b border-[#292c34] px-4 py-3">
              <span className="text-[9px] font-bold uppercase tracking-wider text-gray-500">
                Sets
              </span>

              <span className="text-xs text-gray-300">
                {library.sets}
              </span>
            </div>

            {/* Reps */}
            <div className="flex items-center justify-between border-b border-[#292c34] px-4 py-3">
              <span className="text-[9px] font-bold uppercase tracking-wider text-gray-500">
                Reps
              </span>

              <span className="text-xs text-gray-300">
                {library.reps}
              </span>
            </div>

            {/* Duration */}
            <div className="flex items-center justify-between border-b border-[#292c34] px-4 py-3">
              <span className="text-[9px] font-bold uppercase tracking-wider text-gray-500">
                Duration
              </span>

              <span className="text-xs text-gray-300">
                {library.duration} min
              </span>
            </div>

            {/* Calories */}
            <div className="flex items-center justify-between border-b border-[#292c34] px-4 py-3">
              <span className="text-[9px] font-bold uppercase tracking-wider text-gray-500">
                Calories
              </span>

              <span className="text-xs text-gray-300">
                {library.caloriesBurned} kcal
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-[9px] font-bold uppercase tracking-wider text-gray-500">
                Rating
              </span>

              <span className="text-xs text-gray-300">
                {library.rating}
              </span>
            </div>

          </div>

          {/* ================= INSTRUCTIONS ================= */}
          <div className="mt-5">

            <h2 className="text-xs font-black uppercase tracking-wider text-white">
              Instructions
            </h2>

            <ol className="mt-3 space-y-3">
              {library.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-[11px] leading-4 text-gray-400"
                >
                  <span className="shrink-0 text-gray-500">
                    {index + 1}.
                  </span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>

          </div>

          {/* ================= BUTTONS ================= */}
          <div className="mt-6 flex flex-wrap gap-3">

           <AddPlanButton library={library}></AddPlanButton>

           <SavedPlan library={library}></SavedPlan>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LibraryDetailsCard;
