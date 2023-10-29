import React from 'react'
import './forthpage.css'
import { Container, Row, Col } from 'react-bootstrap'
import Adrid from "../../assets/adrid.png"
import Agney from "../../assets/agney.png"

import Carousel from 'react-bootstrap/Carousel';
function FourthPage() {
  return (
    <div className='frth_majrdiv'>
<Carousel >

<Carousel.Item interval={3000}>
      <Container>
        <Row xs={1} md={2}>

          <Col className='frth_dataisde'>
            <p className='frth_para'>"As the CEO of our formidable AI startup, I'm proud to lead a team of exceptional individuals who are blazing a trail through the digital frontier. Our company isn't just a business; it's a force of nature, a relentless engine of innovation and progress. it's a testament to the enduring spirit of innovation"</p>
            <h1 className='Frth_name_tag'>Agney Sadanand.P</h1>
            <p className='frth_designation'>~CEO/CoFounder~</p>
          </Col>
          <Col xs={{ order: 'first' }} md={{ order: 'last' }} className='frth_imgisde' >

            <img className='frthimg_agney' alt="imageofceo" src={Agney} />
          </Col>
        </Row>
      </Container>
      </Carousel.Item>
      <Carousel.Item>
      <Container>
        <Row xs={1} md={2}>

          <Col className='frth_dataisde'>
            <p className='frth_para'>"I lead a battalion of tech visionaries as a CTO who thrive on challenges and embrace the impossible. We're not just creating software; we're architecting a brighter future.We're forging the path towards a future where technology isn't just an accessory; it's the driving force behind innovation, success, and progress."</p>
            <h1 className='Frth_name_tag'>Adrid Sadanand.P</h1>
            <p className='frth_designation'>~CTO/CoFounder~</p>
          </Col>
          <Col xs={{ order: 'first' }} md={{ order: 'last' }} className='frth_imgisde' >

            <img className='frthimg_adri' alt="imageofcto" src={Adrid} />
          </Col>
        </Row>
      </Container>
      </Carousel.Item>

      
     
    </Carousel>
      

    </div>
  )
}

export default FourthPage