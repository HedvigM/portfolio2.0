import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Container, styled, Typography } from '@mui/material';
import React from 'react';
import { OtherProjectsText } from './Text';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Body1, H2, H3, H6 } from 'styles/theme';

export const OtherProjects = () => {
  return (
    <Box sx={{ backgroundColor: 'primary.main' }}>
      <Container maxWidth='md'>
        <Box
          sx={{ display: 'flex', justifyContent: 'center', padding: '50px' }}
        >
          <H2>Other Projects</H2>
        </Box>
        {OtherProjectsText.map((text, index) => (
          <Box sx={{ paddingBottom: '20px' }}>
            <H3>{text.name}</H3>
            <Body1>{text.description}</Body1>
            <Box sx={{ marginTop: '15px' }}>
              {text.tags.map((tag, index) => (
                <H6
                  key={index}
                  sx={{
                    backgroundColor: 'primary.contrastText',
                    color: 'text.primary',
                  }}
                >
                  {tag}
                </H6>
              ))}
              <H6Variant
                aria-label={text.ariaLabel}
                aria-pressed='false'
                role='button'
                target='_blank'
                href={text.deployed}
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
              <H6Variant
                aria-label={text.ariaLabel}
                aria-pressed='false'
                role='button'
                target='_blank'
                href={text.github}
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
                  <FontAwesomeIcon icon={faGithub} />
                </H6>
              </H6Variant>
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
