import { useParams } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h2`
  background: ${(p) => p.theme.colors.key.dark};
  color: white;
  padding: 0 1rem;
  margin-bottom: 1rem;
`;

export function ActivityEdit() {
  const { mode } = useParams<"mode">();
  const { id } = useParams<"id">();
  console.log("ID: ", mode, id);

  return (
    <>
      <Title>アクティビティ追加・編集</Title>
      <div style={{ color: "red" }}>
        編集画面いいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい
      </div>
    </>
  );
}
