import React, { ReactNode } from 'react';
import Head from "next/head";
import { rem, Center, SimpleGrid, Box, ActionIcon, Stack, Title, Group,
  Anchor, Text, Divider,  Paper, Drawer, NavLink, Avatar, Accordion, List } from '@mantine/core';
import { useMediaQuery, useDisclosure } from '@mantine/hooks';
import { IconMenu2, IconArrowBigRight, IconFlagFilled, IconWorld, IconCode} from '@tabler/icons-react';

const sectionContentWidth = '90%';
const sectionContentStyle = {
  width: sectionContentWidth,
  padding: rem(20)
};
const sectionContentTitle = {
  marginBottom: rem(20)
};

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

const navItemsText = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const MobileNavItem = (props: {key: string | number, label: string, onClick?: () => void}) => {
  return (
    <NavLink
      style={{fontWeight: 700}} 
      color="black"
      key={props.label}
      label={props.label}
      href={`#${props.label.toLowerCase()}`}
      onClick={props.onClick} />
  );
};

const HeaderMobile = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const handleOnClick = () => close();
  const navItems = navItemsText.map(label => (
    <MobileNavItem key={label} label={label} onClick={handleOnClick} />
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
    <header id="home">
      <Group p="md" style={{width: "90%", margin: "0 auto"}} justify="space-between">
        <Avatar variant="transparent" color="#00adad" radius="0" style={{color: "#00adad"}}>
          <LogoSvg />
        </Avatar>
        <ActionIcon variant="outline" color="gray" size="xl" onClick={open}><IconMenu2 stroke={3} /></ActionIcon>
      </Group>
      <MobileDrawerMenu />
    </header>
  )
};

const TabletNavItem = (props: {key: string, title: string}) => {
  const navItemStyle: React.CSSProperties = {
    padding: `${rem(4)} ${rem(6)}`,
    fontWeight: 700,
  };

  return (
    <Anchor
      c="black"
      style={navItemStyle}
      href={`#${props.title.toLowerCase()}`}
      >
        {props.title}
      </Anchor>
  )
};

