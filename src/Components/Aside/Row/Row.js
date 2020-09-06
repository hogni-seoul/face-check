import React from "react";

// Styles
import styled from "styled-components";

// Components
import Avatar from "@material-ui/core/Avatar";

function Row({ title, src, Icon }) {
  return (
    <Cotainer>
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </Cotainer>
  );
}

export default Row;

const Cotainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #e6e7ea;
    border-radius: 10px;
  }
  h4 {
    font-size: 14px;
    margin-left: 20px;
    font-weight: 700;
  }
  & > .MuiSvgIcon-root {
    color: #2e81f4;
    font-size: 32px;
  }
`;
