import {
  Box,
  Card,
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
              <Box
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Overlay>
                  <p>{project.name}</p>
                </Overlay>
                <CardMedia
                  sx={[
                    {
                      /*  filter: 'brightness(70%)', */
                      transition: '0.3s',

                      '&:hover': {
                        transition: '0.3s',
                        transform: 'scale(1.1)',
                        filter: 'brightness(100%)',
                      },
                    },
                  ]}
                  component='img'
                  height='250'
                  image={project.image}
                  alt={project.alt}
                ></CardMedia>
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
                <Box
                  sx={{
                    marginTop: '15px',
                    display: 'flex',
                    flexWrap: 'wrap',
                  }}
                >
                  {project.tags.map((tag, index) => (
                    <Box>
                      <Typography key={index} variant='h6'>
                        {tag}
                      </Typography>
                    </Box>
                  ))}
                  <Box>
                    <Typography
                      variant='h6'
                      sx={{
                        backgroundColor: 'secondary.main',
                        color: 'white',
                      }}
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
                  </Box>
                  <Box>
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
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

const Overlay = styled.div`
  position: absolute;
  display: inline;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.5);
  transition: '0.1s ease-in';

  :hover {
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

    :hover {
      color: transparent;
    }
  }
`;

const H6Variant = styled.a`
  color: white;
  text-decoration: none;
`;
