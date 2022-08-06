import { Box, Container, Typography } from '@mui/material';
import React from 'react';

export const Presentation = () => {
  return (
    <Container sx={{ background: '#EAF6F6' }}>
      <Container maxWidth='md' sx={{ padding: '50px 0' }}>
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
          Hello! I am a frontend developer who is not afraid to venture into new
          situations in search of new knowledge or challenges.
          <br />
          <br />I am a trained social worker that recently graduated from
          Technigo's 24 week bootcamp where I spent every day learning about web
          technologies. I loved every second of it, and I'm looking forward to
          working as a frontend developer and being a part of the community and
          the forward movement.
        </Typography>
      </Container>
    </Container>
  );
};
