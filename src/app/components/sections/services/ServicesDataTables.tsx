'use client';
import React from 'react';
import styled from 'styled-components';
import ContainerLayout from '../../layouts/ContainerLayout';
import { device } from '@/theme/breakpoints';

const data1 = [
  {
    Type: 'DRY-DOCK',
    No: 'NO.1',
    'Length(M)': '187',
    'INNER WIDTH(M)': '25',
    'MAX DRAFT(M)': '8',
    'CRANES(T)': '2 x 20',
  },
  {
    Type: 'DRY-DOCK',
    No: 'NO.1',
    'Length(M)': '220',
    'INNER WIDTH(M)': '25',
    'MAX DRAFT(M)': '8',
    'CRANES(T)': '2 x 20',
  },
  {
    Type: 'FLOATING DOCK',
    No: '',
    'Length(M)': '119',
    'INNER WIDTH(M)': '19',
    'MAX DRAFT(M)': '6',
    'CRANES(T)': '1 x 5',
  },
];

const data2 = [
  {
    NAME: 'BERTH No.19',
    'Length(m)': '381.7',
    'DEPTH(M)': '6.2',
    'CRANES(T)': '1 x 32',
  },
  {
    NAME: 'BERTH No.19',
    'Length(m)': '381.7',
    'DEPTH(M)': '6.2',
    'CRANES(T)': '1 x 32',
  },
  {
    NAME: 'BERTH No.19',
    'Length(m)': '381.7',
    'DEPTH(M)': '6.2',
    'CRANES(T)': '1 x 32',
  },
];

const cardsData = [
  {
    title: 'Title',
    text: 'The company offers various kinds of anticorrosive treatments of hulls including high pressure washing, sand blasting up to Standard SA 2.5 as well as mechanical treatment and Coating with marine paints of cargo holds, ballast and fuel oil tanks.',
  },
  {
    title: 'Title',
    text: 'The company is experienced in repair of shafts, propellers and rudder systems. The professional team performs building up and mechanical treatment of the shafts up to 16 m length, prefabrication of bronze bushes and renewal shaft seals.',
  },
];

const SectionWrapper = styled.div`
  margin-bottom: 70px;
`;

const HeadingWrapper = styled.div`
  margin-bottom: 24px;
  h3 {
    font-size: 24px;
    max-width: 70%;
  }
  @media ${device.sm} {
    h3 {
      max-width: 290px;
      font-size: 20px;
      font-weight: 500;
      text-align: left;
    }
  }
`;

const TableSection = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  margin-bottom: 70px;
  @media ${device.md} {
    grid-template-columns: 1fr;
    gap: 30px;
    margin-bottom: 40px;
  }
`;

const StyledTable = styled.table`
  border: 1px solid white;
  border-collapse: collapse;
  color: white;

  td,
  th {
    min-width: 95px;
    height: 72px;
    border: 1px solid white;
    border-collapse: collapse;
    text-align: center;
  }

  @media ${device.sm} {
    width: 100%;
    td,
    th {
      min-width: auto;
      height: auto;
      border: 1px solid white;
      font-size: 12px;
      font-weight: 500;
      line-height: 15px;
      letter-spacing: 0em;
      text-align: center;
      padding: 5px;
    }
  }
`;

const CardsSection = styled.ul`
display: grid;
gap: 20px;
grid-template-columns: 1fr 1fr;
justify-content: space-between;
width: 100%;
@media ${device.md} {
  grid-template-columns: 1fr;
}
`;

const CardItem = styled.li`
border: 5px solid rgba(255,255,255,.5);
padding: 45px 90px;
h3 {
  margin-bottom: 20px;
  font-size: 32px;
}
@media ${device.lg} {
  padding: 40px 60px;
}
@media ${device.sm} {
  padding: 25px 20px;
}
`;

function DataTable({ titles, data }: { titles: string[]; data: any[] }) {
  return (
    <StyledTable>
      <thead>
        <tr>
          {titles.map((title, index) => (
            <th key={index}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, idx) => (
          <tr key={idx}>
            {titles.map((title, index) => (
              <td key={index}>{item[title]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
}

export default function ServicesDataTables() {
  return (
    <SectionWrapper>
      <ContainerLayout>
        <HeadingWrapper>
          <h3>Technical Data of Docks and repair berths:</h3>
        </HeadingWrapper>
        <TableSection>
          <DataTable titles={Object.keys(data1[0])} data={data1} />
          <DataTable titles={Object.keys(data2[0])} data={data2} />
        </TableSection>
        <CardsSection>
          {
            cardsData.map((item, index) => {
              return (
                <CardItem key={index}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </CardItem>
              )
            })
          }
        </CardsSection>
      </ContainerLayout>
    </SectionWrapper>
  );
}
