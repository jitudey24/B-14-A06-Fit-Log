import { ILibrary } from "@/types/library.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ILibraryCardPropd {
  library: ILibrary;
}

const LibraryCard = ({ library }: ILibraryCardPropd) => {
  return (
    <Link href={`/workouts/${library.id}`}>
      <article className="group h-full overflow-hidden rounded-2xl border border-[#292c34] bg-[#17191f] transition-all duration-300 hover:-translate-y-1 hover:border-[#C2F800]/40 hover:shadow-[0_15px_35px_rgba(0,0,0,0.35)]">
        {/* IMAGE */}
        <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
          <Image
            src={library.image}
            alt={library.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* CONTENT */}
        <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-4 sm:pt-5">
          {/* Muscle Groups */}
          <div className="mb-3 sm:mb-4 flex flex-wrap gap-2">
            {library.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#C2F800] px-3 py-1 text-[10px] font-black uppercase tracking-wide text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Workout Name */}
          <h3 className="text-base sm:text-lg font-black uppercase tracking-wide text-white">
            {library.name}
          </h3>

          {/* Equipment */}
          <p className="mt-1 text-xs text-gray-500">{library.equipment}</p>

          {/* Divider */}
          <div className="my-3 sm:my-4 h-px bg-[#292c34]" />

          {/* STATS */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-5 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">◷</span>
              <span>{library.duration} min</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm">♥</span>
              <span>{library.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[#9aa0aa]">☆</span>
              <span>{library.rating}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default LibraryCard;
