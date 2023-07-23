import {
  HStack,
  Text,
  Tooltip,
  Flex,
  Box,
  Button,
  Link,
  Image,
  Heading,
  VStack,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";
import Head from "next/head";
import {
  FaOptinMonster,
  FaGithub,
  FaDiscord,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";

const LinkButton = ({ name, url, icon }) => {
  return (
    <Link
      _hover={{
        textDecoration: "none",
      }}
      href={url}
      isExternal
    >
      <Button
        transition={"all .2s ease-in-out"}
        bg="transparent"
        border="1px solid"
        borderColor="whiteAlpha.400"
        color="whiteAlpha.900"
        _hover={{
          color: "black",
          bg: "white",
        }}
        size="lg"
        w="350px"
      >
        <HStack justifyContent="center" width="full">
          {icon}
          <Text ml="6px" textAlign={"center"}>
            {name}
          </Text>
        </HStack>
      </Button>
    </Link>
  );
};

export default function Home() {
  const { colorMode } = useColorMode();

  const bgColor = { light: "#020E69", dark: "gray.800" };
  const color = { light: "white", dark: "white" };

  return (
    <>
      <Box
        minHeight="100vh"
        bg={"rgb(22, 22, 22) "}
        color={color[colorMode]}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Head>
          <title>Links | Siddharth Duggal</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Flex mb={8} alignItems="center">
          <Image
            transition={"all .2s ease-in-out"}
            _hover={{
              transform: "scale(1.1)",
            }}
            borderRadius="full"
            boxSize="70px"
            src="kaush.png"
            alt="Siddharth Duggal"
          />
          <Box ml="1rem">
            <Heading mb={1} fontWeight={"400"}>
              Kaushal Kurpad
            </Heading>
          </Box>
        </Flex>

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
        </VStack>
      </Box>
    </>
  );
}
