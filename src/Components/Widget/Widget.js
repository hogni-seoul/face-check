import React from "react";

// Styles
import styled from "styled-components";

// Components
import Box from "@material-ui/core/Box";

function Widget() {
  return (
    <Box display={{ xs: "none", md: "block" }}>
      <Iframe
        title="facebook-widget"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Freact%2F&tabs=timeline&width=360&height=1500&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=false&appId"
        scrolling="no"
        frameBorder="0"
        allow="encrypted-media"
      ></Iframe>
    </Box>
  );
}

export default Widget;

const Iframe = styled.iframe`
  position: sticky;
  top: 0;
  width: 360px;
  height: 100vh;
  border: none;
  overflow: hidden;
`;
