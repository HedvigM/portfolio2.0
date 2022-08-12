import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Container, Typography } from '@mui/material';
import styled from '@emotion/styled';
import React from 'react';
import { OtherProjectsText } from './Text';
import { grey } from '@mui/material/colors';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const OtherProjects = () => {
  return (
    <Box sx={{ backgroundColor: 'primary.main' }}>
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
            Other Projects
          </Typography>
        </Box>
        {OtherProjectsText.map((text, index) => (
          <Box sx={{ paddingBottom: '20px' }}>
            <Typography key={index} variant='h3'>
              {text.name}
            </Typography>
            <Typography variant='body1'>{text.description}</Typography>
            <Box sx={{ marginTop: '15px' }}>
              {text.tags.map((tag, index) => (
                <Typography
                  key={index}
                  variant='h6'
                  sx={{
                    backgroundColor: 'primary.contrastText',
                    color: 'text.primary',
                  }}
                >
                  {tag}
                </Typography>
              ))}
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
                  aria-label={text.ariaLabel}
                  aria-pressed='false'
                  role='button'
                  target='_blank'
                  href={text.deployed}
                >
                  Deployed project
                </H6Variant>
              </Typography>
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
                  aria-label={text.ariaLabel}
                  aria-pressed='false'
                  role='button'
                  target='_blank'
                  href={text.github}
                >
                  <FontAwesomeIcon icon={faGithub} />
                </H6Variant>
              </Typography>
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

const H6Variant = styled('a')((props) => ({
  textDecoration: 'none',
  color: props.theme.palette.text.secondary,
  '&:hover': {
    color: props.theme.palette.text.primary,
  },
}));
