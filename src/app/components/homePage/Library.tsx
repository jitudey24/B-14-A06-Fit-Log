import React from "react";
import LibraryCard from "../shared/LibraryCard";
import { ILibrary } from "@/types/library.type";


const getLibrary = async () => {
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog");

  if (!res.ok) {
    throw new Error("Failed to fetch library");
  }

  const data = await res.json();

  return data;
};

const Library = async () => {
  const librarys = await getLibrary();

  return (
      <section
    className="mx-auto my-17.5 max-w-6xl  px-4 bg-black">


      {/* HEADER  */}
      <div className="mb-8">
        <h2 className="text-4xl font-black uppercase tracking-tight text-white">
          The Library
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* CARDS  */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {librarys.map((library : ILibrary) => (
          <LibraryCard
            key={library.id}
            library={library}
          />
        ))}
      </div>

    </section>
  );
};

export default Library;
