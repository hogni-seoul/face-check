import React, { useState, useEffect } from "react";

// Styles
import styled from "styled-components";

// Components
import StoryReel from "Components/StoryReel";
import MessageWriter from "Components/MessageWriter";
import Post from "Components/Post";

// firebase
import { db } from "firebaseconfig";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);
  console.log(posts);
  return (
    <Container>
      <Content>
        <StoryReel />

        <MessageWriter />
        {posts.map((post) => (
          <Post
            key={post.id}
            image={post.data.image}
            profileSrc={post.data.profilePic}
            userName={post.data.username}
            timeStamp={post?.data.timestamp}
            message={post?.data.message}
          />
        ))}
      </Content>
    </Container>
  );
}

export default Feed;

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  flex: 1;
  max-width: 700px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
