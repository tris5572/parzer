// import { PartsList } from "./PartsList";
import styled from "styled-components";
import { ActivitiesList } from "./ActivitiesList";

const Title = styled.h2`
  background: ${(p) => p.theme.colors.key.dark};
  color: white;
  padding: 0 1rem;
  margin-bottom: 1rem;
`;

export function Activities() {
  // let { id } = useParams<"id">();

  return (
    <>
      <Title>Activities</Title>
      <ActivitiesList />
      あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />
      あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />
      あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />
      あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />
      あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />
      あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />
    </>
  );
}
