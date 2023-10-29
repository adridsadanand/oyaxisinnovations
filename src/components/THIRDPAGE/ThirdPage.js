import React from 'react';
import {  Container, Row} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './thirdpage.css'
import iotimg from "../../assets/iotimg.jpg"
import cleanenrgy from "../../assets/cleanenergy.jpg"
import Robotics from "../../assets/Robotics.jpg"

function ThirdPage() {
  // Create an array of data for your cards
  const cardData = [
    {
      imageSrc: iotimg,
      heading: 'Internet Of Things',
      description: ' IoT devices are equipped with sensors, software, and other technologies that enable them to collect and share information from their environment. IoT technology can be applied to various domains, such as smart homes, smart cities, smart health, smart agriculture, and smart industry. IoT technology can improve efficiency, convenience, security, and quality of life for people and businesses.',
    },
    {
      imageSrc: cleanenrgy,
      heading: 'Clean Energy Tech',
      description: ' This term used to describe any process, product, or service that reduces negative environmental impacts through significant energy efficiency improvements, the sustainable use of resources, or environmental protection activities.it  includes a broad range of technologies related to recycling, renewable energy, information technology, green transportation, electric motors, green chemistry and more. ',
    },
    {
      imageSrc: Robotics,
      heading: ' Robotics',
      description: 'This are two related but distinct concepts that involve using technology to perform tasks that are usually done by humans. Robotics is a branch of engineering that deals with designing, building, programming, and using robots autonomously. Automation is the process of using computer software, machines, or other devices to control and execute tasks without human intervention',
    },
    {
      imageSrc: 'https://media-www.sqspcdn.com/images/components/templates/desktop/emmeline-1500w.jpg',
      heading: 'Agriculture Technology',
      description: 'Description 2: Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    },
    {
      imageSrc: 'https://media-www.sqspcdn.com/images/components/templates/desktop/emmeline-1500w.jpg',
      heading: 'Heading 2',
      description: 'Description 2: Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    },
    {
      imageSrc: 'https://media-www.sqspcdn.com/images/components/templates/desktop/emmeline-1500w.jpg',
      heading: 'Heading 2',
      description: 'Description 2: Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    },
  ];

  return (

    <Container className='scroll_page'>
     <Row className='Card_Row' xs={1} md={3}>
      {cardData.map((card, index) => (
        <Card data-aos="flip-right" data-aos-duration="3000" data-aos-easing="ease-out-cubic" className='block' key={index}   style={{
          width: '18rem',
          transition: 'all 0.3s ease-in-out',
          boxShadow: '5px 5px 10px rgba(0,0,0,0.1)',
        }}  >
          <img className='cardimage_div' alt={card.heading} src={card.imageSrc} />
          <Card.Body  >
            <h1 className='card_title'>{card.heading} </h1 >
            <Card.Text className='card_text'>{card.description}</Card.Text>
           
          </Card.Body>
        </Card>
      ))}
    </Row>
  </Container>
    
  );
}

export default ThirdPage;