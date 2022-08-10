import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { PresentationText } from './Text';

export const Presentation = () => {
  return (
    <Box sx={{ background: '#EAF6F6' }}>
      <Container maxWidth='sm' sx={{ padding: '50px' }}>
        {PresentationText.map((text, index) => (
          <Typography variant='body1'>
            <Box
              aria-hidden='true'
              sx={{
                border: '1px solid',
                color: 'primary.main',
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
                backgroundColor: 'primary.main',
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
          </Typography>
        ))}
      </Container>
    </Box>
  );
};
