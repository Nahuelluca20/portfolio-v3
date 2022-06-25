import { Stack, Link, Flex, Grid, GridItem, Divider } from "@chakra-ui/react";
import { FiGithub } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import { HiMail } from "react-icons/hi";


function Footer() {
  return (
    <Stack position={{lg: "fixed"}} bottom={{lg: "0"}} left={{lg: "8"}} className="fade-in">
      <Flex
        px={20}
        py={5}
        justifyContent="space-between"
        alignItems="center"
        display={{ base: "flex", lg: "none" }}
      >
        <Link href="https://github.com/Nahuelluca20" isExternal>
          <FiGithub size="30px" color="#ff9347" />
        </Link>
        <Link href="https://www.linkedin.com/in/nahueldevelop/" isExternal>
          <AiFillLinkedin size="30px" color="#ff9347" />
        </Link>
        <Link href="mailto:nahueldevelop@gmail.com">
          <HiMail size="37px" color="#ff9347" />
        </Link>
      </Flex>

      <Grid
        justifySelf="center"
        alignItems="center"
        display={{ base: "none", lg: "block" }}
      >
        <GridItem my={10}>
          <Link href="https://github.com/Nahuelluca20" py={20} isExternal>
            <FiGithub size="30px" color="#ff9347" />
          </Link>
        </GridItem>
        <GridItem my={10} justifySelf="center">
          <Link href="https://www.linkedin.com/in/nahueldevelop/" isExternal>
            <AiFillLinkedin size="30px" color="#ff9347" />
          </Link>
        </GridItem>
        <GridItem mt={10} mb={5} justifySelf="center">
          <Link href="mailto:nahueldevelop@gmail.com">
            <HiMail size="30px" color="#ff9347" />
          </Link>
        </GridItem>
        <Divider
          orientation="vertical"
          h="200px"
          ml={4}
          borderColor="color1.500"
        />
      </Grid>
    </Stack>
  );
}

export default Footer;
