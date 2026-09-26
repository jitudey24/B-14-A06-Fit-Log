"use client";

import { LibraryContext } from "@/context/LibraryContext";
import { ILibrary } from "@/types/library.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const AddPlanButton = ({ library }: { library: ILibrary }) => {
  const { plan, setPlan } = useContext(LibraryContext);

  const handleTodayPlan = () => {
    console.log("Today Plan button trigger", library);

    const alreadyAdded = plan.some(
      (item) => item.id === library.id
    );

    if (alreadyAdded) {
      toast.info("This workout is already in your plan!");
      return;
    }

    if (plan.length >= 5) {
      toast.info("You can add maximum 5 workouts to today's plan!");
      return;
    }

    setPlan([...plan, library]);

    toast.success("Added to today's plan!");
  };

  return (
    <button
      className="rounded-lg bg-[#C2F800] px-5 py-3 text-[10px] font-black uppercase tracking-wide text-black transition hover:bg-[#d4ff38]"
      onClick={handleTodayPlan}
    >
      Add to today's plan for my plan page
    </button>
  );
};

export default AddPlanButton;
