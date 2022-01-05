import NextImage from "next/image";
import NextLink from "next/link";
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { useSWRConfig } from "swr";
import { auth } from "../lib/mutations";

const AuthForm: FC<{ mode: "signin" | "signup" }> = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await auth(mode, { email, password });
    setIsLoading(false);
    router.push("/");
  };

  return (
    <Box position={"relative"} bg="gray.900" color="white">
      <Flex
        justify="center"
        align="flex-end"
        height="60px"
        borderBottom="white solid"
      >
        <NextImage src="/logo.svg" height={60} width={120} />
      </Flex>
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          >
            Relive the
            <Text bgGradient="linear(to-r,#29c45b,#15883e)" bgClip="text">
              Music.
            </Text>{" "}
          </Heading>
          <Flex>
            <Box>
              <NextImage src="/compose.svg" height={200} width={600} />
            </Box>
          </Flex>
        </Stack>
        <Stack
          bg={"gray.50"}
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
        >
          <Stack spacing={4}>
            <Heading
              color={"gray.800"}
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            >
              Log in to Trax
              <Text
                as={"span"}
                bgGradient="linear(to-r, #6C9E7D, #6C9E7D)"
                bgClip="text"
              >
                !
              </Text>
            </Heading>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
              Don't have an account?
              <Text
                as={"span"}
                bgGradient="linear(to-r,#27b553, #27b553)"
                bgClip="text"
              >
                {" "}
                Sign up now
              </Text>
            </Text>
          </Stack>
          <Box as={"form"} marginTop={40} onSubmit={handleSubmit}>
            <Stack spacing={4}>
              {/* Email */}
              <Input
                placeholder="Email"
                bg={"gray.100"}
                border={0}
                color={"blackAlpha.900"}
                _placeholder={{
                  color: "gray.500",
                }}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* Password */}
              <Input
                placeholder="Password"
                bg={"gray.100"}
                border={0}
                color={"blackAlpha.900"}
                _placeholder={{
                  color: "gray.500",
                }}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Stack>
            {/* Button */}
            <Button
              fontFamily={"heading"}
              mt={8}
              w={"full"}
              bgGradient="linear(to-r, #15883e,#15883e)"
              color={"white"}
              _hover={{
                bgGradient: "linear(to-r, #1ed760,#1db954)",
                boxShadow: "xl",
              }}
              type="submit"
              isLoading={isLoading}
            >
              {mode}
            </Button>
          </Box>
          form
        </Stack>
      </Container>
    </Box>
    // <Box height="100vh" width="100vw" bg="black" color="white">
    //   <Flex justify="center" align="center" height="100px">
    //     hello
    //   </Flex>
    //   <Flex justify="center" align="center" height="calc(100vh - 100px)">
    //     <Box padding="50px" bg="gray.900" borderRadius="6px">
    //       <form>
    //         <Input
    //           placeholder="email"
    //           type="email"
    //           onChange={(e) => setEmail(e.target.value)}
    //         />
    //         <Input
    //           placeholder="Password"
    //           type="password"
    //           onChange={(e) => setPassword(e.target.value)}
    //         />
    //         <Button type="submit" bg="green.500" isLoading={isLoading}>
    //           {mode}
    //         </Button>
    //       </form>
    //     </Box>
    //   </Flex>
    // </Box>
  );
};

export default AuthForm;
