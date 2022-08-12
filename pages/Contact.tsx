import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';
import { ContactText } from './Text';

export const Contact = () => {
  return (
    <Box sx={{ backgroundColor: 'primary.contrastText' }}>
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
              <Typography
                variant='h2'
                sx={{
                  backgroundColor: 'primary.contrastText',
                  color: 'text.primary',
                }}
              >
                {contact.heading}
              </Typography>
              <Typography
                variant='h4'
                color='text.primary'
                textAlign='center'
                padding='5px'
              >
                {contact.name}
              </Typography>
              <Typography
                variant='h4'
                color='text.primary'
                textAlign='center'
                padding='5px'
                sx={{ textAlign: 'center' }}
              >
                <A href='tel:+46705120226'>{contact.number}</A>
              </Typography>
              <Typography
                variant='h4'
                color='text.primary'
                textAlign='center'
                padding='5px'
                sx={{ textAlign: 'center' }}
              >
                <A href='mailto:hedvig@mejstedt.se'>{contact.email}</A>
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

const A = styled('a')((props) => ({
  color: props.theme.palette.text.primary,
  textDecoration: 'none',

  '&:hover': {
    color: props.theme.palette.secondary.contrastText,
    textDecoration: 'underline',
  },
}));
