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
    <Box sx={{ backgroundColor: 'secondary.main', paddingBottom: '50px' }}>
      <Container maxWidth='md'>
        <Box
          sx={{ display: 'flex', justifyContent: 'center', padding: '50px' }}
        >
          <Typography
            variant='h2'
            sx={{
              backgroundColor: 'primary.contrastText',
              color: 'text.primary',
            }}
          >
            Featured Projects
          </Typography>
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
                  color='text.primary'
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
                    <Box key={index}>
                      <Typography
                        variant='h6'
                        sx={{
                          backgroundColor: 'primary.contrastText',
                          color: 'text.primary',
                        }}
                      >
                        {tag}
                      </Typography>
                    </Box>
                  ))}
                  <Box>
                    <Typography
                      variant='h6'
                      sx={{
                        backgroundColor: 'secondary.contrastText',
                        '&:hover': {
                          border: '1px solid',
                          color: 'primary.contrastText',
                          backgroundColor: 'primary.main',
                        },
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
                      sx={{
                        backgroundColor: 'secondary.contrastText',
                        '&:hover': {
                          border: '1px solid',
                          color: 'primary.contrastText',
                          backgroundColor: 'primary.main',
                        },
                      }}
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
  /* background: rgb(1, 1, 1); */
  background: #2c2c2c7b;
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

const H6Variant = styled('a')((props) => ({
  textDecoration: 'none',
  color: props.theme.palette.text.secondary,
  '&:hover': {
    color: props.theme.palette.text.primary,
  },
}));
