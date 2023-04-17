import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class FeaturedProducts extends Component {
  render() {
    return (
      <Fragment>
        <Container className='text-center' fluid={true}>
            <div className="section-title text-center mb-55"> <h2>FEATURED PRODUCT</h2>
            <p> Some of our exclusive collections you may like</p>
            </div>
            <Row>
                <Col>
                
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default FeaturedProducts
