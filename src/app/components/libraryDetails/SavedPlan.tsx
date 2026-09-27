"use client";

import React, { useContext } from "react";
import { toast } from "react-toastify";
import { LibraryContext } from "@/context/LibraryContext";
import { ILibrary } from "@/types/library.type";

interface SaveButtonProps {
  library: ILibrary;
}

const SaveButton = ({ library }: SaveButtonProps) => {
  const { saved, setSaved } = useContext(LibraryContext);

 
  const isSaved = saved.some(
    (item) => item?.id === library.id
  );

  const handleSave = () => {
    if (!library) {
      toast.error("Workout data not found!");
      return;
    }

    if (isSaved) {
      toast.info("This workout is already saved!");
      return;
    }

    if (saved.length >= 5) {
      toast.info("You can save maximum 5 workouts!");
      return;
    }

    setSaved((prev) => [...prev, library]);

    toast.success("Saved for later!");
  };

  return (
    <button
      onClick={handleSave}
      className={`rounded-lg border px-5 py-3 text-[10px] font-black uppercase tracking-wide transition ${
        isSaved
          ? "cursor-default border-[#C2F800]/40 bg-[#C2F800]/10 text-[#C2F800]"
          : "border-white/10 bg-[#1c222b] text-white hover:bg-[#252c38]"
      }`}
    >
      {isSaved ? "✓ Saved" : "Save for later"}
    </button>
  );
};

export default SaveButton;
