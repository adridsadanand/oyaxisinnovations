import React from 'react'
import './footerpage.css'
import { Container,Row, Col } from 'react-bootstrap'
import { FaLinkedinIn } from 'react-icons/fa';
import { FiFacebook } from 'react-icons/fi';
import { CiInstagram } from 'react-icons/ci';
import { RiTwitterXFill } from 'react-icons/ri';

function FooterPage() {
  return (
    <div className='Footer_mjrdiv'>
    <hr className='Fotr_undrlin'/>
<Container>

<Row xs={1} md={1}>
<Col>
<Row xs={1} md={3}>
        <Col  md={{ order: 'first' }}>
        <div ><h1 className='Footer_logo'>OYAXIS INNOVATIONS</h1>
        </div>
        
        </Col>
       <Col xs={{ order: 'first' }}>
        <p className='fotr_log_tag'>"INSPIRE INNOVATE & TRANSFORM"</p>
       </Col>
        
        
        <Col>

        <div className='ftr_cntc_dv'>
            
            <p  className='fotr_cntct_tag'>oyaxisinnovations@gmail.com</p>
            
            <div className='fotr_social_app'><RiTwitterXFill/> <FaLinkedinIn/> <FiFacebook/> <CiInstagram/></div>
        </div>
        </Col>
        </Row>
    </Col>
        <Col className='fotr_cpyrtdiv' md={12}>
          <hr className='Fotr_undrlin'></hr>
          <p>Copyright © 2023 oyaxis innovations</p>
        </Col>
      </Row>
</Container>
    </div>
  )
}

export default FooterPage