import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Products from '../components/Products';
import products from '../products';


const HomeScreen = () => {
  console.log(products)
  return (
    <>
      <Row>
        {
          products.map((product) => (
            <Col sm={12} md={6} l={4} xl={3} key={product._id}>
              <Products product={product} />
            </Col>
          ))
        }
      </Row>
    </>
  )
}

export default HomeScreen;
