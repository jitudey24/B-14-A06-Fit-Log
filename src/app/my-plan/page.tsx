"use client";

import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { LibraryContext } from "@/context/LibraryContext";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";

const MyPlan = () => {
  const router = useRouter();

  const { plan, setPlan, saved, setSaved } = useContext(LibraryContext);

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  // Completed workout IDs
  const [completedIds, setCompletedIds] = useState<number[]>([]);

  // Sort By
  // Default = Duration
  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );

  // Current tab data
  const currentList =
    activeTab === "plan" ? plan.filter(Boolean) : saved.filter(Boolean);

  // =========================
  // SORT CURRENT LIST
  // =========================
  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === "duration") {
      return Number(a.duration || 0) - Number(b.duration || 0);
    }

    if (sortBy === "calories") {
      return Number(a.caloriesBurned || 0) - Number(b.caloriesBurned || 0);
    }

    if (sortBy === "rating") {
      return Number(a.rating || 0) - Number(b.rating || 0);
    }

    return 0;
  });

  // =========================
  // STATS
  // Always based on TODAY'S PLAN
  // =========================

  const totalExercises = plan.length;

  const totalMinutes = plan.reduce(
    (total, workout) => total + Number(workout?.duration || 0),
    0,
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + Number(workout?.caloriesBurned || 0),
    0,
  );

  // VIEW DETAILS

  const handleViewDetails = (id: number) => {
    router.push(`/workouts/${id}`);
  };

  // MARK AS DONE / UNDONE

  const handleMarkAsDone = (id: number) => {
    setCompletedIds((prev) => {
      if (prev.includes(id)) {
        toast.info("Workout marked as undone");
        return prev.filter((item) => item !== id);
      }

      toast.success("Workout marked as done");
      return [...prev, id];
    });
  };

  // REMOVE FROM TODAY'S PLAN

  const handleRemoveFromPlan = (id: number) => {
    setPlan((prev) => prev.filter((workout) => workout.id !== id));

    // Remove completed status too
    setCompletedIds((prev) => prev.filter((item) => item !== id));

    toast.info("Workout removed from today's plan");
  };

  // REMOVE FROM SAVED

  const handleRemoveFromSaved = (id: number) => {
    setSaved((prev) => prev.filter((workout) => workout.id !== id));

    toast.info("Workout removed from saved");
  };

  return (
    <main className="container mx-auto max-w-6xl px-4 py-10">
      {/*  HEADER  */}

      <div>
        <h1 className="text-5xl font-black text-white">MY PLAN</h1>

        <p className="mt-3 text-zinc-500">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/*STATS */}

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-[#111518] p-6">
          <p className="text-sm font-bold uppercase text-zinc-500">Exercises</p>

          <h2 className="mt-3 text-4xl font-black text-[#C2F800]">
            {totalExercises}
          </h2>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#111518] p-6">
          <p className="text-sm font-bold uppercase text-zinc-500">Minutes</p>

          <h2 className="mt-3 text-4xl font-black text-[#C2F800]">
            {totalMinutes}
          </h2>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#111518] p-6">
          <p className="text-sm font-bold uppercase text-zinc-500">Calories</p>

          <h2 className="mt-3 text-4xl font-black text-[#C2F800]">
            {totalCalories}
          </h2>
        </div>
      </div>

      {/* TABS + SORT BY (same row) */}

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-3">
          <button
            onClick={() => setActiveTab("plan")}
            className={`rounded-lg px-6 py-3 text-sm font-bold transition ${
              activeTab === "plan"
                ? "bg-[#C2F800] text-black"
                : "bg-[#111518] text-zinc-400 hover:text-white"
            }`}
          >
            Today's Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`rounded-lg px-6 py-3 text-sm font-bold transition ${
              activeTab === "saved"
                ? "bg-[#C2F800] text-black"
                : "bg-[#111518] text-zinc-400 hover:text-white"
            }`}
          >
            Saved
          </button>
        </div>

        <div className="flex items-center gap-3">
          <label htmlFor="sortBy" className="text-sm font-bold text-zinc-400">
            Sort By
          </label>

          <select
            id="sortBy"
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value as "duration" | "calories" | "rating")
            }
            className="rounded-lg border border-white/10 bg-[#111518] px-4 py-2 text-sm font-bold text-white outline-none transition focus:border-[#C2F800]"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {/* WORKOUT SECTION */}

      <div className="mt-10">
        {/* EMPTY STATE */}

        {currentList.length === 0 ? (
          <div className="flex min-h-[240px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 px-6 py-12 text-center">
            <h3 className="text-xl font-black uppercase tracking-wide text-white">
              NOTHING HERE YET
            </h3>

            <p className="mt-2 max-w-md text-sm text-zinc-500">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/workouts"
              className="mt-5 rounded-full bg-[#C2F800] px-6 py-3 text-sm font-bold text-black shadow-lg transition hover:bg-[#d4ff38]"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {sortedList.map((workout) => {
              const isCompleted = completedIds.includes(workout.id);

              return (
                <div
                  key={workout.id}
                  className={`rounded-2xl border bg-[#111518] p-5 transition ${
                    isCompleted ? "border-[#C2F800]/40" : "border-white/10"
                  }`}
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
                    {/*  IMAGE */}

                    <Image
                      src={workout.image}
                      alt={workout.name}
                      width={100}
                      height={80}
                      className="h-32 w-full rounded-xl object-cover lg:h-24 lg:w-32"
                    />

                    {/* INFO  */}

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3
                          className={`text-xl font-bold ${
                            isCompleted
                              ? "text-zinc-500 line-through"
                              : "text-white"
                          }`}
                        >
                          {workout.name}
                        </h3>

                        {isCompleted && (
                          <span className="rounded-full bg-[#C2F800]/10 px-3 py-1 text-xs font-bold text-[#C2F800]">
                            Completed
                          </span>
                        )}
                      </div>

                      <p className="mt-2 text-sm text-zinc-500">
                        {workout.equipment}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-4 text-sm text-zinc-400">
                        <span>{workout.duration} min</span>

                        <span>{workout.caloriesBurned} kcal</span>

                        <span>{workout.sets} sets</span>

                        <span>{workout.reps} reps</span>

                        {workout.rating !== undefined && (
                          <span>⭐ {workout.rating}</span>
                        )}
                      </div>
                    </div>

                    {/*  ACTIONS  */}

                    <div className="flex flex-wrap gap-2">
                      {/* VIEW DETAILS */}

                      <Link
                        href={`/workouts/${workout.id}`}
                        className="rounded-lg border border-white/10 px-4 py-2 text-xs font-bold text-white transition hover:bg-white/10"
                      >
                        View Details
                      </Link>

                      {/*  TODAY'S PLAN */}

                      {activeTab === "plan" && (
                        <>
                          {/* MARK AS DONE */}

                          <button
                            type="button"
                            onClick={() => handleMarkAsDone(workout.id)}
                            className={`rounded-lg px-4 py-2 text-xs font-bold transition ${
                              isCompleted
                                ? "bg-zinc-700 text-zinc-300 hover:bg-zinc-600"
                                : "bg-[#C2F800] text-black hover:bg-[#d4ff38]"
                            }`}
                          >
                            {isCompleted ? "Mark as Undone" : "Mark as Done"}
                          </button>

                          {/* REMOVE */}

                          <button
                            type="button"
                            onClick={() => handleRemoveFromPlan(workout.id)}
                            className="rounded-lg bg-red-500/10 px-4 py-2 text-xs font-bold text-red-400 transition hover:bg-red-500 hover:text-white"
                          >
                            ❌
                          </button>
                        </>
                      )}

                      {/* SAVED */}

                      {activeTab === "saved" && (
                        <button
                          type="button"
                          onClick={() => handleRemoveFromSaved(workout.id)}
                          className="rounded-lg bg-red-500/10 px-4 py-2 text-xs font-bold text-red-400 transition hover:bg-red-500 hover:text-white"
                        >
                          ❌
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
};

export default MyPlan;
