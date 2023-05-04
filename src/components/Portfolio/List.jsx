import { Container, Row, Col } from "../../utilis/Bootstrap.jsx";
import Panel from "./Panel.jsx";
import data from "../../data/portfolio.json";

export default function List () {

  return (
    <Container id="portfolio" className="p-5">
      <Row>
        <Col>
          <h2 className="text-center">Redesigns <span>Click a Card to view our Figma Designs.</span></h2>
        </Col>
      </Row>

      <Row className="g-3 justify-content-center portfolio-list">
        {
          data.map( 
            (element) => {
              return element
                ? <Panel 
                    key={element.id}
                    data={element} />
                : <p>Loading</p>
            }
          )
        }
      </Row>
    </Container>
  )
}