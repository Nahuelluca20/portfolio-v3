import SectionHeader from "./sectionHeader";
import CardProjects from "./cardProjects";
import { Stack, Grid, GridItem } from "@chakra-ui/react";
import Img1 from "../public/files/aerolab.png";
import Img2 from "../public/files/bank.png";
import Img3 from "../public/files/flags.png";
import Img4 from "../public/files/ip.png";

function Projects() {
  const projects = [
    {
      title: "Aerolab Challenge",
      text: `This project is a challenge of the company Aerolab where products are obtained from an API and can be purchased with coins on the web.`,
      githubLink: "https://github.com/Nahuelluca20/arerolab-challenge",
      deployLink: "https://arerolab-challenge1.vercel.app/",
      technologies: "Nextjs TypeScript ChakraUI API Vercel",
      direction: true,
      img: Img1,
    },
    {
      title: "Easy Bank",
      text: `Easybank home page. Front End Mentor Challenge. Web page made with SCSS, HTML and JavaScript.`,
      githubLink: "https://github.com/Nahuelluca20/easy-bank-landingPage",
      deployLink: "https://nahuelluca20.github.io/easy-bank-landingPage/",
      technologies: "JavaScript SCSS HTML GitHub",
      direction: false,
      img: Img2,
    },
    {
      title: "React Flag API",
      text: `Made with ReactJS, Redux and Styled-Components, this website consumes data from a flags API to be able to search for different countries in the world.`,
      githubLink: "https://github.com/Nahuelluca20/react-flag-API",
      deployLink: "https://react-flag-api.netlify.app/",
      technologies: "ReactJS Styled-Components API GitHub Redux",
      direction: true,
      img: Img3,
    },
    {
      title: "IP Address Tracker",
      text: `Track some IP with a Geolocation API and then show it on the map. Website made with JavaScript, HTML and CSS.`,
      githubLink: "https://github.com/Nahuelluca20/ip-address-tracker",
      deployLink: "https://ip-addresstracker-reactjs.netlify.app/",
      technologies: "JavaScript HTML CSS API GitHub",
      direction: false,
      img: Img4,
    },
  ];
  return (
    <Stack id="projects">
      <SectionHeader number="02." title="Projects " />
      <Grid rowGap={{ base: "25px", lg: "150px" }} py={10}>
        {projects.map((item) => (
          <GridItem key={item.title}>
            <CardProjects
              title={item.title}
              text={item.text}
              githubLink={item.githubLink}
              deployLink={item.deployLink}
              technologies={item.technologies}
              direction={item.direction}
              img={item.img}
            />
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
}

export default Projects;
