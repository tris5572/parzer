import { create } from "zustand";
import { DUMMY_DATA, calculateData } from "./data";
import { DataFileType, DataType } from "./type";

export type DataStore = DataType & {
  source: DataFileType;
  /** ソースデータを変更する。 */
  changeSource: (source: DataFileType) => void;
  addPartsItem: () => void;
};

export const useDataStore = create<DataStore>((set) => ({
  source: DUMMY_DATA,
  ...calculateData(DUMMY_DATA),
  changeSource: (source: DataFileType) => {
    set(() => ({
      source,
      ...calculateData(source),
    }));
  },
  addPartsItem: () => {},
}));
