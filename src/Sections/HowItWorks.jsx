import React from "react";
import { styled } from "styled-components";
import Left from "../Components/HowItWorks/Left";
import Right from "../Components/HowItWorks/Right";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  ${
    "" /* background: linear-gradient(90deg, rgba(237,237,241,1) 0%, rgba(238,237,242,1) 100%); */
  }
  background-image:url(box-element.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  border-top: 0.1px solid #636263 ;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index:1;

&:after {
  content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0 0 0 / 44%);
    z-index: -1;
}

`;

const Body = styled.div`
  width: 100%;
  max-width: 90vw;
  height: 100%;
`;

const Heading = styled.h1`
  font-size: 4rem;
  margin-top: 130px;
  color: #fff;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 3rem;

}
  
`;

const ContentWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
`;



const HowItWorks = () => {
  return (
    <Wrapper className="section how_it_works">
      <Body>
        <Heading>The simplest way to build an AI app</Heading>
        <ContentWrapper>
        <Left/>
          <Right/>
        </ContentWrapper>
      </Body>
    </Wrapper>
  );
};

export default HowItWorks;
