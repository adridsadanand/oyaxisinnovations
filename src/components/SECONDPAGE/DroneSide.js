import "./secondpage.css"
import { Col, Container } from 'react-bootstrap';
import DroneImage from "../../assets/droneimage.png"



function DroneSide() {
  return (
    <Container fluid className="text-light">
      <Col className='image_col'>
        <img data-aos="fade-down" className="image_cmpnymoto" src={DroneImage} alt='images' />
      </Col>
      <Col>
        <h1 className='moto_heading'>Inspire_Innovate_Transform </h1>
        <p className='moto_content'>We are on a mission to redefine the future through sustainable innovation.Our  services are designed to help organizations for achieving their dreams by rapidly adopting and integrating the latest technological advancements.
          We work closely with our clients, understanding their unique challenges and goals, and tailor AI-driven solutions to accelerate their growth and innovation.
          Join us in shaping a future where technology not only meets the needs of today but also preserves the promise of a better tomorrow. At Oyaxis innovations, we're here to Inspire, innovate, and transform for a brighter, more sustainable future</p>
      </Col>
    </Container>
  )
}

export default DroneSide