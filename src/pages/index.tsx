import React, { ReactElement } from 'react';

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";

import { rem, Center, Container, SimpleGrid, Grid, Space, Box,
  ActionIcon, Stack, Title, Group, Anchor, Text, Divider, Card, Drawer, NavLink, Avatar } from '@mantine/core';
import { useMediaQuery, useDisclosure } from '@mantine/hooks';
import { IconMenu2, IconSquareHalf, IconArrowBigRight } from '@tabler/icons-react';
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

const sectionContentWidth = '90%';
const sectionContentStyle = {
  width: sectionContentWidth,
  padding: rem(20)
};
const sectionContentTitle = {
  marginBottom: rem(20)
};

// const Header = () => {
//   return (
//     <header style={{border: "2px solid limegreen"}}>
//       <Center>
//         <Container style={sectionContentStyle}>
//           Header
//         </Container>
//       </Center>
//     </header>
//   )
// };

const LogoSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-square-half">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 4v16" />
      <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
      <path d="M12 13l7.5 -7.5" />
      <path d="M12 18l8 -8" />
      <path d="M15 20l5 -5" />
      <path d="M12 8l4 -4" />
    </svg>
  )
}

const navText = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const NavItem = (props: {key: string | number, label: string, onClick?: () => void}) => {
  return (
    <NavLink
    style={{fontWeight: 700}} 
    color="black"
    key={props.label}
    label={props.label}
    href={`#${props.label.toLowerCase()}`}
    onClick={props.onClick}
    />
  )
};

const HeaderMobile = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const handleOnClick = () => close();

  // const navItems = navText.map(label => (
  //   <NavLink
  //     style={{fontWeight: 700}} 
  //     color="black"
  //     key={label}
  //     label={label}
  //     href={`#${label.toLowerCase()}`}
  //     onClick={handleOnClick}
  //     />
  // ));
  const navItems = navText.map(label => (
    <NavItem key={label} label={label} onClick={handleOnClick} />
  ));

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
    <header id="home" style={{border: '1px solid dodgerblue'}}>
      <Group p="md" style={{width: "90%", margin: "0 auto"}} justify="space-between">
        {/* <Avatar variant="transparent" color="#00adad" radius="0" style={{color: "#00adad"}}>
          <IconSquareHalf size="xs" strokeWidth={2} stroke="#00adad" />
        </Avatar> */}
        <Avatar variant="transparent" color="#00adad" radius="0" style={{color: "#00adad"}}>
          <LogoSvg />
        </Avatar>
        <ActionIcon variant="outline" color="gray" size="xl" onClick={open}><IconMenu2 stroke={3} /></ActionIcon>
      </Group>
      <MobileDrawerMenu />
    </header>
  )
};

const HeaderTablet = () => {
  const navItems = navText.map(title => (
    <Anchor key={title}>{title}</Anchor>
  ));

  return (
    <header style={{border: '1px solid tomato'}}>
      <Group p="md" style={{ width: "90%", margin: "0 auto"}} justify="space-between">
        <Avatar variant="transparent" color="#00adad" radius="0" style={{color: "#00adad"}}>
          <LogoSvg />
        </Avatar>
        <Group component="nav">{navItems}</Group>
      </Group>
    </header>
  )
}

