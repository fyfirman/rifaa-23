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
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;
  overflow-y: scroll;
`;

const Title = styled(Typography)`
  font-size: 2rem;
  text-align: center;
`;

const MotionImage = motion(Image);

const Home: NextPage = () => {
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
          <Typing speed={100}>
            <Title variant="h1">Klik tombol "Lanjut"</Title>
          </Typing>
        </Box>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
          (item, index) => (
            <Box
              key={item}
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              display="flex"
              height="1000vh"
            >
              <Title variant="h2">Yuk scroll</Title>
            </Box>
          )
        )}
        <Box
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          display="flex"
          height="100vh"
        >
          <Link href="/kedua">
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

export default Home;
