/* eslint-disable react/no-unescaped-entities */
import { Box,  styled, Typography } from "@mui/material";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import background from "../assets/images/hadiah.jpg";
import Typing from "react-typing-animation";

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
  return (
    <div>
      <Head>
        <title>Happy Birthday 23th!</title>
        <meta name="description" content="Waw hebat sekali kamu! Sekarang kunjungi /12071999" />
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
          <Title variant="h1">Petunjuk</Title>
          <Typing speed={100}>
            <Title variant="h2">Meta description</Title>
          </Typing>
        </Box>
      </Container>
    </div>
  );
};

export default Final;
