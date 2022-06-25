import SectionHeader from "./sectionHeader";
import { Stack, Text, Heading, Link, Button } from "@chakra-ui/react";

function Contact() {
  return (
    <Stack id="contact" pb={20}>
      <SectionHeader number="03." title="Contact Me" />
      <Stack textAlign="center" px={{ lg: "100px" }}>
        <Heading as="h3" color="color1.500" fontSize="40px" fontWeight="700">
          Get In Touch
        </Heading>
        <Text color="white" lineHeight="1.5" fontSize="15px" px={{ lg: "20" }} py={10}>
          I am currently looking for new opportunities, my direct messages are available. Whether it{"'"}s a question or a greeting. I will try to answer!
        </Text>
        <Link href="mailto:nahueldevelop@gmail.com" isExternal>
          <Button
            zIndex="-1"
            colorScheme="color1.500"
            variant="outline"
            color="color1.500"
            py="30px"
            px="50px"
            mt="26px"
          >
            Say Hello!
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
}

export default Contact;
