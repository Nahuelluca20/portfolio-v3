import { useState } from "react";
import { Button, Flex, Text, Image, Box, Link, Grid } from "@chakra-ui/react";

function Nav() {
  const [navState, setNavState] = useState(false);

  const links = [
    {
      text: "About",
      number: "01.",
      link: "#about",
    },
    {
      text: "Projects",
      number: "02.",
      link: "#projects",
    },
    {
      text: "Contact",
      number: "03.",
      link: "#contact",
    },
  ];
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      p={4}
      position="fixed"
      top="0"
      width="100%"
      backgroundColor="color1.50"
      zIndex="9"
    >
      <Link href="#iam">
        <Text color="color1.500">nahuel.luca()</Text>
      </Link>
      {navState ? (
        <Image
          src="https://img.icons8.com/ios/100/ff9347/delete-sign--v1.png"
          alt="menu"
          width="40px"
          onClick={() => setNavState(!navState)}
          position="relative"
          zIndex="10"
          display={{ base: "block", lg: "none" }}
        />
      ) : (
        <Image
          src="https://img.icons8.com/ios-glyphs/90/ffffff/menu--v1.png"
          alt="menu"
          width="40px"
          onClick={() => setNavState(!navState)}
          position="relative"
          zIndex="10"
          display={{ base: "block", lg: "none" }}
        />
      )}

      <Box
        className="nav"
        data-visible={navState}
        justifyContent="center"
        py="50px"
        px="10px"
        alignItems="center"
        outline="0"
        zIndex={9}
        height="100hv"
        position="fixed"
        right="0"
        top="0"
        bottom="0"
        width="min(75vw, 400px)"
        backgroundColor="color1.100"
        display={{ base: "flex", lg: "none" }}
      >
        <Grid rowGap={10}>
          {links.map((item) => (
            <Link
              textAlign="center"
              key={item.text}
              href={item.link}
              onClick={() => setNavState(!navState)}
            >
              <Text color="color1.500">{item.number}</Text>
              <Text color="white">{item.text}</Text>
            </Link>
          ))}
          <Link href="/files/resume.pdf" isExternal>
            <Button
              colorScheme="color1.500"
              variant="outline"
              color="color1.500"
              py="30px"
              px="50px"
              mt="26px"
            >
              Resume
            </Button>
          </Link>
        </Grid>
      </Box>

      <Flex alignItems="center" display={{ base: "none", lg: "flex" }}>
        {links.map((item) => (
          <Link
            mx={5}
            textAlign="center"
            key={item.text}
            href={item.link}
            onClick={() => setNavState(!navState)}
          >
            <Flex>
              <Text color="color1.500">{item.number}</Text>
              <Text color="white">{item.text}</Text>
            </Flex>
          </Link>
        ))}
        <Link href="/files/resume.pdf" isExternal ml={5}>
          <Button
            colorScheme="color1.500"
            variant="outline"
            color="color1.500"
            px="10px"
          >
            Resume
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}

export default Nav;
