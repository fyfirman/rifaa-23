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

const AppContainer = styled(motion.div)``;

const Container = styled(motion.main)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 0 1rem;
  overflow: hidden;
`;

const Title = styled(Typography)`
  font-size: 2rem;
  text-align: center;
`;

const MotionImage = motion(Image);

const Home: NextPage = () => {
  return (
    <AppContainer>
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
          display={"flex"}
          flexDirection="column"
          alignItems="center"
        >
          <motion.div
            animate={{
              scale: [1, 1.25, 1.25, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            <Image src={present} alt="hadiah" />
          </motion.div>
          <Typing speed={100}>
            <Title variant="h1">Selamat kamu mendapatkan hadiah!</Title>
          </Typing>
        </Box>
        <Link href="/hadiah/lagi">
          <Button
            variant="contained"
            disableElevation
            sx={{ marginTop: "2rem" }}
          >
            Lanjut
          </Button>
        </Link>
      </Container>
    </AppContainer>
  );
};

export default Home;
