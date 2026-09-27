"use client";

import React, {
  createContext,
  ReactNode,
  useEffect,
  useState,
} from "react";

import { ILibrary } from "@/types/library.type";

interface LibraryContextType {
  plan: ILibrary[];
  setPlan: React.Dispatch<React.SetStateAction<ILibrary[]>>;

  saved: ILibrary[];
  setSaved: React.Dispatch<React.SetStateAction<ILibrary[]>>;

  completedIds: number[];
  setCompletedIds: React.Dispatch<React.SetStateAction<number[]>>;
}

export const LibraryContext = createContext<LibraryContextType>({
  plan: [],
  setPlan: () => {},

  saved: [],
  setSaved: () => {},

  completedIds: [],
  setCompletedIds: () => {},
});

// localStorage থেকে সেফলি ডেটা পড়ার হেল্পার ফাংশন
const getStoredValue = <T,>(key: string, fallback: T): T => {
  if (typeof window === "undefined") {
    return fallback;
  }

  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch (error) {
    console.error(`Failed to load ${key} from localStorage`, error);
    return fallback;
  }
};

const LibraryProvider = ({
  children,
}: {
  children: ReactNode;
}) => {

  
  const [plan, setPlan] = useState<ILibrary[]>(() =>
    getStoredValue("fitlog_plan", []),
  );

  const [saved, setSaved] = useState<ILibrary[]>(() =>
    getStoredValue("fitlog_saved", []),
  );

  const [completedIds, setCompletedIds] = useState<number[]>(() =>
    getStoredValue("fitlog_completed", []),
  );

  // plan পরিবর্তন হলে localStorage-এ সেভ
  useEffect(() => {
    localStorage.setItem("fitlog_plan", JSON.stringify(plan));
  }, [plan]);

  // saved পরিবর্তন হলে localStorage-এ সেভ
  useEffect(() => {
    localStorage.setItem("fitlog_saved", JSON.stringify(saved));
  }, [saved]);

  // completedIds পরিবর্তন হলে localStorage-এ সেভ
  useEffect(() => {
    localStorage.setItem(
      "fitlog_completed",
      JSON.stringify(completedIds)
    );
  }, [completedIds]);

  const sharedData = {
    plan,
    setPlan,
    saved,
    setSaved,
    completedIds,
    setCompletedIds,
  };

  return (
    <LibraryContext.Provider value={sharedData}>
      {children}
    </LibraryContext.Provider>
  );
};

export default LibraryProvider;
