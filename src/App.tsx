import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./components/Layout";

function App() {
  return (
    <ChakraProvider>
      <Layout />
    </ChakraProvider>
  );
}

export default App;

// Layout chama o component Card!
