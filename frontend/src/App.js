import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from '../src/screens/HomeScreen';



const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1 className="py-3">Bienvenue A La Boutique</h1>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
