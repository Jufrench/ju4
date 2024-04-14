import React from 'react';

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";

import { rem, Center, Container, SimpleGrid, Grid, Space, Box,
  ActionIcon, Stack, Title, Group, Anchor, Text, Divider, Card, Drawer, NavLink, Avatar } from '@mantine/core';
import { useMediaQuery, useDisclosure } from '@mantine/hooks';
import { IconMenu2, IconSquareHalf } from '@tabler/icons-react';
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
  const [opened, { open, close }] = useDisclosure(false);
  const navText = ['Home', 'About', 'Project', 'Contact'];

  const navItems = navText.map(label => (
    <NavLink key={label} label={label} color="black" style={{fontWeight: 700}}/>
  ))

  const MobileDrawerMenu = () => {
    return (
      <Drawer opened={opened} onClose={close}>
        <Stack style={{color:"black"}} justify="center">
          {navItems}
        </Stack>
      </Drawer>
    )
  };
  
  return (
    <header>
      <Group p="md" style={{width: "90%", margin: "0 auto"}} justify="space-between">
        <Avatar color="#00adad" radius="0"><IconSquareHalf size="xs" /></Avatar>
        <ActionIcon variant="outline" color="gray" size="xl" onClick={open}><IconMenu2 stroke={3} /></ActionIcon>
      </Group>
      <MobileDrawerMenu />
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
    <Center component="section">
      <Stack p="md" style={{width: sectionContentWidth, ...heroStyle}} gap={0}>
        {/* <Box bg="gray" style={{height: "30%"}}></Box> */}
        <Box
          style={{
            height: "20%",
            background: 'repeating-linear-gradient(45deg, rgba(51, 51, 51, 0.1), rgba(51, 51, 51, 0.1) 7px, lightgray 5px, lightgray 16px)'
          }}/>
        <Box bg="#00adad" pl="md" pb="md" style={{flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end"}}>
          <Title order={1} c="white" m="0" lh="1" style={{fontSize: "3rem"}}>Julian</Title>
          {/* <Divider /> */}
          <Title order={1} c="black" m="0" lh="1" style={{fontSize: "2.75rem"}}>French</Title>
        </Box>
      </Stack>
    </Center>
  )
}

// const WhoAmI = () => {
//   const whoStyle = {
//     border: '1px solid lightgray'
//   };

//   return (
//     <>
//       <About />
//       {/* <Divider my="xs" /> */}
//       <Skills />
//     </>
//   )
// }

const About = () => {

  return (
    <Center component="section">
      <Stack style={{...sectionContentStyle}} gap={0}>
        <Title order={3} size="h3">Who</Title>
        <Text>Hello.</Text>
        <Text>I'm Web Developer & aspiring Full-Stack Developer. My traditional educational & collegiate background is in Music & Foreign Languages. I decided to make a career out of Web Development when I allowed myself to follow my curiosities about coding.</Text>
        <Divider my="xs" />
        <Text>Currently I'm pursuing an associate's degree in Computer Information Systems while working full time as a Front-end Developer.</Text>
      </Stack>
    </Center>
  )
}

const Skills = () => {
  const languages = ['JavaScript', 'TypeScript', 'Node.js', 'Ember', 'Vue.js', 'CSS', 'HTML', 'Less/Sass', 'SQL']
    .map((lang, index, arr) => (
      <React.Fragment key={index}>
        <Text style={{lineHeight: 1}} span>{lang}</Text>
        {index !== arr.length - 1 && <Divider orientation="vertical" />}
      </React.Fragment>
    ));

  const librariesAndFrameworks = ['React', 'Next.js', 'Gatsby', 'Bootstrap', 'Mantine']
    .map((lib, index, arr) => (
      <React.Fragment key={index}>
        <Text style={{lineHeight: 1}} span>{lib}</Text>
        {index !== arr.length - 1 && <Divider orientation="vertical" />}
      </React.Fragment>
    ));

  const tools = ['Git', 'Github', 'Vercel', 'Netlify']
    .map((tool, index, arr) => (
      <React.Fragment key={index}>
        <Text style={{lineHeight: 1}} span>{tool}</Text>
        {index !== arr.length - 1 && <Divider orientation="vertical" />}
      </React.Fragment>
    ));

  return (
    <Center component="section">
      <Stack style={{...sectionContentStyle}} gap={0}>
        <Title order={3} size="h3" style={{textAlign: "right"}}>Skills</Title>
        <Stack>
          <Box>
            <Divider
              my="xs"
              labelPosition="left"
              label={
                <Text c="gray">Languages</Text>
              } />
            <Group gap="xs">{languages}</Group>
          </Box>
          <Box>
            <Divider
              my="xs"
              labelPosition="left"
              label={
                <Text>Libraries & Frameworks</Text>
              } />
            <Group gap="xs">{librariesAndFrameworks}</Group>
          </Box>
          <Box>
            <Divider
              my="xs"
              labelPosition="left"
              label={
                <Text>Tools</Text>
              } />
            <Group gap="xs">{tools}</Group>
          </Box>
        </Stack>
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
  const projects = props.projectList.map((project: string) => {
    return (
      <ProjectItem key={project} projectName={project} />
    );
  });

  return (
    <Center component="section">
      <SimpleGrid style={{...sectionContentStyle}} spacing="md">
        <Title size="h3">Projects</Title>
        {projects}
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
    background: 'repeating-linear-gradient(45deg, rgba(51, 51, 51, 0.1), rgba(51, 51, 51, 0.1) 7px, lightgray 5px, lightgray 16px)'
  };

  const footerContentStyle = {
    // padding: rem(20),
    width: '90%',
  };

  const FooterContactLink = (props: { key: number, text: string, url: string }) => {
    return <Anchor c="black" href={props.url}>{props.text}</Anchor>
  };

  return (
    <Center component="footer" style={footerWrapperStyle}>
      <Group p="md" style={footerContentStyle} justify="flex-end">
        <Text span c="#00adad" style={{marginRight: "auto", fontWeight: 700}}>Jules</Text>
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
      <Stack gap="sm">
        {/* <Space h="sm" /> */}
        <Hero />
        {/* <WhoAmI /> */}
        <About />
        <Skills />
        <Projects projectList={projectList} />
        <Footer />
      </Stack>
    </>
  );
}
