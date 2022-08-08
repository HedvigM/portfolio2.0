import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Container, Typography } from '@mui/material';
import styled from '@emotion/styled';
import React from 'react';
import { OtherProjectsText } from './Text';
import { grey } from '@mui/material/colors';

export const OtherProjects = () => {
  return (
    <Box sx={{ background: '#EAF6F6' }}>
      <Container maxWidth='md'>
        <Box
          sx={{ display: 'flex', justifyContent: 'center', padding: '50px' }}
        >
          <Typography variant='h2'>Other Projects</Typography>
        </Box>
        {OtherProjectsText.map((text, index) => (
          <Box sx={{ paddingBottom: '20px' }}>
            <Typography key={index} variant='h3'>
              {text.name}
            </Typography>
            <Typography variant='body1'>{text.description}</Typography>
            <Box sx={{ marginTop: '15px' }}>
              {text.tags.map((tag, index) => (
                <Typography key={index} variant='h6'>
                  {tag}
                </Typography>
              ))}
              <Typography
                variant='h6'
                sx={{ backgroundColor: 'secondary.main', color: 'white' }}
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
                sx={{ backgroundColor: 'secondary.main' }}
              >
                <H6Variant
                  aria-label={text.ariaLabel}
                  aria-pressed='false'
                  role='button'
                  target='_blank'
                  href={text.github}
                >
                  <FontAwesomeIcon icon={[text.iconImage1, text.iconImage2]} />
                </H6Variant>
              </Typography>
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

const H6Variant = styled.a`
  color: white;
  text-decoration: none;
`;
