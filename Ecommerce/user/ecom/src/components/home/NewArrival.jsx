import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class NewArrival extends Component {

  constructor(props){
    super(props);
    this.next=this.next.bind(this);
    this.previous=this.previous.bind(this);
  }
  next(){
    this.Slider.slickNext();
  }
  previous(){
    this.Slider.slickPrev();
  }

  render() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplayspeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
      <Fragment>
        <Container className='text-center' fluid={true}>
            <div className="section-title text-center mb-55"> <h2>NEW ARRIVAL &nbsp;
              
              <a className='btn btn-sm ml-2 site-btn' onClick={this.previous} ><i className='fa fa-angle-left'></i></a> &nbsp;
              
              <a className='btn btn-sm ml-2 site-btn' onClick={this.next} ><i className='fa fa-angle-right'></i></a>

            </h2>
            <p> Some of our new arrivals you may like</p>
            </div>
            <Row>
                    <Slider ref={c=>(this.Slider=c)} {...settings}>
                <div>
                <Card className = "image-box card">
              <img className='center' src='https://rukminim1.flixcart.com/image/832/832/kqmo8sw0/watch/w/p/j/brand-a-watch-mens-for-kids-women-men-couple-electronic-digital-original-imag4hhumjztz4ya.jpeg?q=70'/>
              <Card.Body>
                <p className='product-name-on-card'>Electronic Digital Sports Watch</p>   
                <p className='product-price-on-card'> Price: ₹289</p> 
              </Card.Body>
              </Card>
                </div>
                <div>
                <Card className = "image-box card">
              <img className='center' src='https://rukminim1.flixcart.com/image/832/832/jwgple80/watch/p/y/f/bq1126-fossil-original-imafh4ybgqgehxez.jpeg?q=70'/>
              <Card.Body>
                <p className='product-name-on-card'>Flynn Analog Watch</p>   
                <p className='product-price-on-card'> Price: ₹5,399</p> 
              </Card.Body>
              </Card>
                </div>
                <div>
                <Card className = "image-box card">
              <img className='center' src='https://rukminim1.flixcart.com/image/832/832/xif0q/watch/r/k/y/-original-imagz4wu7qeuqt7q.jpeg?q=70'/>
              <Card.Body>
                <p className='product-name-on-card'>Analog Watch - 77121PP05W</p>   
                <p className='product-price-on-card'> Price: ₹459</p> 
              </Card.Body>
              </Card>
                </div>
                <div>
                <Card className = "image-box card">
              <img className='center' src='https://rukminim1.flixcart.com/image/832/832/jwkzwy80/watch/g/d/b/nh9308bm01a-titan-original-imafh8efhtqmbauw.jpeg?q=70'/>
              <Card.Body>
                <p className='product-name-on-card'>NQ9308BM01 Analog Watch</p>   
                <p className='product-price-on-card'> Price: ₹10,395</p> 
              </Card.Body>
              </Card>
                </div>
                <div>
                <Card className = "image-box card">
              <img className='center' src='https://rukminim1.flixcart.com/image/832/832/kcz4rrk0/watch/u/a/e/109espoirblack-espoir-original-imaftz6ht9szkg2h.jpeg?q=70'/>
              <Card.Body>
                <p className='product-name-on-card'>CHRONOGRAPH Analog Watch</p>   
                <p className='product-price-on-card'> Price: ₹449</p> 
              </Card.Body>
              </Card>
                </div>
                <div>
                <Card className = "image-box card">
              <img className='center' src='https://rukminim1.flixcart.com/image/832/832/k7z3afk0/watch/t/c/x/lcs-8188-lois-caron-original-imafq3k9ztzdkyhe.jpeg?q=70'/>
              <Card.Body>
                <p className='product-name-on-card'>Trending Day & Date Functioning</p>   
                <p className='product-price-on-card'> Price: ₹266</p> 
              </Card.Body>
              </Card>
                </div>
                <div>
                <Card className = "image-box card">
              <img className='center' src='https://rukminim1.flixcart.com/image/832/832/jyyqc280/watch/d/q/q/71000-armado-original-imafekxjyt7pwbpf.jpeg?q=70'/>
              <Card.Body>
                <p className='product-name-on-card'>chronograph pattren Analog Watch</p>   
                <p className='product-price-on-card'> Price: ₹454</p> 
              </Card.Body>
              </Card>
                </div>
                <div>
                <Card className = "image-box card">
              <img className='center' src='https://rukminim1.flixcart.com/image/832/832/l1qrjbk0/watch/u/6/0/1-eh-226-sl-eddy-hager-men-original-imagd8nbfhsrkrps.jpeg?q=70'/>
              <Card.Body>
                <p className='product-name-on-card'>Silver Day and Date Analog Watch</p>   
                <p className='product-price-on-card'> Price: ₹319</p> 
              </Card.Body>
              </Card>
                </div>
                </Slider>   
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default NewArrival
