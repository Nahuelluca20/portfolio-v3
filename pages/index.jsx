import React from 'react';
import { Stack } from '@chakra-ui/react';
import Iam from '../components/iam';
import About from '../components/about';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Footer from '../components/footer';

export default function Home() {
  return (
    <Stack px={{ base: '25px', lg: '150px' }}>
      <Iam />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Stack>
  );
}
