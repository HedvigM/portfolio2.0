import { Typography, styled } from "@mui/material";
import React from "react";
import { projects } from "./Text";

const MainContainer = styled("div")((props) => ({
  height: `calc(100vh)`,
  padding: "30px 30px 50px 30px",
  display: "grid",
  gridTemplateRows: "110px 1fr",
  backgroundColor: props.theme.palette.primary.main,
}));
const ProjectsContainer = styled("div")((props) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "30px",
}));
const ProjectContainer = styled("div")((props) => ({
  boxShadow: `10px 5px ${props.theme.palette.tritiary.main}`,
  backgroundImage: `url(${props.image})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  border: `1px solid ${props.theme.palette.tritiary.main}`,
  borderRadius: "5px",
  width: "100%",
  height: "100%",
  position: "relative",

  ":hover": {
    cursor: "pointer",
  },
  ":active": {
    boxShadow: "none",
  },
}));
const Title = styled("div")((props) => ({
  border: `1px solid ${props.theme.palette.tritiary.main}`,
  borderRadius: "5px",
  padding: "2px",
  width: "225px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: `10px 5px ${props.theme.palette.tritiary.main}`,
  backgroundColor: "white",
  position: "absolute",
  top: "-10px",
  left: "30px",
}));

export const FeaturedProjects = () => {
  return (
    <MainContainer>
      <Typography variant="h2" textAlign="left">
        Projects
      </Typography>
      <ProjectsContainer>
        {projects.map((project, index) => (
          <ProjectContainer
            image={project.image}
            onClick={() => {
              window.open(project.deployed, "_blank", "noopener");
            }}
          >
            <Title>
              <Typography key={index} variant="h6" textAlign="left">
                {project.name}
              </Typography>
            </Title>
          </ProjectContainer>
        ))}
      </ProjectsContainer>
    </MainContainer>
  );
};
