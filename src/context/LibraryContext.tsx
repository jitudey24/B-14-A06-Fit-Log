"use client";

import React, {
  createContext,
  ReactNode,
  useState,
} from "react";

import { ILibrary } from "@/types/library.type";

interface LibraryContextType {
  plan: ILibrary[];
  setPlan: React.Dispatch<React.SetStateAction<ILibrary[]>>;

  saved: ILibrary[];
  setSaved: React.Dispatch<React.SetStateAction<ILibrary[]>>;
}

export const LibraryContext = createContext<LibraryContextType>({
  plan: [],
  setPlan: () => {},

  saved: [],
  setSaved: () => {},
});

const LibraryProvider = ({
  children,
}: {
  children: ReactNode;
}) => {

  const [plan, setPlan] = useState<ILibrary[]>([]);
  const [saved, setSaved] = useState<ILibrary[]>([]);

  const sharedData = {
    plan,
    setPlan,
    saved,
    setSaved,
  };

  return (
    <LibraryContext.Provider value={sharedData}>
      {children}
    </LibraryContext.Provider>
  );
};

export default LibraryProvider;
