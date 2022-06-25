import { Stack, Heading, Text, Flex, Link } from "@chakra-ui/react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

import Image from "next/image";

function CardProjects({
  title,
  text,
  technologies,
  githubLink,
  deployLink,
  direction,
  img,
}) {
  const itemDirection = direction;
  return (
    <Stack>

      {itemDirection ? (
        <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce={true}>
          <Flex alignItems="center" flexDirection={{ base: "column", lg: "row" }} className="slide-in-right">
            <Stack
              position="abosolute"
              width={{ base: "100%", lg: "700px" }}
              height={{ base: "200px", lg: "400px" }}
              zIndex="-1"
            >
              <Image src={img} alt={title} width="100%" layout="responsive" />
            </Stack>
            <Stack
              backgroundColor="color1.100"
              width={{ lg: "600px" }}
              px="25px"
              pt="30px"
              pb="20px"
              ml={{ lg: "-200px" }}
            >
              <Stack>
                <Heading
                  as="h1"
                  color="white"
                  fontSize="16px"
                  fontWeight="500"
                  my="5px"
                >
                  Featured Project
                </Heading>
                <Link
                  href={deployLink}
                  color="color1.500"
                  fontSize="25px"
                  fontWeight="800"
                  isExternal
                >
                  {title}
                </Link>
              </Stack>
              <Text py="15px" color="white" lineHeight="1.5">
                {text}
              </Text>
              <Text color="white" fontSize="13px" fontWeight="300">
                {technologies}
              </Text>
              <Flex pt={10}>
                <Link href={githubLink} isExternal mr={5}>
                  <FiGithub color="#ff9347" size="30px" />
                </Link>
                <Link href={deployLink} isExternal mr={5}>
                  <FiExternalLink color="#ff9347" size="30px" />
                </Link>
              </Flex>
            </Stack>
          </Flex>
        </AnimationOnScroll>
      ) : (
        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
          <Flex
            alignItems="center"
            flexDirection={{ base: "column-reverse", lg: "row" }}
          >
            <Stack
              backgroundColor="color1.100"
              px="25px"
              pt={{ base: "30px", lg: "10px" }}
              pb={{ base: "20px", lg: "10px" }}
              mr={{ lg: "-200px" }}
              width={{ lg: "600px" }}
            >
              <Stack>
                <Heading
                  as="h1"
                  color="white"
                  fontSize="16px"
                  fontWeight="500"
                  my="5px"
                >
                  Featured Project
                </Heading>
                <Link
                  href={deployLink}
                  color="color1.500"
                  fontSize="25px"
                  fontWeight="800"
                  isExternal
                >
                  {title}
                </Link>
              </Stack>
              <Text py="15px" color="white" lineHeight="1.5">
                {text}
              </Text>
              <Text color="white" fontSize="13px" fontWeight="300">
                {technologies}
              </Text>
              <Flex pt={10}>
                <Link href={githubLink} isExternal mr={5}>
                  <FiGithub color="#ff9347" size="30px" />
                </Link>
                <Link href={deployLink} isExternal mr={5}>
                  <FiExternalLink color="#ff9347" size="30px" />
                </Link>
              </Flex>
            </Stack>
            <Stack
              position="abosolute"
              width={{ base: "100%", lg: "700px" }}
              height={{ base: "200px", lg: "400px" }}
              zIndex="-1"
            >
              <Image src={img} alt={title} layout="responsive" width="100%" />
            </Stack>
          </Flex>
        </AnimationOnScroll>
      )}
    </Stack>
  );
}

export default CardProjects;
