import { DUMMY_DATA } from "@/misc/data";
import { PartsItemView } from "./PartsItemView";
import { PartsItem, PartsItemData } from "@/misc/type";
import { PartsList } from "./PartsList";
import styled from "styled-components";

const data = DUMMY_DATA.parts; // 表示テスト用ダミーデータ

// 表示テスト用にデータを変換する
function dataFromItem(item: PartsItem): PartsItemData {
  return { distance: 0, sets: [], ...item };
}

const Title = styled.h2`
  background: ${(p) => p.theme.colors.key.dark};
  color: white;
  padding: 0 1rem;
  margin-bottom: 1rem;
`;

export function Parts() {
  // let { id } = useParams<"id">();

  return (
    <>
      <Title>Parts</Title>
      <PartsList />
      あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />
      あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />
      あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />
      あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />
      あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />
      あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />
    </>
  );
}
