import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Home } from "./app/pages/home/Home";
import { Container } from "@chakra-ui/react";

function App() {
  return (
    <Container maxW="container.xl" color="white">
      <Home />;
    </Container>
  );
}

export default App;
