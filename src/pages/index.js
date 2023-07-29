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
  FaPhoenixFramework,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";

const SocialMediaIcons = () => (
  <>
    <HStack spacing={3}>
      <Tooltip label="Twitter" borderRadius="md" bg="gray.800">
        <Link
          _hover={{
            color: "twitter.500 !important",
          }}
          href="https://twitter.com/siddharthd01"
          isExternal
          color="whiteAlpha.500"
        >
          <FaTwitter size={20} />
        </Link>
      </Tooltip>
      <Tooltip label="Instagram" borderRadius="md" bg="gray.800">
        <Link
          _hover={{
            color: "red.500 !important",
          }}
          href="https://www.instagram.com/siddharth.duggal/"
          isExternal
          color="whiteAlpha.500"
        >
          <FaInstagram size={20} />
        </Link>
      </Tooltip>

      <Tooltip label="LinkedIn" borderRadius="md" bg="gray.800">
        <Link
          _hover={{
            color: "linkedin.500 !important",
          }}
          href="https://www.linkedin.com/in/siddharth-duggal/"
          isExternal
          color="whiteAlpha.500"
        >
          <FaLinkedin size={20} />
        </Link>
      </Tooltip>
      <Tooltip label="GitHub" borderRadius="md" bg="gray.800">
        <Link
          _hover={{
            color: "gray.200 !important",
          }}
          href="https://github.com/siddharthd0"
          isExternal
          color="whiteAlpha.500"
        >
          <FaGithub size={20} />
        </Link>
      </Tooltip>
    </HStack>
  </>
);
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
          <title>Links | Carson O'very</title>
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
            src="carson.jpg"
            alt=" Carson O'very"
          />
          <Box ml="1rem">
            <Heading
              mb={1}
              transition={"all .2s ease-in-out"}
              _hover={{
                color: "whiteAlpha.700",
              }}
              fontWeight={"400"}
            >
              Carson O'very
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
          <LinkButton
            name="Tiktok"
            url="https://tiktok.com/@carsonovery"
            icon={<FaTiktok />}
          />
        </VStack>
      </Box>
    </>
  );
}
