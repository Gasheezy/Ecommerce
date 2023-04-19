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
          <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
            <Card className = "image-box card">
              <img className='center' src='https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/h/y/7/-original-imagzbs5gjxey4wy.jpeg?q=70'/>
              <Card.Body>
                <p className='product-name-on-card'>Realme C25 (Rainy Night, 128 GB)</p>   
                <p className='product-price-on-card'> Price: $130</p> 
              </Card.Body>
              </Card>            
            </Col>

            <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
            <Card className = "image-box card">
              <img className='center' src='https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/s/2/z/note-12-mzb0e6fin-redmi-original-imagz62gzggajgz4.jpeg?q=70'/>
              <Card.Body>
                <p className='product-name-on-card'>Realme C20 (Rainy Night, 128 GB)</p>   
                <p className='product-price-on-card'> Price: $100</p> 
              </Card.Body>
              </Card>            
          </Col>

          <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
            <Card className = "image-box card">
              <img className='center' src='https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/a/z/7/-original-imagzbs5yww8gwjw.jpeg?q=70'/>
              <Card.Body>
                <p className='product-name-on-card'>Moto C5 (Rainy Night, 128 GB)</p>   
                <p className='product-price-on-card'> Price: $150</p> 
              </Card.Body>
              </Card>            
            </Col>

            <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
            <Card className = "image-box card">
              <img className='center' src='https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/w/v/b/-original-imagz3cuzzsyh8ud.jpeg?q=70'/>
              <Card.Body>
                <p className='product-name-on-card'>Realme C55 (Rainy Night, 128 GB)</p>   
                <p className='product-price-on-card'> Price: $120</p> 
              </Card.Body>
              </Card>            
          </Col>

          <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
            <Card className = "image-box card">
              <img className='center' src='https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/s/q/e/g13-pawv0027in-motorola-original-imagz4rb7zgfjejf.jpeg?q=70'/>
              <Card.Body>
                <p className='product-name-on-card'>Realme C55 (Rainy Night, 128 GB)</p>   
                <p className='product-price-on-card'> Price: $120</p> 
              </Card.Body>
              </Card>            
            </Col>

            <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
            <Card className = "image-box card">
              <img className='center' src='https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/w/o/s/-original-imaghuf9mryjhf3m.jpeg?q=70'/>
              <Card.Body>
                <p className='product-name-on-card'>Realme C55 (Rainy Night, 128 GB)</p>   
                <p className='product-price-on-card'> Price: $120</p> 
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
