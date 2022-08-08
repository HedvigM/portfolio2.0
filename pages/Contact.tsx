import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';
import { ContactText } from './Text';

export const Contact = () => {
  return (
    <Box sx={{ background: '#66bfbf' }}>
      <Container maxWidth='md'>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '50px',
            textAlign: 'center',
          }}
        >
          {ContactText.map((contact, index) => (
            <Box key={index}>
              <Typography variant='h2'>{contact.heading}</Typography>
              <Typography
                variant='body1'
                sx={{ color: 'white', textAlign: 'center' }}
              >
                {contact.name}
              </Typography>
              <Typography
                variant='body1'
                sx={{ color: 'white', textAlign: 'center' }}
              >
                {contact.number}
              </Typography>
              <Typography
                variant='body1'
                sx={{ color: 'white', textAlign: 'center' }}
              >
                {contact.email}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

const Heading = styled.p`
  font-size: 1.7rem;
  font-weight: 700;
  font-family: Roboto;
  text-transform: uppercase;
  color: white;
  margin: 0;
`;
