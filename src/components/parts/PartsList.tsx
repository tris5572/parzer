import { useDataStore } from "@/misc/store";
import { PartsItemData } from "@/misc/type";
import styled from "styled-components";

const Table = styled.table`
  border-spacing: 0;
`;
const Th = styled.th`
  font-size: small;
  padding: 0.2rem 0;
  background: ${(p) => p.theme.colors.key.xxlight};
  border-top: 1px solid ${(p) => p.theme.colors.key.dark};
  border-bottom: 1px solid ${(p) => p.theme.colors.key.dark};
`;
const Tr = styled.tr<{ $isInvalid?: boolean }>`
  background: ${(props) => (props.$isInvalid ? "hsl(0, 0%, 80%)" : "transparent")};
`;
const Td = styled.td`
  padding: 0.2rem 1rem;
  border-top: 1px solid transparent;
  border-bottom: 1px solid ${(p) => p.theme.colors.key.dark};
  white-space: nowrap;
`; // 基本的には改行しない

const Name = styled(Td)`
  font-weight: bold;
  white-space: normal;
`;
// const Kind = styled(Td)`
//   font-size: small;
// `;
const Description = styled(Td)`
  font-size: small;
  white-space: normal;
`;
const DistanceStyle = styled(Td)`
  text-align: right;
`;
const DistanceStyleOver = styled(DistanceStyle)`
  color: red;
`;
const DistanceNumber = styled.span`
  font-weight: bold;
`;
const DistanceUnit = styled.span`
  font-size: small;
`;
const LimitStyle = styled(Td)`
  text-align: right;
`;
const StartDate = styled(Td)`
  font-size: small;
`;

type Props = {
  // parts: PartsItemData[];
};

export function PartsList(_props: Props) {
  const parts = useDataStore((state) => state.parts);

  return (
    <Table>
      <Header />
      <tbody>
        {parts.map((v) => (
          <Row data={v} key={v.id} />
        ))}
      </tbody>
    </Table>
  );
}

function Row({ data }: { data: PartsItemData }) {
  return (
    <Tr $isInvalid={data.invalid} key={data.id}>
      <Name>{data.name}</Name>
      <Distance data={data} />
      <Limit data={data} />
      {/* <Kind>{data.kind}</Kind> */}
      <StartDate>{data.startDate}</StartDate>
      <Description>{data.description}</Description>
      <Td>編集</Td>
    </Tr>
  );
}

function Distance({ data }: { data: PartsItemData }) {
  const distStr = data.distance.toLocaleString();
  const flag = data.limit != undefined && data.limit < data.distance; // 限度を超えているかどうかのフラグ
  const elem = (
    <>
      <DistanceNumber>{distStr}</DistanceNumber>
      <DistanceUnit> km</DistanceUnit>
    </>
  );
  if (flag) {
    return <DistanceStyleOver>{elem}</DistanceStyleOver>;
  } else {
    return <DistanceStyle>{elem}</DistanceStyle>;
  }
}

function Limit({ data }: { data: PartsItemData }) {
  const limitStr = data.limit != undefined ? data.limit?.toLocaleString() : "ー";
  return (
    <LimitStyle>
      <DistanceNumber>{limitStr}</DistanceNumber>
      <DistanceUnit> km</DistanceUnit>
    </LimitStyle>
  );
}

function Header() {
  return (
    <thead>
      <tr>
        <Th>名前</Th>
        <Th>走行距離</Th>
        <Th>限度距離</Th>
        <Th>使用開始日</Th>
        {/* <Th>種類</Th> */}
        <Th>詳細</Th>
        <Th>編集</Th>
      </tr>
    </thead>
  );
}
