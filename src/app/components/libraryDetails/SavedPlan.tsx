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

  const handleSave = () => {
    if (!library) {
      toast.error("Workout data not found!");
      return;
    }

    const alreadySaved = saved.some(
      (item) => item?.id === library.id
    );

    if (alreadySaved) {
      toast.info("This workout is already saved!");
      return;
    }

    setSaved((prev) => [...prev, library]);

    toast.success("Save for later!");
  };

  return (
    <button
      onClick={handleSave}
      className="rounded-lg border border-white/10 bg-[#1c222b] px-5 py-3 text-[10px] font-black uppercase tracking-wide text-white transition hover:bg-[#252c38]"
    >
      Save for later
    </button>
  );
};

export default SaveButton;
