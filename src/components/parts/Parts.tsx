import styled from "styled-components";

import { PartsList } from "@/components/parts/PartsList";
import { AddButton } from "@/components/common/AddButton";

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
      <AddButton link="/parts/edit/" />
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
