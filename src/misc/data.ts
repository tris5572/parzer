import { ItemSet, PartsItem } from "./type";

/** データファイルの型 */
export type DataType = {
  log: string[];
  parts: PartsItem[];
  sets: ItemSet[];
};

/** 試験用のダミーデータ用オブジェクト */
export const DUMMY_DATA: DataType = {
  log: [],
  parts: [
    {
      id: "aaaaaaaaa",
      name: "TEST Dummy F001",
      description: "テスト用フレーム",
      kind: "frame",
      limit: undefined,
    },
    {
      id: "bbbbbbbbb",
      name: "Ultegraホイール 36mm",
      description: "",
      kind: "ホイール",
    },
    {
      id: "ccccccccc",
      name: "Continental GP5000S TR",
      description:
        "3,000km時点で後ろから前へ組み換え。ああああああああああああああああああああああああああああああああああああああああああ",
      kind: "前タイヤ",
      limit: 5000,
    },
  ],
  sets: [],
};
