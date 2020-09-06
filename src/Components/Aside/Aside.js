import React from "react";

// Styles
import styled from "styled-components";

// Components
import Row from "./Row";
import Box from "@material-ui/core/Box";

// Assets
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// AuthState
import { useStateValue } from "Context/AuthProvider";

function Aside() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <Container display={{ xs: "none", lg: "block" }}>
      <Row src={user?.photoURL} title={user?.displayName} />
      <Row title="코로나19 정보 센터" Icon={LocalHospitalIcon} />
      <Row title="이벤트" Icon={EmojiFlagsIcon} />
      <Row title="친구" Icon={PeopleIcon} />
      <Row title="메시지" Icon={ChatIcon} />
      <Row title="동영상" Icon={VideoLibraryIcon} />
      <Row title="더보기" Icon={ExpandMoreIcon} />
    </Container>
  );
}

export default Aside;

const Container = styled(Box)`
  padding: 20px 10px 30px;
`;
