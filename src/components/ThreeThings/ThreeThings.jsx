import { Container, Row, Col } from "../../utilis/Bootstrap.jsx";
import useBgRand from "../../hook/useBgRand";
import problemimg from "../../assets/imgs/question-mark-10941.png"
import cogimg from "../../assets/imgs/cog.png"
import goalimg from "../../assets/imgs/goal.png"



export default function ThreeThings() {
  const { handleBgImage } = useBgRand();

  return (
    <main>
      <Container fluid id="three-things" className="p-5">
        <Row>
          <Col><h2 className="text-center">Our Focus 
          <span>Why did we redesign?</span></h2></Col>
        </Row>
        
        <Row className="justify-content-center g-5">
          <Col sm={8} lg={3}>
            <p className="icon"><img src={problemimg} style={{width: "50%"}} /></p>
            <h3 className="text-center">Our <span className="d-md-block">Problem</span></h3>
            <p className="text-center text-md-start">Boca Code's candidate page lacked content and wasn't up to standard with other current and competitive bootcamps. Many features were also lacking mobile responsitivity.</p>
          </Col>

          <Col sm={8} lg={3}>
          <p className="icon"><img src={cogimg} style={{width: "50%"}} /></p>

            <h3 className="text-center">Implimented<span className="d-md-block">Changes</span></h3>
            <p className="text-center text-md-start">Along with styling changes, we added student's final projects as well as a Q&A section where a user can learn more about each student individually.</p>
          </Col>

          <Col sm={8} lg={3}>            
          <p className="icon"><img src={goalimg} style={{width: "60%"}} /></p>
            <h3 className="text-center">End <span className="d-md-block">Goal</span></h3>
            <p className="text-center text-md-start">To provide a unique description of each student that displays each student's strengths and skills as well as style through their final project presented.</p>
          </Col>

        </Row>
      </Container>
    </main>
  )
}