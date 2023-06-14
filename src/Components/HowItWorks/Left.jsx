import React, { useState } from "react";
import { styled } from "styled-components";
import { FaUserPlus } from "react-icons/fa";
import { BsGlobeAmericas } from "react-icons/bs";
import { MdNotInterested } from "react-icons/md";

const LeftWrapper = styled.div`
  width: 40%;
`;

const ContentWrapper = styled.div`
  transform-origin: left bottom;
  position: absolute;
  z-index: 100;
  bottom: 22%;
  left: 5%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-box-align: center;
  align-items: center;
`;
const UnList = styled.div`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
`;

const List = styled.div`
  position: relative;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  padding: 0px 40px;
  width: 560px;
  height: 120px;
  box-sizing: border-box;
  border-radius: 10px;
  transition: all 0.5s ease-in-out;
  color:#fff;


  &.selected {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
  }

  @media (max-width: 1024px) {
    width: 500px;
}

`;

const Icon = styled.div`
  padding-right: 30px;
  font-size: 2rem;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  flex: 1 1 0%;
  color: #fff;
  height: 100%;
`;

const Para = styled.p`
margin-top: 10px;
display:none;
transition: all 0.5s ease-in-out;

&.selected {
display: inline-block;
  }


`

const Left = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };
  return (
    <LeftWrapper className="left">
      <ContentWrapper className="">
        <UnList className="">
          <List
            className={selectedItem === 0 ? "selected" : ""}
            onClick={() => handleItemClick(0)}
          >
            <Icon className="">
              <FaUserPlus />
            </Icon>
            <Item>
              <div>
                <span>Signup for free</span>
                <Para
                className={selectedItem === 0 ? "selected" : ""}
            onClick={() => handleItemClick(0)}
                >
                  Signup for a trial above. 5 minutes later you've got a demo
                  chatbot to embed on your website. Remember to check your spam
                  folder.
                </Para>
              </div>
            </Item>
          </List>
          <List
            className={selectedItem === 1 ? "selected" : ""}
            onClick={() => handleItemClick(1)}
          >
            <Icon className="">
              <BsGlobeAmericas />
            </Icon>
            <Item>
              <div>
                <span>Embed on website</span>
                <Para
                className={selectedItem === 1 ? "selected" : ""}
            onClick={() => handleItemClick(1)}
                >
                  Embed your chatbot and AI search on your website and try it
                  out for 7 days - Let us know if you need help.
                </Para>
              </div>
            </Item>
          </List>
          <List
            className={selectedItem === 2 ? "selected" : ""}
            onClick={() => handleItemClick(2)}
          >
            <Icon className="">
              <MdNotInterested />
            </Icon>
            <Item>
              <div>
                <span>No obligations</span>
                <Para
                className={selectedItem === 2 ? "selected" : ""}
            onClick={() => handleItemClick(2)}
                >
                  After 7 days you decide if you want to buy. This is a demo
                  chatbot, a professional chatbot will have much higher quality.
                </Para>
              </div>
            </Item>
          </List>
        </UnList>
      </ContentWrapper>
    </LeftWrapper>
  );
};

export default Left;
