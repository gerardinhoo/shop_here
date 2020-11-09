import React from 'react';
import products from '../products';
import { Col, Row } from 'react-bootstrap';
import Products from '../components/Products';

const HomeScreen = () => {
  return (
    <>
      <Row>
        {
          products.map((product) => (
            <Col sm={12} md={6} l={4} xl={3}>
              <Products product={product} />
            </Col>
          ))
        }
      </Row>
    </>
  )
}

export default HomeScreen;
