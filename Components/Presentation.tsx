import { Box, Container } from '@mui/material';
import React from 'react';
import { Body1 } from 'styles/theme';
import { PresentationText } from './Text';

export const Presentation = () => {
  return (
    <Box sx={{ backgroundColor: 'primary.main' }}>
      <Container maxWidth='sm' sx={{ padding: '50px' }}>
        {PresentationText.map((text, index) => (
          <Body1 sx={{ color: 'text.primary' }}>
            <Box
              aria-hidden='true'
              sx={{
                border: '1px solid',
                color: 'secondary.contrastText',
                width: '40px',
                display: 'inline-block',
                marginBottom: '4px',
              }}
            ></Box>
            <Box
              aria-hidden='true'
              sx={{
                height: '10px',
                width: '10px',
                backgroundColor: 'secondary.contrastText',
                borderRadius: '50%',
                display: 'inline-block',
                position: 'relative',
                left: '-5px',
              }}
            ></Box>
            {text.paragraphOne}
            <br />
            <br />
            {text.paragraphTwo}
          </Body1>
        ))}
      </Container>
    </Box>
  );
};
