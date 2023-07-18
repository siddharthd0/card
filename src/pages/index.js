import {
  HStack,
  Text,
  Box,
  Button,
  Heading,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import Head from "next/head";
import { FaOptinMonster, FaGithub, FaDiscord } from "react-icons/fa";

// LinkButton Component
const LinkButton = ({ name, url, icon }) => {
  return (
    <Button
      colorScheme="white"
      variant={"outline"}
      size="lg"
      as="a"
      href={url}
      w="300px"
    >
      <HStack justifyContent="center" width="full">
        {icon}
        <Text textAlign={"center"}>{name}</Text>
      </HStack>
    </Button>
  );
};

export default function Home() {
  const { colorMode } = useColorMode();

  const bgColor = { light: "blackAlpha.900", dark: "gray.800" };
  const color = { light: "white", dark: "white" };

  return (
    <Box
      minHeight="100vh"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Head>
        <title> Siddharth Duggal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading fontWeight={"500"} size="2xl" mb={8}>
        Siddharth Duggal
      </Heading>

      <VStack spacing={5}>
        <LinkButton
          name="Free Coding Courses"
          url="https://www.techoptimum.org"
          icon={<FaOptinMonster />}
        />
        <LinkButton
          name="2024 SWE Internships"
          url="https://github.com/TechOptimum/2024-swe-internships"
          icon={<FaGithub />}
        />
        <LinkButton
          name="Coding Community"
          url="https://discord.gg/HpRfm7kp3U"
          icon={<FaDiscord />}
        />
        {/* Add more LinkButtons as needed */}
      </VStack>
    </Box>
  );
}
