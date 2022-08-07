import { Box, Container, Typography } from '@mui/material';
import styled from '@emotion/styled';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { projects } from './Text';

export const FeaturedProjects = () => {
  return (
    <Container sx={{ background: 'white' }}>
      <Container maxWidth='md'>
        <Box
          sx={{ display: 'flex', justifyContent: 'center', padding: '50px' }}
        >
          <Typography variant='h2'>Featured Projects</Typography>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            columnGap: '100px',
          }}
        >
          {projects.map((project, index) => (
            <Box key={index} sx={{ gridColumn: 'span 1' }}>
              <ImageContainer>
                <ImageText>{project.name}</ImageText>
                <Image></Image>
              </ImageContainer>
              <Box sx={{ padding: '20px 0 70px 0' }}>
                <Typography variant='h3'>{project.name}</Typography>
                <Typography variant='body1'>{project.discription}</Typography>
                <Box sx={{ marginTop: '15px' }}>
                  {project.tags.map((tag, index) => (
                    <Typography key={index} variant='h6'>
                      {tag}
                    </Typography>
                  ))}
                  <Typography
                    variant='h6'
                    sx={{ backgroundColor: 'secondary.main', color: 'white' }}
                  >
                    <H6Variant
                      aria-label='Link to the deployed project'
                      aria-pressed='false'
                      role='button'
                      target='_blank'
                      href={project.deployed}
                    >
                      Deployed project
                    </H6Variant>
                  </Typography>
                  <Typography
                    variant='h6'
                    sx={{ backgroundColor: 'secondary.main' }}
                  >
                    <H6Variant
                      aria-label='Link to the deployed project'
                      aria-pressed='false'
                      role='button'
                      target='_blank'
                      href={project.github}
                    >
                      <FontAwesomeIcon icon={['fab', 'github']} />
                    </H6Variant>
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Container>
  );
};

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const ImageText = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #86cb91;
  :hover {
    display: none;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
  }
`;

const Image = styled.div`
  background-color: #ff0063;
  width: 400px;
  height: 400px;
  display: block;

  :hover {
    background-color: turquoise;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
  }
`;

const H6Variant = styled.a`
  color: white;
  text-decoration: none;
`;
