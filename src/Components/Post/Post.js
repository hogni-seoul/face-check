import React from "react";

// Styles
import styled from "styled-components";

// Components
import Avatar from "@material-ui/core/Avatar";

// Assets
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import ShareIcon from "@material-ui/icons/Share";

function Post({ image, profileSrc, userName, timeStamp, message }) {
  return (
    <Container>
      <div>
        <Profile>
          <Avatar src={profileSrc} className="avatar" />

          <div>
            <p className="name">{userName}</p>
            <p className="date">{timeStamp?.toDate().toLocaleTimeString()}</p>
          </div>
        </Profile>

        <Message>{message}</Message>
      </div>

      {image && <Image src={image} alt="image" />}

      <div>
        <Option>
          <ThumbUpIcon />
          <p>좋아요</p>
        </Option>
        <Option>
          <ChatBubbleIcon />
          <p>댓글 달기</p>
        </Option>
        <Option>
          <ShareIcon />
          <p>공유하기</p>
        </Option>
      </div>
    </Container>
  );
}

export default Post;

const Container = styled.div`
  width: 100%;
  margin-top: 30px;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
  & > div:first-child {
    padding: 14px 14px 0 14px;
  }
  & > div:last-child {
    display: flex;
    justify-content: space-evenly;
    color: gray;
    border-top: 1px solid #eff2f5;
    padding: 0 14px;
  }
`;

const Profile = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  .avatar {
    margin-right: 10px;
  }
  .name {
    font-size: 14px;
    font-weight: 700;
  }
  .date {
    font-size: 11px;
    color: gray;
  }
`;

const Message = styled.p`
  margin: 15px 0;
  font-weight: 400;
`;

const Image = styled.img`
  display: block;
  width: 100%;
`;

const Option = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  padding: 6px 0;
  margin: 6px 0;
  cursor: pointer;
  &:hover {
    border-radius: 6px;
    background-color: #f4f4f4;
  }
  & > .MuiSvgIcon-root {
    font-size: 22px;
    margin-right: 8px;
  }
`;
