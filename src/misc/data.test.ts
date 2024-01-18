import { activityById, calculateData } from "./data";
import { ActivitiesItem, DataFileType, DataType, ItemSet, PartsItem, PartsItemData } from "./type";

describe("calculateData()", () => {
  it("パーツのみで計算", () => {
    const activities: ActivitiesItem[] = [
      {
        id: "",
        name: "",
        date: "2023-01-02",
        description: "",
        distance: 123,
        parts: ["p1", "p2"],
        sets: [],
      },
      {
        id: "",
        name: "",
        date: "2023-03-04",
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

  it("セットとパーツから計算", () => {
    const activities: ActivitiesItem[] = [
      {
        id: "",
        name: "",
        date: "2023-01-02",
        description: "",
        distance: 123,
        parts: ["p1", "p2"],
        sets: ["s1"],
      },
      {
        id: "",
        name: "",
        date: "2023-03-04",
        description: "",
        distance: 77,
        parts: [],
        sets: ["s2", "s9"],
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
    const sets: ItemSet[] = [
      { id: "s1", name: "S1", parts: ["p1", "p2"] },
      { id: "s2", name: "S2", parts: ["p1", "p3", "p9"] },
    ];
    const source: DataFileType = { activities, parts, sets };
    const result = calculateData(source);
    expect(result.parts.find((v) => v.id === "p1")?.distance).toBe(200);
    expect(result.parts.find((v) => v.id === "p2")?.distance).toBe(123);
    expect(result.parts.find((v) => v.id === "p3")?.distance).toBe(77);
    expect(result.parts.find((v) => v.id === "p4")?.distance).toBe(0);
    expect(result.parts.find((v) => v.id === "p0")).toBeUndefined();
  });
});

describe("activityById()", () => {
  it("アクティビティのID検索", () => {
    const activities: ActivitiesItem[] = [
      {
        id: "a",
        name: "ActivityA",
        date: "2023-01-02",
        description: "",
        distance: 123,
        parts: ["p1", "p2"],
        sets: ["s1"],
      },
      {
        id: "b",
        name: "ActivityB",
        date: "2023-03-04",
        description: "",
        distance: 77,
        parts: [],
        sets: ["s2", "s9"],
      },
    ];
    const parts: PartsItemData[] = [
      {
        id: "a",
        name: "PartsA",
        description: "",
        kind: "",
        distance: 1000,
        limit: undefined,
      },
    ];
    const sets: ItemSet[] = [{ id: "a", name: "S1", parts: ["p1", "p2"] }];
    const source: DataType = { activities, parts, sets };
    expect(activityById(source, "a")?.name).toBe("ActivityA");
    expect(activityById(source, "b")?.name).toBe("ActivityB");
    expect(activityById(source, "z")).toBeUndefined();
  });
});
