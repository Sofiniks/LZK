'use client';
import styled from 'styled-components';
import ContainerLayout from '../../layouts/ContainerLayout';
import TransparentLink from '../../links/links';

const StyledContainer = styled(ContainerLayout)`
  display: flex;
  flex-direction: column;
`;

const ServiceBlock = styled.div`
  padding: 20px;
  z-index: 10;
  margin-bottom: 30px;
`;

const ServiceDarkBlueBlock = styled(ServiceBlock)`
  background-color: #0b1f31;
  h3 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 30px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;
const ServiceLightBlueBlock = styled(ServiceBlock)`
  background-color: #1b3349;

  p {
    text-transform: uppercase;
    margin-bottom: 30px;
    
  }
  button {
    background-color: transparent;
    width: 100%;
    max-width: 300px;
    padding: 18px 0;
    border: 2px solid #fff;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
  }
`;

export default function ServiceRequestMobile() {
    return (
        <StyledContainer>
          <ServiceDarkBlueBlock>
            <h3>Title</h3>
            <p>
              The company is able to build all kind of hulls from small fishing
              trawlers up to cargo vessels using 2 building workshops for
              pre-assembling of sections and blocks up to 50 tons.
            </p>
            <p>
              The final assembly including zinc metalizing, painting and
              outfitting is performed in the dry-dock. The company builds steel
              hulls including hulls with partial out-fitting as well as delivers
              turnkey vessels for our Scandinavian and European customers.
            </p>
          </ServiceDarkBlueBlock>
          <ServiceLightBlueBlock>
            <p>
              If you require any further information we shall be happy to let
              you have this, on request.
            </p>
            <TransparentLink text="CTA" href="/contacts"/>
          </ServiceLightBlueBlock>
        </StyledContainer>
    
    );
}

 