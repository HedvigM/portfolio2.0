import { Box, Paper, Typography } from '@mui/material';
import React from 'react';

export const TypographyStyle = () => (
  <Box mt={6}>
    <Paper>
      <Box p={2}>
        <Typography variant={'h1'}>This is a H1</Typography>
        <Typography variant={'h2'}>This is a H2</Typography>
        <Typography variant={'h3'}>This is a H3</Typography>
        <Typography variant={'h4'}>This is a H4</Typography>
        <Typography variant={'h5'}>This is a H5</Typography>
        <Typography variant={'h6'}>This is a H6</Typography>
        <Typography variant={'subtitle1'}>This is a subtitle 1</Typography>
        <Typography variant={'subtitle2'}>This is a subtitle 2</Typography>
        <Typography variant={'body1'}>This is a body 1</Typography>
        <Typography variant={'body2'}>This is a body 2</Typography>
        <p>This is a p</p>
        <p>
          <a href='https://mui.com/'>This is an a tag within an p tag</a>
        </p>
      </Box>
    </Paper>
  </Box>
);
