import { useDataStore } from '@/misc/store';
import { ActivitiesItem } from '@/misc/type';
import styled from 'styled-components';

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
const Td = styled.td`
  padding: 0.2rem 1rem;
  border-top: 1px solid transparent;
  border-bottom: 1px solid ${(p) => p.theme.colors.key.dark};
  white-space: nowrap;
`; // 基本的には改行しない

const Name = styled(Td)``;
const Description = styled(Td)`
  font-size: small;
  white-space: normal;
`; // 例外的に詳細だけは改行させる
const DistanceStyle = styled(Td)`
  text-align: right;
`;
const DistanceNumber = styled.span`
  font-weight: bold;
`;
const DistanceUnit = styled.span`
  font-size: small;
`;

// type Props = {
//   // parts: PartsItemData[];
// };

export function ActivitiesList() {
  const activities = useDataStore((state) => state.activities);

  return (
    <Table>
      <THead />
      <tbody>
        {activities.map((v) => (
          <Row data={v} key={v.id} />
        ))}
      </tbody>
    </Table>
  );
}

function Row({ data }: { data: ActivitiesItem }) {
  return (
    <tr key={data.id}>
      <Td>{data.date}</Td>
      <Name>{data.name}</Name>
      <Distance data={data} />
      <Td>パーツ...</Td>
      <Description>{data.description}</Description>
      <Td>編集</Td>
    </tr>
  );
}

function Distance({ data }: { data: ActivitiesItem }) {
  const distStr = data.distance.toLocaleString();
  return (
    <DistanceStyle>
      <DistanceNumber>{distStr}</DistanceNumber>
      <DistanceUnit> km</DistanceUnit>
    </DistanceStyle>
  );
}

function THead() {
  return (
    <thead>
      <tr>
        <Th>日付</Th>
        <Th>名前</Th>
        <Th>距離</Th>
        <Th>使用パーツ</Th>
        <Th>詳細</Th>
        <Th>編集</Th>
      </tr>
    </thead>
  );
}
