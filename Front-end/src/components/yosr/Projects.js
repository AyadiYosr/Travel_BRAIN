import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../../assets/img/project-img1.jpg";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.png";
import projImg4 from "../../assets/img/project-img4.png";
import projImg5 from "../../assets/img/project-img5.png";
import projImg6 from "../../assets/img/project-img6.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Galaxy",
      description: "Astr Blogs",
      imgUrl: projImg1,
    },
    {
      title: "Medical",
      description: "Medical Blogs",
      imgUrl: projImg3,
    },
    {
      title: "Business",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Traveling",
      description: "Travel and Adventures",
      imgUrl: projImg4,
    },
    {
      title: "Engineering",
      description: "Soft and hardware Enginnering",
      imgUrl: projImg5,
    },
    {
      title: "Cars",
      description: "Latest cars models",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Guide</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Blogs overvieww</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Contact us </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">How to use TravelBrain?</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
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
                     
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Our website features a wide range of travel blogs and guides, covering different destinations and types of travel. Browse through our selection and find inspiration for your next adventure. You can also filter your search by location, travel type, or budget to find the perfect blog or guide that suits your preferences. Once you find a blog or guide that interests you, simply click on it to access the full content</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
