'use client';
import React from 'react';
import styled from 'styled-components';
import ContainerLayout from '../../layouts/ContainerLayout';
import { device } from '@/theme/breakpoints';
import data from '@/app/data/services.json';

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
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none !important;
  }
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
    max-width: 350px;
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
  border: 5px solid rgba(255, 255, 255, 0.5);
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
          <DataTable titles={Object.keys(data.table1[0])} data={data.table1} />
          <DataTable titles={Object.keys(data.table2[0])} data={data.table2} />
        </TableSection>
        <CardsSection>
          {data.tableCards.map((item, index) => {
            return (
              <CardItem key={index}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </CardItem>
            );
          })}
        </CardsSection>
      </ContainerLayout>
    </SectionWrapper>
  );
}
