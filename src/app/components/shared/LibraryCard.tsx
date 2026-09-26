import { ILibrary } from "@/types/library.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ILibraryCardPropd{
    library: ILibrary
}

const LibraryCard = ({ library }: ILibraryCardPropd) => {
  return (
    <Link href={`/workouts/${library.id}`}>
        <article className="group overflow-hidden rounded-2xl border border-[#292c34] bg-[#17191f] transition-all duration-300 hover:-translate-y-1 hover:border-[#C2F800]/40 hover:shadow-[0_15px_35px_rgba(0,0,0,0.35)]">

      {/*  IMAGE  */}
      <div className="relative h-[205px] overflow-hidden">
        <Image
          src={library.image}
          alt={library.name}
          width={500}
          height={350}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* CONTENT  */}
      <div className="px-5 pb-5 pt-5">

        {/* Muscle Groups */}
        <div className="mb-4 flex flex-wrap gap-2">
          {library.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="
                rounded-full
                bg-[#C2F800]
                px-3
                py-1
                text-[10px]
                font-black
                uppercase
                tracking-wide
                text-black
              "
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Workout Name */}
        <h3 className="text-lg font-black uppercase tracking-wide text-white">
          {library.name}
        </h3>

        {/* Equipment */}
        <p className="mt-1 text-xs text-gray-500">
          {library.equipment}
        </p>

        {/* Divider */}
        <div className="my-4 h-px bg-[#292c34]" />

        {/*  STATS */}
        <div className="flex items-center gap-5 text-xs text-gray-400">

          {/* Duration */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">
              ◷
            </span>

            <span>
              {library.duration} min
            </span>
          </div>

          {/* Calories */}
          <div className="flex items-center gap-2">
            <span className="text-sm">
              ♥
            </span>

            <span>
              {library.caloriesBurned} kcal
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <span className="text-[#9aa0aa]">
              ☆
            </span>

            <span>
              {library.rating}
            </span>
          </div>

        </div>

      </div>
    </article>
    </Link>
  );
};

export default LibraryCard;
