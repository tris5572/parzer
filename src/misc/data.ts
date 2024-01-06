import { ItemSet, LogItem, PartsItem } from "./type";

/** データファイルの型 */
export type DataType = {
  log: LogItem[];
  parts: PartsItem[];
  sets: ItemSet[];
};

/** 試験用のダミーデータ用オブジェクト */
export const DUMMY_DATA: DataType = {
  log: [
    {
      id: "r1",
      name: "最初のライド",
      date: new Date(2023, 1, 2),
      description: "",
      distance: 100,
      parts: ["p1", "p3"],
      sets: [],
    },
    {
      id: "r2",
      name: "2回目のライド",
      date: new Date(2023, 3, 4),
      description: "ロングライドしてみた感じ",
      distance: 321,
      parts: ["p1", "p2"],
      sets: [],
    },
  ],
  parts: [
    {
      id: "p1",
      name: "TEST Dummy F001",
      description: "テスト用フレーム",
      kind: "frame",
      limit: undefined,
    },
    {
      id: "p2",
      name: "Ultegraホイール 36mm",
      description: "",
      kind: "ホイール",
    },
    {
      id: "p3",
      name: "Continental GP5000S TR",
      description:
        "3,000km時点で後ろから前へ組み換え。ああああああああああああああああああああああああああああああああああああああああああ",
      kind: "前タイヤ",
      limit: 5000,
    },
  ],
  sets: [],
};
