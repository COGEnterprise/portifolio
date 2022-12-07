import { Container, Row, Col, Tab, Nav, Image} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useRef, useState } from "react";

export const Projects = () => {

  const projects = [
    {
      title: "Achei - Aplicativo de Busca e Cupons",
      description: "O achei é um aplicativo que conecta pessoas que precisam de ajuda para busca de serviços, produtos e cupons.",
      imgUrl: 'https://res.cloudinary.com/dw9fyi87w/image/upload/v1670373527/cog/acheiTelaIniicial.png',
    },
 
  ];

  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              <div className="animate__animated animate__fadeInUp">
                <h2>Projetos</h2>
                <p>A COG apresenta seu primeiro projeto, o <strong>Achei</strong>, um aplicativo que conecta pessoas que precisam de ajuda para busca de serviços, produtos e cupons.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Pag 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second" disabled>Pag 2</Nav.Link>

                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third" disabled>Pag 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className="animate__animated animate__slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })

                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <Image className="background-image-right" src={colorSharp2}/>
    </section>
  )
}
