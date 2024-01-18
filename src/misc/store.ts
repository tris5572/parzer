import { create } from "zustand";
import { DUMMY_DATA, activityById, calculateData } from "./data";
import { ActivitiesItem, ActivityId, DataFileType, DataType } from "./type";

export type DataStore = DataType & {
  source: DataFileType;
  /** ソースデータを変更する。 */
  changeSource: (source: DataFileType) => void;
  /**
   * 指定されたIDを持つアクティビティを返す。
   * @param id アクティビティのIDまたはundefined
   * @returns 当該アクティビティのデータ。見付からなかった場合はundefined。
   */
  activityById: (id?: ActivityId) => ActivitiesItem | undefined;
  addPartsItem: () => void;
};

export const useDataStore = create<DataStore>((set, get) => ({
  source: DUMMY_DATA,
  ...calculateData(DUMMY_DATA),

  changeSource: (source: DataFileType) => {
    set(() => ({
      source,
      ...calculateData(source),
    }));
  },

  activityById(id) {
    return activityById(get(), id);
  },

  addPartsItem: () => {},
}));
