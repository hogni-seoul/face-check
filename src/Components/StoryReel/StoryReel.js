import React from "react";

// Styles
import styled from "styled-components";
import Box from "@material-ui/core/Box";

// Components
import Story from "./Story";

function StoryReel() {
  return (
    <Container display={{ xs: "none", lg: "flex" }}>
      <Story
        image={
          "https://images.unsplash.com/photo-1598993710602-2bf8e8b01691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        }
        profileSrc={"https://randomuser.me/api/portraits/women/14.jpg"}
        title={"Uno"}
      />

      <Story
        image={
          "https://images.unsplash.com/photo-1558980395-be8a5fcb4251?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
        }
        profileSrc={"https://randomuser.me/api/portraits/men/70.jpg"}
        title={"Dos"}
      />

      <Story
        image={
          "https://images.unsplash.com/photo-1599327534694-7615f7cdfadd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        }
        profileSrc={"https://randomuser.me/api/portraits/women/84.jpg"}
        title={"Tres"}
      />

      <Story
        image={
          "https://images.unsplash.com/photo-1598738865218-7809c17181c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        }
        profileSrc={"https://randomuser.me/api/portraits/men/38.jpg"}
        title={"Cuatro"}
      />

      <Story
        image={
          "https://images.unsplash.com/photo-1598812401722-0efbdbbaa0fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=554&q=80"
        }
        profileSrc={"https://randomuser.me/api/portraits/women/22.jpg"}
        title={"Cinco"}
      />
    </Container>
  );
}

export default StoryReel;

const Container = styled(Box)`
  width: 100%;
`;
