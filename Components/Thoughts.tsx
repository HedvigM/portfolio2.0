import {
  Box,
  Card,
  CardMedia,
  Container,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { Body1, H2, H4, H5, H6, H6Link } from "styles/theme";
import { ThoughtsText, MoreThoughtsText } from "./Text";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const MainContainer = styled("div")((props) => ({
  height: `calc(100vh)`,
  padding: "30px 30px 50px 30px",
  display: "grid",
  gridTemplateRows: "100px 1fr",
  backgroundColor: props.theme.palette.secondary.main,
}));
const PostsContainer = styled("div")((props) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
}));
const PostContainer = styled("div")((props) => ({
  backgroundColor: "white",
  borderRadius: "10px",
  width: "100%",
  height: "100%",
  overflow: "hidden",
}));
const Div = styled("div")((props) => ({
  borderBottom: "1px solid black",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  padding: "3px 10px",
}));
const ThoughtsContainer = styled("div")((props) => ({
  padding: " 5px 10px",
}));

export const Thoughts = () => {
  return (
    <MainContainer>
      <Typography variant="h2" textAlign="left">
        Posts
      </Typography>
      <PostsContainer>
        {ThoughtsText.map((text, index) => (
          <PostContainer
            onClick={() => window.open(text.href, "_blank", "noopener")}
          >
            <Div>
              <FiberManualRecordIcon fontSize="small" sx={{ color: "black" }} />
              <FiberManualRecordIcon fontSize="small" sx={{ color: "black" }} />
              <FiberManualRecordIcon fontSize="small" sx={{ color: "black" }} />
            </Div>
            <ThoughtsContainer>
              <Typography key={index} variant="h6">
                {text.name}
              </Typography>
              <Typography
                key={index}
                variant="body1"
                sx={{ lineHeight: "1.3" }}
              >
                {text.text}
              </Typography>
            </ThoughtsContainer>
          </PostContainer>
        ))}
      </PostsContainer>
    </MainContainer>
  );
};
