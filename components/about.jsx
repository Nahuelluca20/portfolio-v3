import {
  Stack,
  Text,
  Flex,
  Grid,
  GridItem,
  Link,
  Image as ChakraImage,
} from "@chakra-ui/react";

import { AnimationOnScroll } from "react-animation-on-scroll";
import SectionHeader from "./sectionHeader";
import "animate.css/animate.min.css";

function About() {
  const technologies = [
    "ReactJS",
    "NextJS",
    "TypeScript",
    "HTML",
    "CSS",
    "ChakraUI",
  ];

  return (
    <Stack id="about">
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
        <SectionHeader number="01." title="About Me" />
        <Grid rowGap="50px" gridTemplateColumns={{ lg: "repeat(2, 1fr)" }}>
          <GridItem>
            <Text color="white" fontSize="15px" lineHeight="1.5" mb="15px">
              Hi! My name is Nahuel and I enjoy programming. My interest in web
              development started in 2019 when I decided to create a business
              with a friend. turns out creating a website wasn ' t just about
              dragging stuff around!
            </Text>
            <Text color="white" fontSize="15px" lineHeight="1.5" mb="15px">
              Fast forward to today, and I have had the privilege of doing
              <Link
                color="color1.500"
                mx={2}
                href="https://github.com/Nahuelluca20"
                isExternal
              >
                personal projects
              </Link>
              as freelance work. I am currently interested in working as a web
              developer and growing in this area.
            </Text>
            <Text color="white" fontSize="15px" lineHeight="1.5" mb="15px">
              Here are a few technologies I’ve been working with recently:
            </Text>
            <Grid gridTemplateColumns="repeat(2, 1fr)" rowGap={2} mt={10}>
              {technologies.map((item) => (
                <Flex alignItems="center" key={item}>
                  <ChakraImage
                    src="https://img.icons8.com/ios-filled/100/ff9347/unchecked-radio-button.png"
                    width="20px"
                    height="18px"
                  />
                  <Text color="color1.200" ml={2} fontWeight="800">
                    {item}
                  </Text>
                </Flex>
              ))}
            </Grid>
          </GridItem>
          <GridItem justifySelf="center">
            {/* <Image src="https://brittanychiang.com/static/30a645f7db6038f83287d0c6042d3b2b/f9526/me.avif" width="500px" height="500px"/> */}
            <ChakraImage
              src="https://media-exp1.licdn.com/dms/image/C4D03AQEeHc1k2gXo6w/profile-displayphoto-shrink_800_800/0/1652651141646?e=1669248000&v=beta&t=baZRvD_Aej9Jed_iXKYqR2sYrucBcBSboUGDQqxtyFU"
              width={{ base: "227px", lg: "400px" }}
              height={{ base: "227px", lg: "400px" }}
            />
          </GridItem>
        </Grid>
      </AnimationOnScroll>
    </Stack>
  );
}

export default About;
