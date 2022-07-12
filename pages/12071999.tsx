/* eslint-disable react/no-unescaped-entities */
import { Box, styled, Typography } from "@mui/material";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import background from "../assets/images/hadiah.jpg";
import Typing from "react-typing-animation";
import YouTube from 'react-youtube';

import Head from "next/head";

const Container = styled(motion.main)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;
  overflow-y: scroll;
`;

const Title = styled(Typography)`
  font-size: 2rem;
  text-align: center;
`;

const Final: NextPage = () => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div>
      <Head>
        <title>Happy Birthday 23th!</title>
        <meta
          name="description"
          content="Waw hebat sekali kamu! Sekarang kunjungi /terakhir"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <Box
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          display="flex"
          height="100vh"
        >
          <Typing speed={100}>
            <Title variant="h1">Hadiahnya adalah ini</Title>
          </Typing>
          {/* <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/NLQKZiCmxIM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <LiteYouTubeEmbed
            id="L2vS_050c-M"
            title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
          /> */}
          <YouTube videoId="NLQKZiCmxIM" opts={opts} />
        </Box>
      </Container>
    </div>
  );
};

export default Final;
