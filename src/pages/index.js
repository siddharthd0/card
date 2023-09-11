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
  FaCode,
  FaTiktok,
} from "react-icons/fa";
import { BiTime } from "react-icons/bi";

const SocialMediaIcons = () => (
  <>
    <HStack spacing={3}>
      <Tooltip label="TikTok" borderRadius="md" bg="gray.800">
        <Link
          _hover={{
            color: "pink.500 !important",
          }}
          href="https://www.tiktok.com/@siddharthduggal_"
          isExternal
          color="whiteAlpha.500"
        >
          <FaTiktok size={20} />
        </Link>
      </Tooltip>

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
        mb="1rem"
        borderWidth="1px"
        borderRadius="lg"
        bg="transparent"
       
        borderColor="rgba(255,255,255,0.3)"
        transition="all 0.25s ease"
        _hover={{
          bg: "black",
          transform: "translateY(-5px)",
          borderColor: "blue.700",
        }}
        color="whiteAlpha.900"
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
       bg={"black"}
       color={color[colorMode]}
       backgroundImage="url('banner-social.svg')" // Set SVG background here
       backgroundRepeat="no-repeat" // Additional background properties
       backgroundSize="cover" // Additional background properties
       display="flex"
       flexDirection="column"
       justifyContent="center"
       alignItems="center"
      >
        <Head>
          <title>Links | Siddharth Duggal</title>
          <link rel="icon" href="/siddharth.jpeg" />
        </Head>
        <Flex mb={8} alignItems="center">
         

          <Image
            transition={"all .2s ease-in-out"}
            _hover={{
              transform: "scale(1.1)",
            }}
            borderRadius="full"
            boxSize="70px"
            src="siddharth.jpeg"
          />
          <Box ml="1rem">
            <Tooltip 
              label="My Portfolio"
              borderRadius="md"
              bg="gray.800"
            >
            <Link
              _hover={{
                textDecoration: "none",
              }}
              href="https://siddharthduggal.com"
            >
              <Heading
                mb={1}
                transition={"all .15s ease-in-out"}
                _hover={{
                  color: "whiteAlpha.600",
                }}
                fontWeight={"400"}
              >
                Siddharth Duggal
              </Heading>
            </Link>
            </Tooltip>

            <SocialMediaIcons />
          </Box>
        </Flex>

        <VStack spacing={2}>
          <LinkButton
            name="Free Coding Courses"
            url="https://www.dashboard.techoptimum.org"
            icon={<FaCode />}
          />
          <LinkButton
            name="2024 Software Internships"
            url="https://github.com/TechOptimum/2024-swe-internships"
            icon={<FaGithub />}
          />
          <LinkButton
            name="Coding Community (Discord)"
            url="https://discord.gg/HpRfm7kp3U"
            icon={<FaDiscord />}
          />
          <LinkButton
            name="Tech Optimum"
            url="https://www.techoptimum.org"
            icon={<FaOptinMonster />}
          />
        </VStack>
      </Box>
    </>
  );
}
