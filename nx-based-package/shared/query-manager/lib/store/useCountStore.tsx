import { create } from "zustand";
import { storage } from "../helpers/localStorage";

export interface ICountStore {
  count: number;
  setCount: (value: number) => void;
}

export const useCountStore = create<ICountStore>((set) => {
  const count = storage.get("count") || 0;
  return {
    count: Number(count) || 0,
    setCount: (value) => {
      storage.set("count", value);
      set({ count: value });
    },
  };
});
