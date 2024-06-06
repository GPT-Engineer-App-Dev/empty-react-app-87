import { Box, Container, Image, Heading, VStack, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Bananas = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Bananas Page</Heading>
        <Text fontSize="lg">Welcome to the Bananas page! Enjoy this picture of a monkey.</Text>
        <Box boxSize="sm">
          <Image src="/images/monkey.jpg" alt="Monkey" objectFit="cover" />
        </Box>
        <Button as={Link} to="/" colorScheme="teal" size="lg">
          Go Back Home
        </Button>
      </VStack>
    </Container>
  );
};

export default Bananas;