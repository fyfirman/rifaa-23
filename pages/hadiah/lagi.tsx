/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Grid, styled, Typography } from "@mui/material";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import background from "../../assets/images/hadiah.jpg";
import Typing from "react-typing-animation";

import Head from "next/head";
import { useState } from "react";
import randomIntFromInterval from "../../helpers/randomIntFromInterval";
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

const MauButton = styled(Button)`
  height: 100%;
  width: 100%;
  display: flex;
  border-radius: 8px;
  color: #0f0f0f;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.palette.grey[200]};
`;

const copy: { [key: number]: string } = {
  1: "Mau",
  2: "Boleh",
  3: "Mau lah!",
  4: "Ga nolak",
  5: "Please mauuu",
  6: "Yaudah deh",
  7: "Hmmmm",
  8: "Sok",
  9: "Manaa?!",
};

const Home: NextPage = () => {
  const [count, setCount] = useState(0);
  const [showButton, setShowButton] = useState(1);

  const handleMau = () => {
    setCount((prev) => prev + 1);
    setShowButton((prev) => {
      const nextButton = randomIntFromInterval(1, 9);
      if (nextButton === prev) {
        return randomIntFromInterval(1, 9);
      }

      return nextButton;
    });
  };

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
          <Typing speed={100}>
            <Title variant="h1">Kamu mau hadiah lagi?</Title>
          </Typing>
        </Box>
        <Grid height="90vw" width="90vw" container marginTop={4}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <Grid item xs={4} key={item}>
              {showButton === item &&
                (count > 9 && item === 5 ? (
                  <Link href="/pertama">
                    <Button
                      onClick={handleMau}
                      variant="contained"
                      sx={{ height: "100%", width: "100%" }}
                    >
                      Lanjut
                    </Button>
                  </Link>
                ) : (
                  <MauButton onClick={handleMau} variant="contained">
                    {copy[item]}
                  </MauButton>
                ))}
            </Grid>
          ))}
        </Grid>
      </Container>
    </AppContainer>
  );
};

export default Home;
