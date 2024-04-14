import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";

import { rem, Center, Container, SimpleGrid, Grid, Space, Box,
  ActionIcon, Stack, Title, Group, Anchor, Text, Divider, Card } from '@mantine/core';
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
      <Group style={{width: "90%", padding: `${rem(10)} 0`, margin: "0 auto"}} justify="space-between">
        <Title order={1} size="h2"><span style={{textDecoration: "underline"}}>Ju</span><span>lian</span></Title>
        <ActionIcon variant="outline" color="gray" size="xl"><IconMenu2 stroke={3} /></ActionIcon>
      </Group>
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
        {/* <Box bg="gray" style={{height: "30%"}}></Box> */}
        <Box
          style={{
            height: "50%",
            background: 'repeating-linear-gradient(45deg, rgba(51, 51, 51, 0.3), rgba(51, 51, 51, 0.3) 7px, lightgray 5px, lightgray 16px)'
          }}/>
        <Box bg="#00adad" style={{flexGrow: 1}}></Box>
      </Stack>
    </Center>
  )
}

const About = () => {
  const aboutStyle = {
    border: '1px solid lightgray'
  };

  return (
    <Center component="section">
      <Stack style={{...sectionContentStyle, ...aboutStyle}} gap={0}>
        <Title size="h3">Who</Title>
        <Text>Hello.</Text>
        <Text>I'm Web Developer & aspiring Full-Stack Developer. My traditional educational & collegiate background is in Music & Foreign Languages. I decided to make a career out of Web Development when I allowed myself to follow my curiosities about coding.</Text>
        <Divider my="xs" />
        <Text>Currently I'm pursuing an associate's degree in Computer Information Systems while working full time as a Front-end Developer.</Text>
      </Stack>
    </Center>
  )
}

const Projects = (props: {projectList: string[]}) => {
  const projectsStyle = {
    border: '1px solid gray'
  };

  const ProjectItem = (props: {key: string, projectName: string}) => {
    return (
      <Card style={{border: "1px solid gray", borderRadius: 0}}>
        <Title size="h5" style={{color: "gray"}}>{props.projectName}</Title>
      </Card>
    )
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
        <Title size="h3">Projects</Title>
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

console.log('%cLOOK AT THESE LINKS!!!', 'color:tomato');
// https://www.pinterest.com/pin/491596115549332325/
// https://i.pinimg.com/originals/0c/bb/dc/0cbbdc2696c6c524ea261b6aec3240a4.jpg

const contactInfo: { [key:string]: string | ReactNode | undefined }[] = [
  {
    text: "Github",
    url: "https://www.github.com/Jufrench",
    // icon: <IconBrandGithubFilled />
  },
  {
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/julesfrench/",
    // icon: <IconBrandLinkedin />
  },
  {
    text: "Email",
    url: "mailto:ju.french@gmail.com",
    // icon: <IconMailFilled />
  },
  {
    text: "Ko-Fi",
    url: "https://ko-fi.com/moijules",
    // customIcon: <KofiIcon />
  }
]

// stripes for empty spaces
// each project would have a background of stripes or circles on a card instead of a picutre

const Footer = () => {
  const footerWrapperStyle ={
    borderTop: '1px solid gray',
    background: 'repeating-linear-gradient(45deg, rgba(51, 51, 51, 0.3), rgba(51, 51, 51, 0.3) 7px, lightgray 5px, lightgray 16px)'
  };

  const footerContentStyle = {
    padding: `${rem(20)} 0`,
    width: '90%',
  };

  const FooterContactLink = (props: { key: number, text: string, url: string }) => {
    return <Anchor c="black" href={props.url}>{props.text}</Anchor>
  };

  return (
    <Center component="footer" style={footerWrapperStyle}>
      <Group style={footerContentStyle} justify="flex-end">
        <Text span style={{marginRight: "auto"}}>Jules</Text>
        <Group>
          {contactInfo.map((item: { [key:string]: string | ReactNode | undefined }, index) => (
            <FooterContactLink key={index} text={(item.text as string)} url={(item.url as string)} />
          ))}
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
