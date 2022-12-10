import React from "react";
import { Flow } from "./components/templates/Flow";
import { ChakraProvider } from "@chakra-ui/react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <ChakraProvider>
    <Flow />
  </ChakraProvider>
);

container.style.height = "100vh";
container.style.width = "100vw";

document.body.style.height = "100vh";
document.body.style.width = "100vw";
