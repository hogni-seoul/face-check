import React from "react";

// Styles
import styled from "styled-components";

// Components
import Avatar from "@material-ui/core/Avatar";

function Story({ image, profileSrc, title }) {
  return (
    <Container>
      <Background image={image} />

      <Avatar src={profileSrc} className="avatar" />

      <p>{title}</p>
    </Container>
  );
}

export default Story;

const Container = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  margin-right: 10px;
  overflow: hidden;
  cursor: pointer;
  .avatar {
    margin: 10px;
    border: 4px solid #2e81f4;
  }
  p {
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: #fff;
    font-weight: 700;
  }
`;

const Background = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  transition: all 0.2s;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.1);
  }

  ${Container}:hover & {
    transform: scale(1.03);
    &::before {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`;
