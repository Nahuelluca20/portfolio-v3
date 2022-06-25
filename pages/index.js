import Iam from "../components/iam";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Head from 'next/head'
import { Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Stack px={{ base: "25px", lg: "150px" }}>
      <Head>
        <title>Nahuel Luca</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Iam />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Stack>
  );
}
