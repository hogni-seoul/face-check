import React from "react";

// Styles
import styled from "styled-components";

// Components
import Button from "@material-ui/core/Button";

// firebase
import { auth, provider } from "firebaseconfig";

// AuthState
import { useStateValue } from "Context/AuthProvider";
import { SET_USER } from "Context/Types";

function SignIn() {
  const [state, dispatch] = useStateValue();

  const login = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({ type: SET_USER, user: result.user });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <Container>
      <Logo>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt="facebook-logo"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Facebook_Logo_%282019%29.svg"
          alt="facebook-logo-text"
        />
      </Logo>
      <StyledButton onClick={login}>로그인하기</StyledButton>
    </Container>
  );
}

export default SignIn;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  & > img:first-child {
    display: block;
    height: 120px;
    object-fit: contain;
  }
  & > img:last-child {
    display: block;
    height: 30px;
    object-fit: contain;
    margin-top: 30px;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 40vh !important;
  width: 300px;
  background-color: #2e81f4 !important;
  color: #eff2f5 !important;
  font-weight: 700;
`;
