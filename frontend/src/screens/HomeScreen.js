import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import Products from '../components/Products';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listProducts } from '../actions/productActions';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector(state => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>
      {
        loading ? (<Loader />) : error ? (<Message variant='danger'>{error}</Message>) :
          <Row>
            {
              products.map((product) => (
                <Col sm={12} md={6} l={4} xl={3} key={product._id}>
                  <Products product={product} />
                </Col>
              ))
            }
          </Row>
      }
    </>
  )
}

export default HomeScreen;
