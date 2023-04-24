import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Resume from "./components/Resume";

function App() {
  return (
    <>
      <div>
        <ChakraProvider>
          <Resume />
        </ChakraProvider>
      </div>
    </>
  );
}

export default App;
