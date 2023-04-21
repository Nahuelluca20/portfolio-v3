import {Stack, Grid, GridItem} from "@chakra-ui/react";

import Img0 from "../public/files/pinterest.png";
import Img1 from "../public/files/aerolab.png";
import Img2 from "../public/files/bank.png";
import Img3 from "../public/files/flags.png";
import Img4 from "../public/files/space.png";
import Img5 from "../public/files/pokedux.png";
import Img6 from "../public/files/keep.png";

import CardProjects from "./cardProjects";
import SectionHeader from "./sectionHeader";

function Projects() {
  const projects = [
    {
      title: "Google Keep Clone",
      text: `Made with NextsJS, ChakraUI, Axios in the Frontend, NestJS, Mongoose and MongoAtlas in the Backend. Aun esta en desarrollo, pero se puede subir y borrar notas agregar,editar y borrar tags`,
      githubLink: "https://github.com/Nahuelluca20/google-keep-clone",
      deployLink: "https://keep-nahuel.netlify.app/",
      technologies: "Nextjs TypeScript ChakraUI API NestJS Mongoose MongoDB",
      direction: true,
      img: Img6,
    },
    {
      title: "Pinterest Clone",
      text: `Made with NextsJS, ChakraUI, Axios in the FrontEnd and with NodeJS, ExpressJS, Mongoose and MongoAtlas in the Backend. You can upload images with a title, see them and comment on them.`,
      githubLink: "https://github.com/Nahuelluca20/pinterest-clone",
      deployLink: "https://pinterest-clone-topaz.vercel.app/",
      technologies: "Nextjs TypeScript ChakraUI API Vercel",
      direction: false,
      img: Img0,
    },
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
      title: "Pokedux",
      text: `Usando Redux para manejar el estado este proyecto consume la API de pokemons, puedes guardarlos en favoritos y buscarlos.`,
      githubLink: "https://github.com/Nahuelluca20/pokedux",
      deployLink: "https://pokedux-web.netlify.app/",
      technologies: "ReactJS CSS API GitHub Redux Redux-toolkit",
      direction: false,
      img: Img5,
    },
    {
      title: "Easy Bank",
      text: `Easybank home page. Front End Mentor Challenge. Web page made with SCSS, HTML and JavaScript.`,
      githubLink: "https://github.com/Nahuelluca20/easy-bank-landingPage",
      deployLink: "https://easy-bank-landing-page2.netlify.app/",
      technologies: "JavaScript SCSS HTML GitHub",
      direction: true,
      img: Img2,
    },
    {
      title: "React Flag API",
      text: `Made with HTML, CSS and Javascript. This page is a challenge from FrontendMentor`,
      githubLink: "https://github.com/Nahuelluca20/space-tourism-website",
      deployLink: "https://space-tourismwebsite.netlify.app/index.html",
      technologies: "HTML, CSS, Javascrip",
      direction: false,
      img: Img4,
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
  ];

  return (
    <Stack id="projects">
      <SectionHeader number="02." title="Projects " />
      <Grid py={10} rowGap={{base: "25px", lg: "150px"}}>
        {projects.map((item) => (
          <GridItem key={item.title}>
            <CardProjects
              deployLink={item.deployLink}
              direction={item.direction}
              githubLink={item.githubLink}
              img={item.img}
              technologies={item.technologies}
              text={item.text}
              title={item.title}
            />
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
}

export default Projects;
