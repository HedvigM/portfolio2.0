import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';
import styled from '@emotion/styled';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { projects } from './Text';

export const FeaturedProjects = () => {
  return (
    <Box sx={{ marginBottom: '50px' }}>
      <Container maxWidth='md'>
        <Box
          sx={{ display: 'flex', justifyContent: 'center', padding: '50px' }}
        >
          <Typography variant='h2'>Featured Projects</Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {projects.map((project, index) => (
            <Card
              key={index}
              sx={{
                maxWidth: 400,
                minWidth: 300,
                margin: '10px',
              }}
            >
              <CardActionArea>
                <Box sx={{ position: 'relative' }}>
                  <Overlay>
                    <p>{project.name}</p>
                  </Overlay>
                  <ImgOverlay>
                    <CardMedia
                      component='img'
                      height='250'
                      image={project.image}
                      alt={project.alt}
                    ></CardMedia>
                  </ImgOverlay>
                </Box>
                <CardContent>
                  <Typography variant='h3' component='div'>
                    {project.name}
                  </Typography>
                  <Typography
                    variant='body2'
                    color='text.secondary'
                    paragraph
                    align='left'
                  >
                    {project.discription}
                  </Typography>
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
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

const Overlay = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.5);
  transition: 0.2s ease;

  :hover {
    background-color: transparent;
    display: none;
  }

  p {
    position: absolute;
    font-weight: 200;
    color: white;
    display: flex;
    font-family: 'Roboto', sans-serif;
    font-size: 25px;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: 0;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease;

    :hover {
      color: transparent;
      display: none;
    }
  }
`;

const ImgOverlay = styled.div`
  transition: 0.3s ease;

  :hover {
    transform: scale(1.1);
  }
`;

const H6Variant = styled.a`
  color: white;
  text-decoration: none;
`;
