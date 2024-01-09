import { DataFileType, DataType } from "./type";

/**
 * アクティビティごとの使用パーツのデータを元に、各パーツの走行距離を計算する。
 * @param data ファイルとして保存されているようなデータ
 * @returns 走行距離を適用した結果のデータ
 */
export function calculateData(data: DataFileType): DataType {
  const output: DataType = {
    activities: data.activities,
    parts: [],
    sets: data.sets,
  };

  // データに不足している、各パーツの走行距離を付加する。
  for (const p of data.parts) {
    output.parts.push({ distance: 0, ...p });
  }

  // 各アクティビティから、使用したパーツに対して距離を加算する。
  for (const act of data.activities) {
    for (const actParts of act.parts) {
      for (const outParts of output.parts) {
        if (outParts.id === actParts) {
          outParts.distance += act.distance;
        }
      }
    }
  }

  return output;
}

/** 試験用のダミーデータ用オブジェクト */
export const DUMMY_DATA: DataFileType = {
  activities: [
    {
      id: "r2",
      name: "2回目のライド",
      date: new Date(2023, 1, 2),
      description: "ロングライドしてみた感じ",
      distance: 321,
      parts: ["p1", "p2"],
      sets: [],
    },
    {
      id: "r1",
      name: "最初のライド",
      date: new Date(2023, 0, 1),
      description: "",
      distance: 100,
      parts: ["p1", "p3"],
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
