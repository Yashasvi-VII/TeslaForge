import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({
  title,
  description,
  leftbuttontext,
  rightbuttontext,
  backgroundImg,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h2>{title}</h2>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Fade bottom>
        <Buttons>
          <ButtonGroup>
            <LeftButton>{leftbuttontext}</LeftButton>
            {rightbuttontext && <RightButton>{rightbuttontext}</RightButton>}
          </ButtonGroup>
          <DownArrow src="/images/down-arrow.svg" />
        </Buttons>
      </Fade>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  display: flex;
  flex-direction: column; //that pushes top to bottom
  justify-content: space-between; // for vertical alignment
  align-items: center; // for horizontal alignment
  scroll-snap-align: start;
`;

const ItemText = styled.div`
  display: flex;
  padding-top: 15vh;
  text-align: center;
  flex-direction: column;
  color: #393c41;
  h2 {
    font-weight: 400;
    font-size: 40px;
  }
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;
const RightButton = styled(LeftButton)`
  background-color: rgb(214, 210, 210);
  opacity: 0.65;

  color: black;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  //overflow-x:hidden
  animation: animateDown infinite 1.5s;
`;
const Buttons = styled.div`
  // animation is animateDown
`;
