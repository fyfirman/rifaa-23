/* eslint-disable react/no-unescaped-entities */
import { Button, styled, Typography } from "@mui/material";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import Typing from "react-typing-animation";
import background from '../assets/images/rifaa.jpg';

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const AppContainer = styled(motion.div)``;

const Container = styled(motion.main)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 0 1rem;
`;

const Title = styled(Typography)`
  font-size: 6rem;
`;

const Home: NextPage = () => {
  const router = useRouter();
  const { jebakan } = router.query;

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
        }}>
        <Title variant="h1">Happy<br/>Birtday<br/>23th!</Title>
        <Typing loop speed={100}>
          <Typography variant="h2" sx={{ fontSize: "1.7rem", height: "5.1rem"}}>
            Special for : <Typing.Delay ms={500} /> <br />
            Rifaa' Zalfaa' Fakhriyah
            <Typing.Delay ms={4000} />
          </Typography>
          <Typing.Backspace count={42} />
        </Typing>
        <Link href="/hadiah">
          <Button variant="contained" disableElevation>
            Start
          </Button>
        </Link>
      </Container>
      {jebakan === "true" && <Link href="/final">
        <Button variant="contained" disableElevation>
          Lanjut
        </Button>
      </Link>}
    </AppContainer>
  );
};

export default Home;
