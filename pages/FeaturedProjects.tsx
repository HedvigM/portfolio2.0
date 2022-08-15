import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  styled,
  Typography,
} from '@mui/material';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { projects } from './Text';
import { Body1, H2, H3, H6 } from 'styles/theme';

export const FeaturedProjects = () => {
  return (
    <Box sx={{ backgroundColor: 'secondary.main', paddingBottom: '50px' }}>
      <Container maxWidth='md'>
        <Box
          sx={{ display: 'flex', justifyContent: 'center', padding: '50px' }}
        >
          <H2>Featured Projects</H2>
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
                  <P>{project.name}</P>
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
                <H3> {project.name}</H3>
                <Body1>{project.discription}</Body1>
                <Box
                  sx={{
                    marginTop: '15px',
                    display: 'flex',
                    flexWrap: 'wrap',
                  }}
                >
                  {project.tags.map((tag, index) => (
                    <Box key={index}>
                      <H6
                        sx={{
                          backgroundColor: 'primary.contrastText',
                          color: 'text.primary',
                        }}
                      >
                        {tag}
                      </H6>
                    </Box>
                  ))}
                  <Box>
                    <H6Variant
                      aria-label='Link to the deployed project'
                      aria-pressed='false'
                      role='button'
                      target='_blank'
                      href={project.deployed}
                    >
                      <H6
                        sx={{
                          backgroundColor: 'secondary.contrastText',
                          '&:hover': {
                            color: 'text.primary',
                            backgroundColor: 'primary.main',
                          },
                        }}
                      >
                        Deployed project
                      </H6>
                    </H6Variant>
                  </Box>
                  <Box>
                    <H6Variant
                      aria-label='Link to the deployed project'
                      aria-pressed='false'
                      role='button'
                      target='_blank'
                      href={project.github}
                    >
                      <H6
                        sx={{
                          backgroundColor: 'secondary.contrastText',
                          '&:hover': {
                            color: 'text.primary',
                            backgroundColor: 'primary.main',
                          },
                        }}
                      >
                        <FontAwesomeIcon icon={['fab', 'github']} />
                      </H6>
                    </H6Variant>
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

const Overlay = styled('div')((props) => ({
  position: 'absolute',
  display: 'inline',
  top: '0px',
  right: '0px',
  bottom: '0px',
  left: '0px',
  pointerEvents: 'none',
  /* background: rgb(1, 1, 1); */
  background: '#2c2c2c7b',
  transition: '0.1s ease-in',
}));

const P = styled('p')((props) => ({
  position: 'absolute',
  fontWeight: '200',
  color: 'white',
  display: 'flex',
  fontFamily: 'Roboto',
  fontSize: '25px',
  top: '0',
  bottom: '0',
  right: '0',
  left: '0',
  margin: '0',
  justifyContent: 'center',
  alignItems: 'center',

  '&:hover': {
    color: 'transparent',
  },
}));

const H6Variant = styled('a')((props) => ({
  textDecoration: 'none',
  color: props.theme.palette.text.secondary,
  '&:hover': {
    color: props.theme.palette.text.primary,
  },
}));
