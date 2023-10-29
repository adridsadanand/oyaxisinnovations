import DroneSide from "./DroneSide";
import "./secondpage.css"
import { Row, Col, Container } from 'react-bootstrap'

function SecondPage() {
    return (
        <Container fluid className='fullpag_major'>

            <Row >
            <Col><DroneSide /></Col> 
                
            </Row>

        </Container>
    )
}

export default SecondPage