const HeaderTablet = () => {
  const navItems = navItemsText.map(title => <TabletNavItem key={title} title={title} />);

  return (
    <header className="header-tablet">
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

const currentlyEnrolled = [
  'CS 250: Basic Data Structures using C++',
  'CIS 264: Application Development and Programming',
  'WEB 124 Web Scripting: JavaScript II',
];
const classesRemaining = [
  'None'
];
const classesTaken = [
  'IT 140: Introduction to Networks',
  'CS 205: Concepts of Programming Algorithms using Java',
  'CS 235: Object-Oriented Programming Using C++',
  'CIS 142: Beginning Programming using Python',
  'CIS 204: UNIX Scripting and Utilities',
  'CIS 242: Introduction to System Design and Analysis',
  'CIS 260: Database Management',
  'CIS 275: Web-Enabled Database Programming',
  'WEB 110: HTML & CSS',
  'WEB 114: Web Scripting: JavaScript I',
  'WEB 128: Server Scripting: PHP with MySQL',
];

const PulseCircle = () => {
  const circleStyles: React.CSSProperties = {
    background: 'red',
    borderRadius: '50%',
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    animation: 'pulse 2s infinite cubic-bezier(.36, .11, .89, .32)'
  };

  const containerStyles: React.CSSProperties = {
    position: "relative",
    width: '30px',
    height: '30px'
  };

  return (
    <Box style={containerStyles}>
      <Box style={{...circleStyles, animationDelay: "-3s"}}></Box>
      <Box style={{...circleStyles, animationDelay: "-2s"}}></Box>
      <Box style={{...circleStyles, animationDelay: "-1s"}}></Box>
      <Box style={{...circleStyles, animationDelay: "0s"}}></Box>
    </Box>
  )
}

const About = () => {
  return (
    <Center id="about" component="section">
      <Stack style={{...sectionContentStyle}} gap={0}>
        <Title order={3} size="h3" style={sectionContentTitle}>Who Am I?</Title>
        <Text>Hello.</Text>
        <Text>I'm Web Developer & aspiring Full-Stack Developer. My educational & collegiate background is in Music & Foreign Languages, with a Major in French & Italian and a minor in vocal music. I decided to make a career out of Web Development when I allowed myself to follow my curiosities about coding.</Text>
        <Divider my="xs" />
        <Text>Currently I'm pursuing an associate's degree in Computer Information Systems @ JCCC while working full time as a Front-end Developer.</Text>
        <Text fw="bold">Check out my degree progress</Text>
        <Group gap={3}>
          <PulseCircle />
          <Text>Currently enrolled in:</Text>
        </Group>
        <List ml={27}>
          <>
            {currentlyEnrolled.map(course => <List.Item key={course}>{course}</List.Item>)}
          </>
        </List>
        <Accordion defaultValue="Courses Remaining">
          <Accordion.Item value="remaining">
            <Accordion.Control>Classes Remaining/Taken</Accordion.Control>
            <Accordion.Panel>
              <Text>Remaining</Text>
              <List ml="sm">
                <>
                  {classesRemaining.map(course => <List.Item key={course}>{course}</List.Item>)}
                </>
              </List>
              <Text>Taken</Text>
              <List ml="sm">
                <>
                  {classesTaken.map(course => <List.Item key={course}>{course}</List.Item>)}
                </>
              </List>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Stack>
    </Center>
  )
}

const Skills = () => {
  const languages = ['JavaScript', 'TypeScript', 'Node.js', 'Ember', 'Vue.js', 'CSS', 'HTML', 'Less/Sass', 'SQL', 'Java']
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
      background: '#f6f6f6f6',
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

const ProjectCardMobile = (props: {title: string, url: string, icon?: ReactNode}) => {

  return (
    <Paper p={rem(16)} style={{border: "1px solid gray", borderRadius: 0}}>
      <Group justify="space-between">
        <Avatar>
          {props.icon}
        </Avatar>
        <Title order={4} size="h4">{props.title}</Title>
        <ActionIcon
          component="a"
          href={props.url}
          target="_blank" radius={0}
          color="black"
          variant="subtle"
          ml="auto">
          <IconArrowBigRight />
        </ActionIcon>
      </Group>
    </Paper>
  );
}

const ProjectCardTablet = (props: {title: string, url: string, icon?: ReactNode, iconHoverColor: string}) => {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  const isHoveredStyle: React.CSSProperties = {
    transform: 'scale(1.2, 1.2)',
  };

  return (
    <Paper
      p={rem(16)}
      style={{border: "1px solid gray", borderRadius: 0}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <Group justify="flex-start" wrap="nowrap">
        <Avatar color={isHovered ? props.iconHoverColor : 'gray'} style={isHovered ? isHoveredStyle : {}}>
          {props.icon}
        </Avatar>
        <Title order={4} size="h4">{props.title}</Title>
        <ActionIcon component="a" href={props.url} target="_blank" radius={0} color="black" variant="subtle" ml="auto">
          <IconArrowBigRight />
        </ActionIcon>
      </Group>
    </Paper>
  );
}

const Projects = (props: {projectList: {}[]}) => {
  const matchesTablet = useMediaQuery('(min-width: 47.5em)');

  const projects = props.projectList.map((item: { [key:string]: string }) => {
    return (
      <React.Fragment key={item.title}>
        {matchesTablet ?
          <ProjectCardTablet
            title={item.title}
            url={item.url}
            icon={item.icon}
            iconHoverColor={item.iconHoverColor} /> :
          <ProjectCardMobile title={item.title} url={item.url} icon={item.icon} />}
      </React.Fragment>
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
    url: 'https://flagdoyen.vercel.app/',
    icon: <IconFlagFilled />,
    iconHoverColor: '#c91a25'
  },
  {
    title: 'Jotty RTE',
    url: 'https://jotty-rte.vercel.app/',
    icon: <IconCode />,
    iconHoverColor: '#2BDD66'
  },
  {
    title: 'Mai Globo',
    url: 'https://maiglobo.vercel.app/',
    icon: <IconWorld />,
    iconHoverColor: '#00BFFF'
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
  const matchesTablet = useMediaQuery('(min-width: 47.5em)');
  return (
    <>
      <Head>
        <title>Portfolio of Jules</title>
        <meta name="description" content="Portfolio of Jules" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {matchesTablet ? <HeaderTablet /> : <HeaderMobile />}
      <Stack gap="sm">
        <Hero />
        <About />
        <Skills />
        <Projects projectList={projectList} />
        <Footer />
      </Stack>
    </>
  );
}
