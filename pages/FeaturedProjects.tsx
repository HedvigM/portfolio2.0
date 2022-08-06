import { Box, Container, Typography } from '@mui/material';
import React from 'react';

export const FeaturedProjects = () => {
  return (
    <Container sx={{ background: 'black' }}>
      <Container maxWidth='md'>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant='h2'>Featured Projects</Typography>
        </Box>
        <Typography variant='h6'>React</Typography>
        <Typography variant='h6'>React</Typography>
        <Typography variant='h6'>React</Typography>
        <Typography variant='h6'>React</Typography>
      </Container>
    </Container>
  );
};
