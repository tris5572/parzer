import { calculateData } from "./data";
import { ActivitiesItem, DataFileType, ItemSet, PartsItem } from "./type";

describe("calculateData()", () => {
  it("パーツのみで計算", () => {
    const activities: ActivitiesItem[] = [
      {
        id: "",
        name: "",
        date: new Date(2023, 1, 1),
        description: "",
        distance: 123,
        parts: ["p1", "p2"],
        sets: [],
      },
      {
        id: "",
        name: "",
        date: new Date(2023, 2, 2),
        description: "",
        distance: 77,
        parts: ["p1", "p3"],
        sets: [],
      },
    ];
    const parts: PartsItem[] = [
      {
        id: "p1",
        name: "P1",
        description: "",
        kind: "",
        limit: undefined,
      },
      {
        id: "p2",
        name: "P2",
        description: "",
        kind: "",
        limit: 2222,
      },
      {
        id: "p3",
        name: "P3",
        description: "",
        kind: "",
        limit: 5000,
      },
      {
        id: "p4",
        name: "P4",
        description: "",
        kind: "",
      },
    ];
    const sets: ItemSet[] = [];
    const source: DataFileType = { activities, parts, sets };
    const result = calculateData(source);
    expect(result.parts.find((v) => v.id === "p1")?.distance).toBe(200);
    expect(result.parts.find((v) => v.id === "p2")?.distance).toBe(123);
    expect(result.parts.find((v) => v.id === "p3")?.distance).toBe(77);
    expect(result.parts.find((v) => v.id === "p4")?.distance).toBe(0);
    expect(result.parts.find((v) => v.id === "p0")).toBeUndefined();
  });
});
