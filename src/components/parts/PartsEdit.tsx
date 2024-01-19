import { useState } from "react";
// import { useParams } from "react-router-dom";
import styled from "styled-components";

import { PartsItemData } from "@/misc/type";

const Title = styled.h2`
  background: ${(p) => p.theme.colors.key.dark};
  color: white;
  padding: 0.2rem 1rem 0;
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

export function PartsEdit() {
  // const { mode } = useParams<"mode">();
  // const { id } = useParams<"id">();
  // console.log("ID: ", mode, id);

  // デフォルト値として、指定されたIDを持つアクティビティのデータか初期値を設定
  // const parts = useDataStore((state) => state.partsById(id));
  const parts = undefined;
  const values: PartsItemData = parts ?? {
    id: "", // TODO: ユニークにする
    name: "",
    // date: "", // TODO: 今日
    description: "",
    kind: "",
    limit: 0,
    distance: 0,
  };

  // const [date, setDate] = useState(values.date);
  const [name, setName] = useState(values.name);
  const [distance, setDistance] = useState(String(values.distance));

  return (
    <>
      <Title>パーツ編集</Title>
      {/* <Label htmlFor="date">日付</Label>
      <InputText type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} /> */}
      <Label htmlFor="name">名前</Label>
      <InputText type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      <Label htmlFor="distance">距離</Label>
      <InputText type="number" name="distance" value={distance} onChange={(e) => setDistance(e.target.value)} />
      <Label htmlFor="description">詳細</Label>
      <TextArea name="description" rows={4} cols={30}></TextArea>
    </>
  );
}
