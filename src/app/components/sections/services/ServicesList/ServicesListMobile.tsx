'use client';
import React from 'react';
import styled from 'styled-components';
import ContainerLayout from '../../../layouts/ContainerLayout';
import { device } from '@/theme/breakpoints';
import servicesListData from '../../../../data/services.json';

const SectionWrapper = styled.div`
  margin-bottom: 30px;
`;

const StyledContainer = styled(ContainerLayout)`
  display: flex;
  flex-direction: column;
`;

const StyledHeading = styled.h3`
  font-size: 20px;
  margin-bottom: 30px;
`;

const ServiceList = styled.ul`
  padding: 40px;
  position: relative;
  min-height: 330px;
  background: linear-gradient(-80deg, #11304d 10%, transparent 0%);
  @media ${device.sm} {
    min-height: 400px;
    background: linear-gradient(-85deg, #11304d 10%, transparent 0%);
  }
`;

const ServiceListDark = styled(ServiceList)`
  background-color: #0b1f31;
  margin-bottom: 20px;
`;

const ServiceListLight = styled(ServiceList)`
  background-color: #314a61;
`;

const ServiceItem = styled.li`
  margin-bottom: 30px;
  list-style-type: circle;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export default function ServicesListMobile() {
  return (
    <>
      <ContainerLayout>
        <StyledHeading>
          The company offers the following services:{' '}
        </StyledHeading>
      </ContainerLayout>
      <SectionWrapper>
        <StyledContainer>
          <ServiceListDark>
            {servicesListData.servicesLists.list1.map((item, index) => {
              return <ServiceItem key={index}>{item}</ServiceItem>;
            })}
          </ServiceListDark>
          <ServiceListLight>
            {servicesListData.servicesLists.list2.map((item, index) => {
              return <ServiceItem key={index}>{item}</ServiceItem>;
            })}
          </ServiceListLight>
        </StyledContainer>
      </SectionWrapper>
    </>
  );
}

// import styled from 'styled-components';
// import ContainerLayout from '../../../layouts/ContainerLayout';
// import { device } from '@/theme/breakpoints';
// import servicesListData from '../../../../data/services.json';

// const SectionWrapper = styled.div`
//   margin-bottom: 30px;
// `;

// const StyledContainer = styled(ContainerLayout)`
//   display: flex;
//   flex-direction: column;
// `;

// const StyledHeading = styled.h3`
//   font-size: 20px;
//   margin-bottom: 30px;
// `;

// const ServiceList = styled.ul`
//   padding: 40px;
//   position: relative;
//   height: 330px;
//   @media ${device.sm} {
//     height: 430px;
//   }
//   &:before {
//     content: '';
//     background-color: transparent;
//     height: 0;
//     width: 0;
//     position: absolute;
//     z-index: 0;
//     right: 0;
//     top: 0;
//     border-top: 330px solid transparent;
//     border-right: 50px solid #11304d;
//     transform: translate(0, 0);
//     @media ${device.sm} {
//       border-right: 30px solid #11304d;
//       border-top: 430px solid transparent;
//     }
//   }
// `;
// const ServiceListDark = styled(ServiceList)`
//   background-color: #0b1f31;
//   margin-bottom: 20px;
// `;
// const ServiceListLight = styled(ServiceList)`
//   background-color: #314a61;
// `;
// const ServiceItem = styled.li`
//   margin-bottom: 30px;
//   list-style-type: circle;
//   &:last-of-type {
//     margin-bottom: 0;
//   }
// `;

// export default function ServicesListMobile() {
//   return (
//     <>
//       <ContainerLayout>
//         <StyledHeading>
//           The company offers the following services:{' '}
//         </StyledHeading>
//       </ContainerLayout>
//       <SectionWrapper>
//         <StyledContainer>
//           <ServiceListDark>
//             {servicesListData.servicesLists.list1.map((item, index) => {
//               return <ServiceItem key={index}>{item}</ServiceItem>;
//             })}
//           </ServiceListDark>
//           <ServiceListLight>
//             {servicesListData.servicesLists.list2.map((item, index) => {
//               return <ServiceItem key={index}>{item}</ServiceItem>;
//             })}
//           </ServiceListLight>
//         </StyledContainer>
//       </SectionWrapper>
//     </>
//   );
// }
