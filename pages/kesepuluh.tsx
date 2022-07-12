/* eslint-disable react/no-unescaped-entities */
import { Box, Button, styled, Typography } from "@mui/material";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import background from "../assets/images/hadiah.jpg";
import present from "../assets/images/kado.png";
import Typing from "react-typing-animation";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Container = styled(motion.main)`
  display: flex;
  flex-direction: row;
  padding: 0 1rem;
  overflow-x: scroll;
  height: 100vh;
  width: 100vw;
`;

const Title = styled(Typography)`
  font-size: 2rem;
  text-align: center;
`;

const MotionImage = motion(Image);

const Kesepuluh: NextPage = () => {
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
          width="100vw"
        >
          <Typing speed={100}>
            <Title variant="h1">Scroll lagi</Title>
          </Typing>
        </Box>
        {Array.from(Array(100).keys()).map((item) => (
          <Box
            key={item}
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            display="flex"
            width="100vw"
          >
            <Title variant="h2">
              ....................................................................................................
            </Title>
          </Box>
        ))}
        <Box
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          display="flex"
          width="100vw"
        >
          <Link href="/?jebakan=true">
            <Button
              variant="contained"
              disableElevation
              sx={{ marginTop: "2rem" }}
            >
              Lanjut
            </Button>
          </Link>
        </Box>
      </Container>
    </div>
  );
};

export default Kesepuluh;
