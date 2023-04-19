import React, { Component } from 'react'
import { Fragment } from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'

class Collection extends Component {
  render() {
    return (
      <Fragment>
        <Container className='text-center' fluid={true}>
            <div className="section-title text-center mb-55"> <h2>PRODUCT COLLECTION</h2>
            <p> Some of our exclusive collections you may like</p>
            </div>
            
            <Row>
                <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6}>
                    <Card className = "image-box card w-100">
                    <img className='center w-75' src='https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/h/k/v/xl-hm-sht5203-hanumntra-original-imaghgws7zdygzut.jpeg?q=70'/>
                        <Card.Body>
                        <p className='product-name-on-card'>Casual Shirt</p>   
                        <p className='product-price-on-card'> Price:₹399</p> 
                        </Card.Body>
                    </Card>  
                </Col>

                <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6}>
                    <Card className = "image-box card w-100">
                    <img className='center w-75' src='https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/h/v/m/xxl-rfs1614-red-tape-original-imagne2nfwagdvzq.jpeg?q=70'/>
                        <Card.Body>
                        <p className='product-name-on-card'>Collar Casual Shirt</p>   
                        <p className='product-price-on-card'> Price: ₹949</p> 
                        </Card.Body>
                    </Card>  
                </Col>

                <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6}>
                    <Card className = "image-box card w-100">
                    <img className='center w-75' src='https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/v/y/t/xxl-ts12-vebnor-original-imagz6w8zfvzsp93.jpeg?q=70'/>
                        <Card.Body>
                        <p className='product-name-on-card'>Round Neck Blue T-Shirt</p>   
                        <p className='product-price-on-card'> Price: ₹259</p> 
                        </Card.Body>
                    </Card>  
                </Col>

                <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6}>
                    <Card className = "image-box card w-100">
                    <img className='center w-75' src='https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/8/g/w/m-ausk0272-ausk-original-imagmzx8yxhd7tbn.jpeg?q=70'/>
                        <Card.Body>
                        <p className='product-name-on-card'>Polo Neck T-Shirt</p>   
                        <p className='product-price-on-card'> Price: ₹329</p> 
                        </Card.Body>
                    </Card>  
                </Col>
                
                <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6}>
                    <Card className = "image-box card w-100">
                    <img className='center w-75' src='https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/b/7/y/-original-imaghgyaqywafqus.jpeg?q=70'/>
                        <Card.Body>
                        <p className='product-name-on-card'>Casual Shirt</p>   
                        <p className='product-price-on-card'> Price:₹377</p> 
                        </Card.Body>
                    </Card>  
                </Col>

                <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6}>
                    <Card className = "image-box card w-100">
                    <img className='center w-75' src='https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/o/g/7/l-st-xoxo-navyblue-smartees-original-imaggfkebugny4we.jpeg?q=70'/>
                        <Card.Body>
                        <p className='product-name-on-card'>Solid Round Neck Black T-Shirt</p>   
                        <p className='product-price-on-card'> Price: ₹169</p> 
                        </Card.Body>
                    </Card>  
                </Col>

                <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6}>
                    <Card className = "image-box card w-100">
                    <img className='center w-75' src='https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/b/s/8/m-t410-bllafb-eyebogler-original-imagf6qcnavh29vv-bb.jpeg?q=70'/>
                        <Card.Body>
                        <p className='product-name-on-card'>Printed Hooded Neck</p>   
                        <p className='product-price-on-card'> Price: ₹279</p> 
                        </Card.Body>
                    </Card>  
                </Col>

                <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6}>
                    <Card className = "image-box card w-100">
                    <img className='center w-75' src='https://rukminim1.flixcart.com/image/832/832/l3j2cnk0/t-shirt/2/w/p/l-723-2-5-7-8-ftx-original-imagemgrpafdug8v.jpeg?q=70'/>
                        <Card.Body>
                        <p className='product-name-on-card'>Pack of 4 Men Solid</p>   
                        <p className='product-price-on-card'> Price: ₹459</p> 
                        </Card.Body>
                    </Card>  
                    
                </Col>

            </Row>

        </Container>
      </Fragment>
    )
  }
}

export default Collection
