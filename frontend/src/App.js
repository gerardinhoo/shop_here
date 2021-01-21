import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from '../src/screens/HomeScreen';
import ProductScreen from '../src/screens/ProductScreen';
import CartScreen from '../src/screens/CartScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path='/' component={HomeScreen} exact></Route>
          <Route path='/product/:id' component={ProductScreen}></Route>
          <Route path='/cart/:id?' component={CartScreen}></Route>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
