import { ActivitiesItem, ActivityId, DataFileType, DataType, PartsId } from "./type";

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
    // 使用したセットからパーツ一覧にして、重複を排除する
    const a: PartsId[] = [...act.parts]; // 使用パーツの一覧
    for (const s of act.sets) {
      const b = data.sets.find((v) => v.id === s);
      if (b != undefined) {
        a.push(...b.parts);
      }
    }
    const parts = Array.from(new Set(a));

    for (const actParts of parts) {
      for (const outParts of output.parts) {
        if (outParts.id === actParts) {
          outParts.distance += act.distance;
        }
      }
    }
  }

  return output;
}

/**
 * データから、指定されたIDを持つアクティビティを返す。
 * @param data 検索対象のデータ
 * @param id アクティビティのIDまたはundefined
 * @returns 当該アクティビティのデータ。見付からなかった場合はundefined
 */
export function activityById(data: DataType, id?: ActivityId): ActivitiesItem | undefined {
  if (id == undefined) {
    return undefined;
  }
  return data.activities.find((v) => v.id === id);
}

// -----------------------------------------------------------------------------------------

/** 試験用のダミーデータ用オブジェクト */
export const DUMMY_DATA: DataFileType = {
  activities: [
    {
      id: "r2",
      name: "2回目のライド",
      date: "2023-01-02",
      description: "ロングライドしてみた感じ",
      distance: 321,
      parts: ["p1", "p2"],
      sets: [],
    },
    {
      id: "r1",
      name: "最初のライド",
      date: "2023-02-03",
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
      startDate: "2023-04-05",
    },
    {
      id: "p3",
      name: "Continental GP5000S TR",
      description:
        "3,000km時点で後ろから前へ組み換え。ああああああああああああああああああああああああああああああああああああああああああ",
      kind: "前タイヤ",
      limit: 5000,
    },
    {
      id: "p5",
      name: "古いタイヤ（無効）",
      description: "",
      kind: "後タイヤ",
      invalid: true,
    },
  ],
  sets: [],
};
