import { create } from "zustand";
import { DUMMY_DATA, calculateData } from "./data";
import { DataType } from "./type";

export type DataStore = DataType & {
  addPartsItem: () => void;
};

export const useDataStore = create<DataStore>((_set) => ({
  ...calculateData(DUMMY_DATA),
  addPartsItem: () => {},
}));
