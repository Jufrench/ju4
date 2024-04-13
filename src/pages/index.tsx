import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";

import { rem, Center, Container, SimpleGrid, Grid, Space, Box,
  ActionIcon, Stack, Title, Group, Anchor, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconMenu2 } from '@tabler/icons-react';
import { ReactNode } from "react";


const inter = Inter({ subsets: ["latin"] });

const sectionContentWidth = '90%';
const sectionContentStyle = {
  width: sectionContentWidth,
  // border: '1px solid tomato',
  // background: 'indianred',
  padding: rem(20)
};

const Header = () => {
  const headerStyle: React.CSSProperties = {
    // textAlign: "center"
    // display: "flex",
    // width: '80%',
    border: '2px solid limegreen',
    // marginBottom: 
  }

  return (
    <header style={headerStyle}>
      <Center>
        <Container style={sectionContentStyle}>
          Header
        </Container>
      </Center>
    </header>
  )
};

const HeaderMobile = () => {
  return (
    <header>
      <Container p={10} pr={0} style={{...sectionContentStyle, textAlign: "right"}}>
        <ActionIcon variant="outline" color="gray" size="xl"><IconMenu2 stroke={3} /></ActionIcon>
      </Container>
    </header>
  )
};

const Hero = () => {
  const heroStyle = {
    height: '400px',
  };

  return (
    // <Center component="main" style={{border: "1px solid dodgerblue"}}>
    //   <Container style={sectionContentStyle}>
    //     <SimpleGrid>
    //       <Grid>
    //         <Grid.Col>1</Grid.Col>
    //         <Grid.Col>2</Grid.Col>
    //       </Grid>
    //     </SimpleGrid>
    //   </Container>
    // </Center>
    // ================
    <Center component="section" style={{border: '1px solid tomato'}}>
      <Stack style={{width: sectionContentWidth, ...heroStyle}} gap={0}>
        <Box bg="gray" style={{height: "30%"}}></Box>
        <Box bg="#00adad" style={{flexGrow: 1}}></Box>
      </Stack>
    </Center>
  )
}

const About = () => {
  const aboutStyle = {
    border: '1px solid gray'
  };

  return (
    <Center component="section">
      <Stack style={{...sectionContentStyle, ...aboutStyle}} gap={0}>
        About Section
      </Stack>
    </Center>
  )
}

const Projects = (props: {projectList: string[]}) => {
  const projectsStyle = {
    border: '1px solid gray'
  };

  // return (
  //   <Center component="section">
  //     <Stack style={{...sectionContentStyle, ...projectsStyle}} gap={0}>
  //       Projects Section
  //       {props.projectList.map((project: string) => {
  //         return (
  //           <ProjectItem key={project} projectName={project} />
  //         );
  //       })}
  //     </Stack>
  //   </Center>
  // )
  // ===================
  return (
    <Center component="section">
      <SimpleGrid style={{...sectionContentStyle, ...projectsStyle}} spacing="md">
        Projects Section
        {props.projectList.map((project: string) => {
          return (
            <ProjectItem key={project} projectName={project} />
          );
        })}
      </SimpleGrid>
    </Center>
  )
};

const projectList: string[] = ['Flag Doyen', 'Mai Globo'];

const ProjectItem = (props: {key: string, projectName: string}) => {
  return (
    <Box style={{border: "1px solid tomato"}}>
      <Title style={{color: "tomato"}}>{props.projectName}</Title>
    </Box>
  )
};

console.log('%cLOOK AT THESE LINKS!!!', 'color:tomato');
// https://www.google.com/search?client=firefox-b-1-d&sca_esv=4cb3c826a86dcae5&sca_upv=1&q=web+design+color+block&uds=AMwkrPt6dIXnRtjJz8sZ_2oc3TNl7swDuY2ybJ8dP31B2vkvi493dLtGR_N7ONogqeI5XNt-cDfG6nQnWOpKejLQ7xAPQBRByBTfDqEKRw863uKDMTKG8J_oApJ1mR1I8_dPX3YLDMVyP14nnMCYTMvz-hCbJ3FPYQS_S0r3UP_IvN8vBDnT78FcAbc4m7kAciPm-TCLHcxPau6S7ev-z-XTQrXNFd44Q30_jMdOiJR_5jx73zbFMO5891DbFUriLSMhwOXRgxXfymmEn7-pu154aMDJ7wH70HE4upI3-bTCBCx6tjQ45hc1V5NvKxI44TFIVXRDeYO4&udm=2&prmd=isvnmbtz&sa=X&ved=2ahUKEwii97WC9raFAxWMTDABHT4FCVsQtKgLegQICRAB&biw=1440&bih=762&dpr=2#vhid=Hiv4PoFgBGdiEM&vssid=mosaic
// https://www.pinterest.com/pin/491596115549332325/
// https://i.pinimg.com/originals/a2/e4/02/a2e402b64981ccddd1452699057b12ab.jpg
// https://i.pinimg.com/originals/0c/bb/dc/0cbbdc2696c6c524ea261b6aec3240a4.jpg

const contactInfo: { [key:string]: string | ReactNode | undefined }[] = [
  {
    name: "Github",
    url: "https://www.github.com/Jufrench",
    // icon: <IconBrandGithubFilled />
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/julesfrench/",
    // icon: <IconBrandLinkedin />
  },
  {
    name: "Email",
    url: "mailto:ju.french@gmail.com",
    // icon: <IconMailFilled />
  },
  {
    name: "Ko-Fi",
    url: "https://ko-fi.com/moijules",
    // customIcon: <KofiIcon />
  }
]

const Footer = () => {
  const footerStyle = {
    border: '1px solid gray',
    background: '#00adad'
  };

  return (
    <Center component="footer">
      <Group style={{...sectionContentStyle, ...footerStyle}} justify="flex-end">
        <Text span style={{marginRight: "auto"}}>Jules</Text>
        <Group>
          {contactInfo.map((item: { [key:string]: string | ReactNode | undefined }) => {
            return <Anchor c="black" href={(item.url as string)} target="_blank">{item.name}</Anchor>
          })}
        </Group>
      </Group>
    </Center>
  )
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderMobile />
      {/* <Header /> */}
      <Space h="lg" />
      <Stack component="main" gap="xl">
        <Hero />
        <About />
        <Projects projectList={projectList} />
        <Footer />
      </Stack>
      {/* <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Docs <span>-&gt;</span>
            </h2>
            <p>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Learn <span>-&gt;</span>
            </h2>
            <p>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Deploy <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main> */}
    </>
  );
}
