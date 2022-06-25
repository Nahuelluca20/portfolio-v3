import { Stack, Text, Heading, Flex, Link } from "@chakra-ui/react";

function Iam() {
  return (
    <Stack mt="120px" id="iam">
      <Text color="color1.500" fontSize={{ base: "16px", lg: "20px" }} className="slide-in-top">
        Hi, my name is
      </Text>
      <Heading as="h1" color="white" fontSize={{ base: "40px", lg: "70px" }} className="slide-in-top-1">
        Nahuel Luca.
      </Heading>
      <Heading as="h2" color="color1.200" fontSize={{ base: "40px", lg: "70px" }} lineHeight="0.9" className="slide-in-top-2">
        I am a Front-End developer.
      </Heading>
      <Text pt="30px" maxWidth="540px" lineHeight="1.3" color="white" className="slide-in-top-3">
        I{"'"}m a Front-End Developer who specializes in creating (and
        occasionally designing) web pages. Currently, I work with technologies
        like ReactJS, NextJS, ChakraUI, etc.
      </Text>
      <Stack>
        <Link
          className="slide-in-top-4"
          mt={10}
          colorScheme="color1.500"
          variant="outline"
          color="color1.500"
          width="231px"
          height="56px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          border="1px"
          borderColor="color1.500"
          href="#contact"
        >
          Get In Touch
        </Link>
      </Stack>
    </Stack>
  );
}

export default Iam;
