import React from 'react';
import {  Container, Row} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './thirdpage.css'
import iotimg from "../../assets/iotimg.jpg"
import cleanenrgy from "../../assets/cleanenergy.jpg"
import Robotics from "../../assets/Robotics.jpg"
import agriculture from "../../assets/agri.jpg"
import learning from "../../assets/arvr.jpg"
import health from "../../assets/helth.jpg"



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
      imageSrc: agriculture,
      heading: 'Agriculture Technology',
      description: 'Discover the future of farming with our innovative AgTech solutions, empowering modern farmers to enhance efficiency and boost yields. Explore the latest trends in precision farming, smart irrigation, and data-driven insights, revolutionizing the agricultural landscape. We provide expert guidance and top-notch AgTech products for sustainable and profitable agriculture. Experience the future of farming today',
    },
    {
      imageSrc: health ,
      heading: 'Quantified Self & Health Tech',
      description: 'Unlock Your Full Potential with Quantified Self & Health Tech. Explore cutting-edge solutions that empower you to monitor, optimize, and transform your well-being. From wearables to data-driven insights, our Health Tech innovations put you in control. Achieve your health and fitness goals, track progress, and live a healthier life with the latest Quantified Self technology',
    },
    {
      imageSrc: learning,
      heading: 'Intractive Learning Solutions',
      description: 'Elevate Learning with Interactive AR and VR Solutions. Discover immersive educational experiences that engage and inspire. Our Interactive Learning Solutions blend AR and VR technologies to create dynamic, interactive lessons. Transform traditional learning into captivating adventures for students of all ages. Explore the future of education with our AR and VR solutions.',
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