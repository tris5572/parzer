import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import { Pages } from "@/misc/constants";

/** サイドバーの余白を空けて、コンテンツを入れる部分のスタイル */
export const Contents = styled.div`
  margin-left: 200px;
  padding: 0.5rem;
`;

const Wrapper = styled.div`
  width: 200px;
  position: fixed;
  background: ${(p) => p.theme.colors.key.xxlight};
  height: 100dvh;
`;

const Title = styled.h1`
  text-align: center;
  font-weight: 800;
  color: ${(p) => p.theme.colors.key.dark};
  margin: 0.5rem auto;
`;

const L = styled(Link)`
  text-decoration: none;
`;

const Item = styled.div`
  width: 80%;
  margin: 0 auto 16px;
  padding: 0.2rem 0;
  text-align: center;
  border-left: 4px solid ${(p) => p.theme.colors.key.main};
  border-right: 4px solid ${(p) => p.theme.colors.key.main};
  color: ${(p) => p.theme.colors.key.xdark};
  background: white;
`;

const SelectedItem = styled(Item)`
  background: ${(p) => p.theme.colors.key.xlight};
  font-weight: bold;
`;

// type Props = { page?: Pages };

export function Sidebar() {
  const path = useLocation().pathname;

  return (
    <Wrapper>
      <L to="/">
        <Title>Parzer</Title>
      </L>

      <L to="/">
        {path === "/" ? <SelectedItem>Main</SelectedItem> : <Item>Main</Item>}
      </L>

      <L to="/activities">
        {path.startsWith(Pages.Activities) ? (
          <SelectedItem>Activities</SelectedItem>
        ) : (
          <Item>Activities</Item>
        )}
      </L>

      <L to="/parts">
        {path.startsWith(Pages.Parts) ? (
          <SelectedItem>Parts</SelectedItem>
        ) : (
          <Item>Parts</Item>
        )}
      </L>
    </Wrapper>
  );
}
