import { HashLink } from "react-router-hash-link";
import { Container, Row, Col, Button } from "../../utilis/Bootstrap.jsx";

export default function Intro() {

  return (
    <main>
      <Container fluid className="p-5">
        <Row className="d-flex align-items-center justify-content-center">
          <Col 
            sm={10} 
            // lg={ {span: 6, offset: 4} }
            // xl={5} 
            className="p-4">
              <h1><span>Boca Code's</span> Candidates Page Redesign</h1>
              <p>As part of my Project Management Internship at Boca Code I worked closely with two other members of the UX/UI internship to redesign Boca Code's candidates page. Using Figma, we designed a new layout for both desktop and mobile views. We then acted as stakeholders to the current Boca Code cohort as they built the live version in a one day hackathon. We helped the students with any wire framing or styling questions.</p>
              <HashLink to="/#portfolio" style={{"textDecoration":"none"}}><Button 
                size="lg" 
                variant="outline-danger" 
                className="button-style button-effect">See Redesigns</Button></HashLink>
          </Col>
        </Row>
      </Container>
    </main>
  )
}