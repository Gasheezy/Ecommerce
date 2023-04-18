import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'

class FeaturedProducts extends Component {
  render() {
    return (
      <Fragment>
        <Container className='text-center' fluid={true}>
            <div className="section-title text-center mb-55"> <h2>FEATURED PRODUCT</h2>
            <p> Some of our exclusive collections you may like</p>
            </div>
        <Row>
            <Col xl={2} lg={2} md={2} sm={4} xs={6}>

            <Card>
  <Card.Body>
    
  </Card.Body>
</Card>
            
            </Col>
        </Row>
        </Container>
      </Fragment>
    )
  }
}

export default FeaturedProducts
