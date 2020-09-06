import React, { useState } from "react";

// Styles
import styled from "styled-components";

// Components
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";

// Assets
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";

// AuthState
import { useStateValue } from "Context/AuthProvider";

// firebase
import firebase from "firebase";
import { db } from "firebaseconfig";

function MessageWriter() {
  const [{ user }, dispatch] = useStateValue();

  const [textMessage, setTextMessage] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    db.collection("posts").add({
      message: textMessage,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      image: imageURL,
      username: user.displayName,
    });

    setTextMessage("");
    setImageURL("");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <div>
          <Avatar
            className="avatar"
            src={user?.photoURL}
            title={user?.displayName}
          />

          <StyledBox>
            <input
              type="text"
              placeholder={`${user?.displayName}님, 무슨 생각을 하고 계신가요?`}
              value={textMessage}
              onChange={(event) => setTextMessage(event.target.value)}
            />

            <Box display={{ xs: "none", md: "block" }}>
              <input
                type="text"
                placeholder={"Image URL (선택)"}
                value={imageURL}
                onChange={(event) => setImageURL(event.target.value)}
              />
            </Box>
          </StyledBox>
        </div>

        <Box display="flex">
          <Button
            component="button"
            display={{ xs: "flex", sm: "none" }}
            type="submit"
          >
            게시하기
          </Button>
        </Box>
      </Form>

      <Box display={{ xs: "none", sm: "flex" }} justifyContent="space-evenly">
        <Option>
          <VideocamIcon style={{ color: "#E52546" }} />
          <p>라이브 방송</p>
        </Option>

        <Option>
          <PhotoLibraryIcon style={{ color: "#42B55D" }} />
          <p>사진/동영상</p>
        </Option>

        <Option>
          <EmojiEmotionsIcon style={{ color: "#EEC163" }} />
          <p>기분/활동</p>
        </Option>
      </Box>
    </Container>
  );
}

export default MessageWriter;

const Container = styled.div`
  padding: 14px;
  margin-top: 30px;
  background-color: #fff;
  border-radius: 15px;
  width: 100%;
  box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
`;

const Form = styled.form`
  & > div:first-child {
    display: flex;
    align-items: center;
  }
  & > div:last-child {
    border-top: 1px solid #eff2f5;
    padding-top: 10px;
    margin-top: 10px;
  }
`;

const StyledBox = styled(Box)`
  flex: 1;
  display: flex;
  align-items: center;
  & input {
    outline: none;
    border: none;
    padding: 10px 20px;
    margin-left: 10px;
    border-radius: 20px;
    background-color: #eff2f5;
  }
  & > input:first-child {
    flex: 1;
  }
`;

const Button = styled(Box)`
  color: #fff;
  background-color: #2e81f4;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 8px;
`;

const Option = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 0;
  cursor: pointer;
  &:hover {
    border-radius: 6px;
    background-color: #f4f4f4;
  }
  & > .MuiSvgIcon-root {
    font-size: 26px;
    margin-right: 8px;
  }
`;
