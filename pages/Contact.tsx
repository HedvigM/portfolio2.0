import { Box, Container, styled, Typography } from '@mui/material';
import React from 'react';
import { H2, H4 } from 'styles/theme';
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
              <H2
                sx={{
                  backgroundColor: 'primary.contrastText',
                  color: 'text.primary',
                }}
              >
                {contact.heading}
              </H2>
              <H4
                sx={{
                  color: 'text.primary',
                  textAlign: 'center',
                  padding: '5px',
                  margin: '0',
                }}
              >
                {contact.name}
              </H4>
              <H4
                sx={{
                  color: 'text.primary',
                  textAlign: 'center',
                  padding: '5px',
                  margin: '0',
                }}
              >
                <A href='tel:+46705120226'>{contact.number}</A>
              </H4>
              <H4>
                <A
                  href='mailto:hedvig@mejstedt.se'
                  sx={{
                    color: 'text.primary',
                    textAlign: 'center',
                    padding: '5px',
                    margin: '0',
                  }}
                >
                  {contact.email}
                </A>
              </H4>
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
