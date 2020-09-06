import React, { Fragment } from "react";

// Styles
import styled from "styled-components";

// Components
import SignIn from "Components/SignIn";
import Header from "Components/Header";
import Aside from "Components/Aside";
import Feed from "Components/Feed";
import Widget from "Components/Widget";

// AuthState
import { useStateValue } from "Context/AuthProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      {!user ? (
        <SignIn />
      ) : (
        <Fragment>
          <Header />

          <MainSection>
            <Aside />

            <Feed />

            <Widget />
          </MainSection>
        </Fragment>
      )}
    </div>
  );
}

export default App;

const MainSection = styled.section`
  display: flex;
  justify-content: space-between;
`;
