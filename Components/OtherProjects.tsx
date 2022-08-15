import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Container } from '@mui/material';
import React from 'react';
import { OtherProjectsText } from './Text';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Body1, H2, H3, H6, H6Link } from 'styles/theme';

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
          <Box key={index} sx={{ paddingBottom: '20px' }}>
            <H3>{text.name}</H3>
            <Body1>{text.description}</Body1>
            <Box sx={{ marginTop: '15px' }}>
              {text.tags.map((tag, index) => (
                <H6 key={index}>{tag}</H6>
              ))}
              <H6Link>
                <a
                  aria-label={text.ariaLabel}
                  aria-pressed='false'
                  role='button'
                  target='_blank'
                  href={text.deployed}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  Deployed project
                </a>
              </H6Link>
              <H6Link>
                <a
                  aria-label={text.ariaLabel}
                  aria-pressed='false'
                  role='button'
                  target='_blank'
                  href={text.github}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </H6Link>
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
};
