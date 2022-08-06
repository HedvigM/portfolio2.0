import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Container, Box, Paper, Typography } from '@mui/material';

const IndexPage: NextPage<{}> = ({}) => {
  return (
    <Container maxWidth="md">
      <Head>
        <title>NextJS Typescript Starter</title>
      </Head>
      <Box mt={6}>
        <Paper>
          <Box p={2}>
            <Typography variant={'h1'}>
              Opinionated NextJS Typescript starter
            </Typography>
            <Typography variant={'subtitle1'}>With Material-UI</Typography>
            <p>
              This is my preferred starter template for building NextJS apps in
              Typescript. This version also includes{' '}
              <a href="https://mui.com/">MUI</a> (formerly known as Material UI)
              for quicker prototyping.
            </p>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default IndexPage;
