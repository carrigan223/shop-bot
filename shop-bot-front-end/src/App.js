import React from "react";
import Header from "./components/Header";
import About from "./components/view-components/About";
import Landing from "./components/view-components/Landing";
import Shop from "./components/shop/Shop";
import Chatbot from "./components/chatbot/chatbot";
import { BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  /* overflow: auto; */
`;

const App = () => (
  <BrowserRouter>
    <Container>
      <Header />
      <Route exact path="/" component={Landing} />
      <Route exact path="/about" component={About} />
      <Route exact path="/shop" component={Shop} />
      <Chatbot />
    </Container>
  </BrowserRouter>
);

export default App;
