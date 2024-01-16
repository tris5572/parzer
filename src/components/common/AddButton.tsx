import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  background: ${(p) => p.theme.colors.key.dark};
  padding: 0.5rem;
  margin: 0.2rem;
  color: white;
  border-radius: 4px;
  width: 1.6rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
`;

const L = styled(Link)`
  text-decoration: none;
  color: white;
  text-align: center;
  width: 100%;
  font-weight: bold;
`;

type Props = {
  link: string;
};

export function AddButton(props: Props) {
  return (
    <Wrapper>
      <L to={props.link}>＋</L>
    </Wrapper>
  );
}
