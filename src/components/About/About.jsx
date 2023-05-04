import { useState } from "react";
import { Container, Row, Col, Image } from "../../utilis/Bootstrap.jsx";

export default function About() {
  const[imageIndex, setImageIndex] = useState(0);

  const imageArray = [
    "IMG_9365.PNG",
    "IMG_9366.PNG",
    "hackathon-1.webp"
  ];

  if (imageIndex >= imageArray.length) 
    setImageIndex(0);

  return (
    <Container id="about" className="p-5">
      <Row>
        <Col>
          <h2 className="text-center">Hackathon <span><a href="https://bocacode.com/candidates">Check out the Live Site →</a></span></h2>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs={8} md={6} lg={4} xl={3}>
          <Image src={`${process.env.PUBLIC_URL}/images/${imageArray[imageIndex]}`}
            alt="Jiho Sohn"            
            className="button-effect border-style mb-4"
            fluid
            style={{"cursor":"zoom-in"}}
            onClick={() => setImageIndex(imageIndex+1)} />
        </Col>

        <Col  lg={8}  className="text-white">
        <p>At Boca Code's Hackathon, cohort 10 was given the task to complete a full week sprint in one day. They were to rebuild the candidates page based off the figma page myself and the UX/UI internship team designed.</p>

        <p>Student's used Jira board to distribute tasks and used Agile and Scrum methodologies to be as efficient as possible and implement clearcollaboration between all 23 students..</p>
        
        <p>Overall, the hackathon was very much a success and all tasks were able to be completed by the end of the day. They pushed the live version the same day and our team and Boca Code's instructors could not be happier with the results.</p>
        </Col>
      </Row>
    </Container>
  );
}
