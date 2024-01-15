import styled from "styled-components";
import { ActivitiesList } from "./ActivitiesList";
import { AddButton } from "../common/AddButton";

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
      <AddButton link="/activities/edit/" />
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
