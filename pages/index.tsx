import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Container } from '@mui/material';
import { Header } from './Header';
import { Presentation } from './Presentation';
import { FeaturedProjects } from './FeaturedProjects';
import { OtherProjects } from './OtherProjects';
import { Thoughts } from './Thoughts';
import { Skills } from './Skills';
import { ForMore } from './ForMore';
import { Contact } from './Contact';

const IndexPage: NextPage<{}> = ({}) => {
  return (
    <>
      <Head>
        <title>Hedvigs portfolio</title>
      </Head>
      <Header />
      <Presentation />
      <FeaturedProjects />
      <OtherProjects />
      <Thoughts />
      <Skills />
      <ForMore />
      <Contact />
    </>
  );
};

export default IndexPage;
