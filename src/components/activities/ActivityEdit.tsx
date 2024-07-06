import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { useDataStore } from "@/misc/store";
import { ActivitiesItem } from "@/misc/type";

const Title = styled.h2`
  background: ${(p) => p.theme.colors.key.dark};
  color: white;
  padding: 0 1rem;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-weight: bold;
  font-size: small;
  display: block;
  margin-top: 8px;
`;

const InputText = styled.input`
  border-radius: 4px;
  padding: 2px;
`;

const TextArea = styled.textarea``;

export function ActivityEdit() {
  // const { mode } = useParams<"mode">();
  const { id } = useParams<"id">();
  // console.log("ID: ", mode, id);

  // デフォルト値として、指定されたIDを持つアクティビティのデータか初期値を設定
  const activity = useDataStore((state) => state.activityById(id));
  const values: ActivitiesItem = activity ?? {
    id: "", // TODO: ユニークにする
    name: "",
    date: "2020-01-01", // TODO: 今日
    description: "",
    distance: 0,
    parts: [],
    sets: [],
  };

  const [date, setDate] = useState(values.date);
  const [name, setName] = useState(values.name);
  const [distance, setDistance] = useState(String(values.distance));

  return (
    <>
      <Title>Edit Activity</Title>
      <Label htmlFor="date">日付</Label>
      <InputText type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <Label htmlFor="name">名前</Label>
      <InputText type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      <Label htmlFor="distance">距離</Label>
      <InputText type="number" name="distance" value={distance} onChange={(e) => setDistance(e.target.value)} />
      <Label htmlFor="">使用セット</Label>
      未実装
      <Label htmlFor="">使用個別パーツ</Label>
      未実装
      <Label htmlFor="description">詳細</Label>
      <TextArea name="description" rows={4} cols={30}></TextArea>
    </>
  );
}
