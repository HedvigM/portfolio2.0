import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Container, Box, Paper, Typography } from '@mui/material';
import { Header } from './Header';
import { Presentation } from './Presentation';
import { FeaturedProjects } from './FeaturedProjects';
import { OtherProjects } from './OtherProjects';
import { Thoughts } from './Thoughts';

const IndexPage: NextPage<{}> = ({}) => {
  return (
    <Container disableGutters='true'>
      <Head>
        <title>Hedvigs portfolio</title>
      </Head>
      <Header />
      <Presentation />
      <FeaturedProjects />
      <OtherProjects />
      <Thoughts />
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
    </Container>
  );
};

export default IndexPage;
