import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { ThoughtsText } from './Text';
import styled from '@emotion/styled';

export const Thoughts = () => {
  return (
    <Container sx={{ background: 'white' }}>
      <Container maxWidth='md'>
        <Box
          sx={{ display: 'flex', justifyContent: 'center', padding: '50px' }}
        >
          <Typography variant='h2'>My Thoughts</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '50px',
          }}
        >
          {ThoughtsText.map((text, index) => (
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingBottom: '20px',
                }}
              >
                <Image></Image>
              </Box>
              <Typography variant='h4'>{text.date}</Typography>
              <Typography variant='h5'>{text.name}</Typography>
              <Typography variant='body1'>{text.text}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Container>
  );
};

const Image = styled.div`
  background-color: #ff0063;
  width: 300px;
  height: 300px;
  display: block;

  :hover {
    background-color: turquoise;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
  }
`;
