import { PartsItemData } from "@/misc/type";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid ${(p) => p.theme.colors.key.dark};
  border-radius: 4px;
  margin: 0.5rem 0;
  color: ${(p) => p.theme.colors.text.main};
`;

const Inner = styled.div`
  margin: 0 1rem;
`;

const Name = styled.div`
  background: ${(p) => p.theme.colors.key.xlight};
  padding-left: 0.5rem;
  color: ${(p) => p.theme.colors.key.xdark};
  font-weight: bold;
`;

const Kind = styled.div`
  font-weight: bold;
`;

const Description = styled.div``;

const Distance = styled.div``;
const DistanceNumber = styled.span`
  font-weight: bold;
`;
const DistanceUnit = styled.span`
  font-size: small;
`;

type Props = {
  item: PartsItemData;
};

export function PartsItemView(props: Props) {
  return (
    <Wrapper>
      <Name>{props.item.name}</Name>
      <Inner>
        <Kind>{props.item.kind}</Kind>
        <Description>{props.item.description}</Description>
        {distance(props.item.distance, props.item.limit)}
      </Inner>
    </Wrapper>
  );
}

// TODO: limitを超えていたら赤文字にする
function distance(distance: number, limit?: number) {
  const dist = (
    <>
      <DistanceNumber>{distance.toLocaleString()}</DistanceNumber>
      <DistanceUnit> km</DistanceUnit>
    </>
  );
  const lim =
    limit == undefined ? undefined : ` / ${limit.toLocaleString()} km`;

  return (
    <Distance>
      走行距離：
      {dist}
      {lim}
    </Distance>
  );
}