const Hero = () => {
  const heroStyle = {
    height: '400px',
  };

  console.log('%cuse grid rows for skills section', 'color:tomato')

  return (
    <Center component="section">
      <Stack p="md" style={{width: sectionContentWidth, ...heroStyle}} gap={0}>
        <Box bg="#00adad" pl="md" pb="md" style={{flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end"}}>
          <Title
            aria-label="Julian French Web Developer"
            order={1}
            c="black"
            mb="10"
            lh="1"
            style={{fontSize: "3rem", display: "flex", flexDirection: "column"}}>
            <span>Julian </span>
            <span>French</span>
          </Title>
          <Stack gap={0} component='h2' m="0" lh="1" style={{fontSize: "3rem"}}>
            <span>Web </span>
            <span>Developer</span>
          </Stack>
        </Box>
        <Box
          style={{
            height: "20%",
            background: 'repeating-linear-gradient(45deg, rgba(51, 51, 51, 0.1), rgba(51, 51, 51, 0.1) 7px, lightgray 5px, lightgray 16px)'
          }}/>
      </Stack>
    </Center>
  )
}

const About = () => {
  return (
    <Center id="about" component="section">
      <Stack style={{...sectionContentStyle}} gap={0}>
        <Title order={3} size="h3" style={sectionContentTitle}>Who</Title>
        <Text>Hello.</Text>
        <Text>I'm Web Developer & aspiring Full-Stack Developer. My traditional educational & collegiate background is in Music & Foreign Languages. I decided to make a career out of Web Development when I allowed myself to follow my curiosities about coding.</Text>
        <Divider my="xs" />
        <Text>Currently I'm pursuing an associate's degree in Computer Information Systems while working full time as a Front-end Developer.</Text>
      </Stack>
    </Center>
  )
}

const SkillsOld = () => {
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
    <Center id="skills" component="section">
      <Stack style={{...sectionContentStyle}} gap={0}>
        <Title order={3} size="h3">Skills</Title>
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
};

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

  const SkillsSection = (props: {title: string, skills: React.JSX.Element[]}) => {
    const sectionStyle = {
      background: '#f7f8f5',
      padding: rem(20)
    };

    return (
      <Stack style={sectionStyle} gap={7}>
        <Title order={5} style={{marginBottom: rem(6)}}>{props.title}</Title>
        <Group gap="xs">{props.skills}</Group>
      </Stack>
    );
  }

  return (
    <Center id="skills" component="section">
      <Stack style={{...sectionContentStyle}} gap={0}>
        <Title order={3} size="h3" style={sectionContentTitle}>Skills</Title>
        <Stack>
          <SkillsSection title={"Languages"} skills={languages} />
          <SkillsSection title={"Libraries & Frameworks"} skills={librariesAndFrameworks} />
          <SkillsSection title={"Tools"} skills={tools} />
        </Stack>
      </Stack>
    </Center>
  );
};

const Projects = (props: {projectList: {}[]}) => {

  const ProjectItem = (props: {key: string, title: string, url: string}) => {
    return (
      <Card component='a' href={props.url} target="_blank" style={{border: "1px solid gray", borderRadius: 0}}>
        <Group justify="space-between">
          <Title size="h5" style={{color: "gray"}}>{props.title}</Title>
          {/* <ActionIcon component='a' variant='light' color="gray"> */}
            <IconArrowBigRight color="gray" />
          {/* </ActionIcon> */}
        </Group>
      </Card>
    )
  };

  const projects = props.projectList.map((item: { [key:string]: string }) => {
    return (
      <ProjectItem key={item.title} title={item.title} url={item.url} />
    );
  });

  return (
    <Center id="projects" component="section">
      <Stack style={sectionContentStyle}>
        <Title size="h3" style={sectionContentTitle}>Projects</Title>
        <SimpleGrid spacing="md" cols={{ base: 1, sm: 3 }}>
          {projects}
        </SimpleGrid>
      </Stack>
    </Center>
  )
};

const projectList: {}[] = [
  {
    title: 'Flag Doyen',
    url: 'https://flagdoyen.vercel.app/'
  },
  {
    title: 'Mai Globo',
    url: 'https://maiglobo.vercel.app/'
  }
];

const contactInfo: { [key:string]: string | ReactNode | undefined }[] = [
  {
    text: "Github",
    url: "https://www.github.com/Jufrench",
  },
  {
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/julesfrench/",
  },
  {
    text: "Email",
    url: "mailto:ju.french@gmail.com",
  },
  {
    text: "Ko-Fi",
    url: "https://ko-fi.com/moijules",
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
    width: '90%',
  };

  const FooterContactLink = (props: { key: number, text: string, url: string }) => {
    return <Anchor c="black" href={props.url}>{props.text}</Anchor>
  };

  return (
    <Center id="contact" component="footer" style={footerWrapperStyle}>
      <Group p="md" style={footerContentStyle} justify="flex-end">
        {/* <Text span c="#00adad" style={{marginRight: "auto", fontWeight: 700}}>Jules</Text> */}
        {/* <Avatar variant="transparent" color="#00adad" radius="0" style={{marginRight: "auto", color: "#00adad"}}>
          <IconSquareHalf size="xs" strokeWidth={2} stroke="#00adad" />
        </Avatar> */}
        <Avatar variant="transparent" color="#00adad" radius="0" style={{marginRight: "auto", color: "#00adad"}}>
          <LogoSvg />
        </Avatar>
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
  const matches = useMediaQuery('(min-width: 47.5em)');
  return (
    <>
      <Head>
        <title>Portfolio of Jules</title>
        <meta name="description" content="Portfolio of Jules" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {matches ? <HeaderTablet /> : <HeaderMobile />}
      <Stack gap="sm">
        {/* <Space h="sm" /> */}
        <Hero />
        <About />
        {/* <SkillsOld /> */}
        <Skills />
        <Projects projectList={projectList} />
        <Footer />
      </Stack>
    </>
  );
}
