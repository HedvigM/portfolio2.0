import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { Header } from "../Components/Header";
import { Presentation } from "../Components/Presentation";
import { FeaturedProjects } from "../Components/FeaturedProjects";
import { OtherProjects } from "../Components/OtherProjects";
import { Thoughts } from "../Components/Thoughts";
import { Skills } from "../Components/Skills";
import { ForMore } from "../Components/ForMore";
import { Contact } from "../Components/Contact";

const IndexPage: NextPage<{}> = ({}) => {
  return (
    <>
      <Head>
        <title>Hedvigs portfolio</title>
      </Head>
      <Header />
      {/* <Presentation /> */}
      <FeaturedProjects />
      {/* <OtherProjects /> */}
      <Thoughts />
      <Skills />
      {/* <ForMore /> */}
      <Contact />
    </>
  );
};

export default IndexPage;
