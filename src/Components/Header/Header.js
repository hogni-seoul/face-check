import React from "react";

// Styles
import styled from "styled-components";

// Components
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";

// Assets
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// AuthState
import { useStateValue } from "Context/AuthProvider";

function Header() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <Container>
      <div>
        <Logo
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt="facebook-logo"
        ></Logo>

        <Box display={{ xs: "none", sm: "block" }}>
          <SearchForm>
            <SearchIcon />
            <input type="text" placeholder="Facebook 검색" />
          </SearchForm>
        </Box>
      </div>

      <Navigation display={{ xs: "none", md: "flex" }}>
        <div className="active">
          <HomeIcon fontSize="large" />
        </div>

        <div>
          <FlagIcon fontSize="large" />
        </div>

        <div>
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>

        <div>
          <StorefrontOutlinedIcon fontSize="large" />
        </div>

        <div>
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </Navigation>

      <Menu>
        <Box display={{ xs: "none", sm: "flex" }}>
          <UserInfo>
            <Avatar src={user?.photoURL} />
            <h3>{user?.displayName}</h3>
          </UserInfo>

          <IconButton>
            <AddIcon />
          </IconButton>

          <IconButton>
            <ForumIcon />
          </IconButton>

          <IconButton>
            <NotificationsActiveIcon />
          </IconButton>
        </Box>

        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </Menu>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  position: sticky;
  top: 0;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0px 5px 8px -9px rgba(0, 0, 0.75);
  z-index: 9;
  & > div:first-child {
    display: flex;
    justify-content: space-evenly;
  }
`;

const Logo = styled.img`
  display: inline-block;
  height: 40px;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  background-color: #eff2f5;
  padding: 10px;
  margin-left: 10px;
  border-radius: 30px;
  input {
    text-indent: 6px;
    border: none;
    outline-width: 0;
    background-color: transparent;
  }
`;

const Navigation = styled(Box)`
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  & > div {
    display: flex;
    align-items: center;
    padding: 0px 20px;
    cursor: pointer;
    &:not(.active):hover {
      background-color: #eff2f5;
      border-radius: 10px;
      .MuiSvgIcon-root {
        color: #2e81f4;
      }
    }
  }
  & .MuiSvgIcon-root {
    pointer-events: none;
    color: gray;
  }
  .active {
    border-bottom: 4px solid #2e81f4;
    .MuiSvgIcon-root {
      color: #2e81f4;
    }
  }
`;

const Menu = styled.div`
    display: flex;
  }`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  h3 {
    font-size: 14px;
    font-weight: 700;
    margin-left: 10px;
  }
`;
