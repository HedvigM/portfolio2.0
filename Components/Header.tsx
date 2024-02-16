import { Avatar, Box, Container, Typography, styled } from "@mui/material";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { HeaderText, IconText } from "./Text";
import { H1 } from "styles/theme";

export const Header = () => {
  library.add(fab);
  return (
    <MainContainer>
      {/*  <Icons>
        {IconText.map((text, index) => (
          <Icon
            key={index}
            href={text.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={text.ariaLabel}
          >
            <FontAwesomeIcon icon={text.icon} />
          </Icon>
        ))}
      </Icons> */}

      {/* <H1>Hej och välkomna!</H1> */}
      <Div>
        <Typography variant="body1" textAlign="left">
          👋 Hello! I'm Hedvig
        </Typography>
      </Div>
      <Typography variant="h6">
        I'm a front-end developer, som bara skall komma på lite go text att
        skriva här
      </Typography>

      {/*  <img
        src="/./Pictures/small-dotts.svg"
        style={{
          position: "relative",
          top: "0",
          left: "0",
          height: "100px",
        }}
      ></img>
      <ProfilePic src="/./Pictures/profile-pic.jpg" alt="profile picture" /> */}
    </MainContainer>
  );
};

const ProfilePic = styled("img")({
  height: "100px",
});

const MainContainer = styled("div")({
  height: `calc(100vh - 50px)`,
  padding: "20px",
  display: "grid",
  gridTemplateRows: "1fr 2fr",
});
const Div = styled("div")({
  transform: `rotate(-4deg)`,
  padding: "10px",
  placeSelf: "start",
  alignSelf: "end",
});

const Icons = styled("div")({
  display: "flex",
  justifyContent: "end",
  width: "100%",
  fontSize: "xx-large",
  padding: "10px",
});

const Icon = styled("a")((props) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid",
  borderRadius: "50%",
  height: "60px",
  width: "60px",
  margin: "10px",
  fontSize: "xx-large",
  color: props.theme.palette.secondary.contrastText,
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.1)",
    color: props.theme.palette.text.secondary,
    backgroundColor: props.theme.palette.secondary.contrastText,
    border: "none",
  },
}));
