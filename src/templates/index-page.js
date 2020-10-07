import React from "react";
import { Link, graphql } from "gatsby";
import { Container, Row, Col, OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import { CgWebsite } from "react-icons/cg";
import { MdOpenInNew, MdVideocam } from "react-icons/md";
import SEO from "../components/seo";
import Layout from "../components/Layout";
import Img from "gatsby-image";
import githubSVG from "../../static/img/social/github.svg";
import openSVG from "../../static/img/open.svg";

export const IndexPageTemplate = ({ portrait, projectImage1, projectImage2, projectImage3, projectImage4 }) => (
  <>
    <SEO title={"Alex Johnson"} />
    <div className="full-height">
      <Container className="d-flex flex-row justify-content-center align-items-center">
        <Row className="d-flex flex-column">
          <Col>
            <p className="subtitle">Hi, my name is</p>
            <h1 className="title">Alex Johnson.</h1>
            <h2 className="title lighten">I build things for the web.</h2>
          </Col>
          <Col lg={7}>
            <p>
              I am a software developer located in Fresno, CA. I work remotely with people around the world in order to
              design and build exceptional websites or applications from the ground up.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
    <Container className="mb-5 pb-5" id="about">
      <Row className="d-flex flex-row justify-content-center justify-content-lg-start ">
        <Col xs={11} lg={8}>
          <h3 className="numbered">
            <span>01.</span>About Me
          </h3>
        </Col>
      </Row>
      <Row className="d-flex flex-row justify-content-center">
        <Col xs={11} lg={8}>
          <p>
            Hello! My name is Alex Johnson. My goal is to bring people's ambitious ideas to life. Whether it's an
            informative website, inventory management system, internal business software, or a beautiful display of
            ideas... I can make it a reality.
          </p>
          <p>
            Not only do I enjoy making these sites, but I also strive to make this process enjoyable for <i>you</i>.
            From the initial plans to the final result, I understand that communication and collaboration are key to
            creating something awesome.
          </p>
          <p>
            My passion for computers and technology began when I was a child. I've gained valuable professional
            experience while working at California State University, Fresno for a period of five years, where I operated
            a television studio for the Kremen Education Building. I worked closely with professors and local companies
            to develop quality video, photo, and web content. This journey led to the start of my own company, Siteful
            Studios, where I now work first-hand with people around the world.
          </p>
        </Col>
        <Col xs={11} lg={4} className="mx-auto">
          <div className="masked-image">
            <Img fluid={portrait}></Img>
          </div>
        </Col>
      </Row>
    </Container>
    <Container className="mt-5 pt-5" id="projects">
      <Row>
        <Col xs={11} lg={8}>
          <h3 className="numbered">
            <span>02.</span>Projects I've Built
          </h3>
        </Col>
      </Row>
      <Row>
        <Col>
          {/* PROJECT 1 */}
          <Row>
            <Col lg={8}>
              <OverlayTrigger
                overlay={
                  <Tooltip id="github">
                    View Live Demo
                    <br />
                    (takes a minute to load)
                  </Tooltip>
                }
              >
                <a href="https://techcheck-demo.herokuapp.com/" target="_blank" rel="noreferrer">
                  <Img fluid={projectImage1} className="project-image" />
                </a>
              </OverlayTrigger>
            </Col>
            <Col className="project-description right">
              <h5 className="mono small mt-3 mt-xl-0">Featured Project</h5>
              <h4 className="bold">TechCheck </h4>
              <div className="project-overlap">
                <p>
                  An open-source inventory reservation and management application featuring user accounts, online item
                  reservation, designated pickup times, inventory tracking, maintenance records, and more.
                </p>
              </div>
              <p className="mt-3 white">
                Enterprise versions are in use by <br className="d-none d-xl-block" />
                CSU Fresno and CSU Sacramento.
              </p>
              <div className="svg-wrapper">
                <OverlayTrigger overlay={<Tooltip id="github">View Source Code</Tooltip>}>
                  <a href="https://github.com/asonj/TechCheck" target="_blank" rel="noreferrer">
                    <img src={githubSVG} />
                  </a>
                </OverlayTrigger>
              </div>
              <div className="svg-wrapper">
                <OverlayTrigger
                  overlay={
                    <Tooltip id="github">
                      Live Demo
                      <br />
                      (takes a minute to load)
                    </Tooltip>
                  }
                >
                  <a href="https://techcheck-demo.herokuapp.com/" target="_blank" rel="noreferrer">
                    <img src={openSVG} />
                  </a>
                </OverlayTrigger>
              </div>
            </Col>
          </Row>

          {/* PROJECT 2 */}

          <Row className="mt-5 pt-5">
            <Col className="project-description left order-1 order-lg-0">
              <h5 className="mono small mt-3 mt-xl-0">Featured Project</h5>
              <h4 className="bold">eduScrum Netherlands</h4>
              <div className="project-overlap">
                <p>
                  eduScrum is a company which seeks to bring scrum to education. Their website had not been updated
                  since 2012. This year the site received a complete overhaul, along with the ability for site owners to
                  have full control of content editing. Now, the site will be fresh for years to come.
                </p>
              </div>
              <p className="mt-3 white">eduScrum.nl is featured in English, Spanish, and Dutch.</p>
              <div className="svg-wrapper">
                <OverlayTrigger overlay={<Tooltip id="github">Live Site</Tooltip>}>
                  <a href="https://eduscrum.nl" target="_blank" rel="noreferrer">
                    <img src={openSVG} />
                  </a>
                </OverlayTrigger>
              </div>
            </Col>
            <Col lg={8} className="order-0 order-lg-1">
              <OverlayTrigger overlay={<Tooltip id="github">View Live Site</Tooltip>}>
                <a href="https://eduscrum.nl" target="_blank" rel="noreferrer">
                  <Img fluid={projectImage2} className="project-image" />
                </a>
              </OverlayTrigger>
            </Col>
          </Row>

          {/* PROJECT 3 */}
          <Row className="mt-5 pt-5">
            <Col lg={8}>
              <Img fluid={projectImage3} className="project-image" />
            </Col>
            <Col className="project-description right">
              <h5 className="mono small mt-3 mt-xl-0">Featured Project</h5>
              <h4 className="bold">Quote and Ordering System</h4>
              <div className="project-overlap">
                <p>
                  A{" "}
                  <a href="https://en.wikipedia.org/wiki/Configure,_price_and_quote" target="_blank" rel="noreferrer">
                    CPQ
                  </a>{" "}
                  tool which allows companies to quickly and accurately quote customer orders. The application is
                  capable of tracking real-time inventory prices and quantities, generating precise quotes from a
                  shopping cart of highly customized items, fulfilling transactions, and more.
                </p>
              </div>
              <p className="mt-3 white">
                Developed for and used by <br />
                <a href="https://wardrobeandbath.com" target="_blank" rel="noreferrer">
                  Wardrobe and Bath Specialties
                </a>{" "}
                in Modesto, CA.
              </p>
            </Col>
          </Row>

          {/* PROJECT 4 */}

          <Row className="mt-5 pt-5">
            <Col className="project-description left order-1 order-lg-0">
              <h5 className="mono small mt-3 mt-xl-0">Featured Project</h5>
              <h4 className="bold">Lightschools</h4>
              <div className="project-overlap">
                <p>
                  Lightschools is an education and innovation ecosystem that required a website with a strong visual
                  identity. The layout and graphics were designed by{" "}
                  <a href="ilikemakingthings.com" target="_blank" rel="noreferrer">
                    Roos Vanderkamp
                  </a>{" "}
                  and I brought them to life with a pixel-perfect website. Users can signup for courses using online
                  payments, check live calendar events, and more.
                </p>
              </div>
              <p className="mt-3 white">
                Site owners can fully edit the site, including content, photos, events, and blogs.{" "}
              </p>
              <div className="svg-wrapper">
                <OverlayTrigger overlay={<Tooltip id="github">Live Site</Tooltip>}>
                  <a href="https://lightschools.org" target="_blank" rel="noreferrer">
                    <img src={openSVG} />
                  </a>
                </OverlayTrigger>
              </div>
            </Col>
            <Col lg={8} className="order-0 order-lg-1">
              <OverlayTrigger overlay={<Tooltip id="github">View Live Site</Tooltip>}>
                <a href="https://lightschools.org" target="_blank" rel="noreferrer">
                  <Img fluid={projectImage4} className="project-image" />
                </a>
              </OverlayTrigger>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    <Container className="mt-5 pt-5">
      <Row>
        <Col xs={12} className="mb-5">
          <h3 className="text-center">Other Noteworthy Projects</h3>
        </Col>
        <Col className="grid">
          <Row className="card d-flex flex-column">
            <Col className="mb-3">
              <CgWebsite />
              <div className="svg-wrapper darker" style={{ float: "right" }}>
                <OverlayTrigger overlay={<Tooltip id="github">Live Site</Tooltip>}>
                  <a href="https://lightschools.org" target="_blank" rel="noreferrer">
                    <MdOpenInNew />
                  </a>
                </OverlayTrigger>
              </div>
            </Col>
            <Col>
              <h5 className="bold">Semco Style Institute </h5>
              <p>
                A website for the US branch of the international company SSI started by{" "}
                <a href="https://en.wikipedia.org/wiki/Ricardo_Semler" target="_blank" rel="noreferrer">
                  Ricardo Semler
                </a>
                .
              </p>
            </Col>
            <Col>
              <p className="mono color3 small">Development, Marketing, Mailchimp</p>
            </Col>
          </Row>
          <Row className="card d-flex flex-column">
            <Col className="mb-3">
              <CgWebsite />
              <div className="svg-wrapper darker" style={{ float: "right" }}>
                <OverlayTrigger overlay={<Tooltip id="github">Live Site</Tooltip>}>
                  <a href="https://www.wardrobeandbath.com/home" target="_blank" rel="noreferrer">
                    <MdOpenInNew />
                  </a>
                </OverlayTrigger>
              </div>
            </Col>
            <Col>
              <h5 className="bold">Wardrobe and Bath Specialties</h5>
              <p>A website showcasing product catalogs, brochures, and company information.</p>
            </Col>
            <Col>
              <p className="mono color3 small">Design, Development, Restructure</p>
            </Col>
          </Row>
          <Row className="card d-flex flex-column">
            <Col className="mb-3">
              <CgWebsite />
              <div className="svg-wrapper darker" style={{ float: "right" }}>
                <OverlayTrigger overlay={<Tooltip id="github">Live Site</Tooltip>}>
                  <a href="https://www.eduscrumusa.com/" target="_blank" rel="noreferrer">
                    <MdOpenInNew />
                  </a>
                </OverlayTrigger>
              </div>
            </Col>
            <Col>
              <h5 className="bold">eduScrum USA</h5>
              <p>A sleek website for the USA branch of eduScrum. Created with Squarespace per customer needs.</p>
            </Col>
            <Col>
              <p className="mono color3 small">Design, Squarespace, Photography</p>
            </Col>
          </Row>
          <Row className="card d-flex flex-column">
            <Col className="mb-3">
              <MdVideocam />
              <div className="svg-wrapper darker" style={{ float: "right" }}>
                <OverlayTrigger overlay={<Tooltip id="github">Watch Video</Tooltip>}>
                  <a href="https://www.youtube.com/watch?v=ZuHZhi1B4T4" target="_blank" rel="noreferrer">
                    <MdOpenInNew />
                  </a>
                </OverlayTrigger>
              </div>
            </Col>
            <Col>
              <h5 className="bold">Hope Theory: Make Your Life Better</h5>
              <p>
                A video I designed and animated to visualize{" "}
                <a href="https://www.linkedin.com/in/christianwandeler" target="_blank" rel="noreferrer">
                  Christian Wandeler's
                </a>{" "}
                research at CSU Fresno. (27k+ Views)
              </p>
            </Col>
            <Col>
              <p className="mono color3 small">After Effects, Video, Sound Design</p>
            </Col>
          </Row>
          <Row className="card d-flex flex-column">
            <Col className="mb-3">
              <MdVideocam />
              <div className="svg-wrapper darker" style={{ float: "right" }}>
                <OverlayTrigger overlay={<Tooltip id="github">Watch Video</Tooltip>}>
                  <a
                    href="https://drive.google.com/file/d/187dT0vns6YMsMXiPlTQX4Q1olsRnNNBr/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MdOpenInNew />
                  </a>
                </OverlayTrigger>
              </div>
            </Col>
            <Col>
              <h5 className="bold">The Timeout Movie</h5>
              <p>
                A movie for the Fresno State Football half-time show. In collaboration with the MCJ program, my role in
                the film was co-director, videography, and editor. Scored by the Bulldog Marching Band.
              </p>
            </Col>
            <Col>
              <p className="mono color3 small">Videography, Editing, Project Management</p>
            </Col>
          </Row>
          <Row className="card d-flex flex-column">
            <Col className="mb-3">
              <MdVideocam />
              <div className="svg-wrapper darker" style={{ float: "right" }}>
                <OverlayTrigger overlay={<Tooltip id="github">Watch Video</Tooltip>}>
                  <a href="https://www.youtube.com/watch?v=dW1vEe6-_HA" target="_blank" rel="noreferrer">
                    <MdOpenInNew />
                  </a>
                </OverlayTrigger>
              </div>
            </Col>
            <Col>
              <h5 className="bold">Volunteering at the Central California Food Bank</h5>
              <p>
                A short video highlighting the Kremen School's participation in the backpack program which provides
                children in need a backpack filled with food to last the weekend.
              </p>
            </Col>
            <Col>
              <p className="mono color3 small">Videography, Editing</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    <Container className="mt-5 pt-5" id="contact">
      <Row className="d-flex flex-column justify-content-center align-items-center">
        <Col xs={10} md={8} lg={6} className="mb-3">
          <h3 className="text-center numbered">
            <span>03.</span>Get In Touch
          </h3>
        </Col>
        <Col xs={10} md={8} lg={6} className="text-center">
          I am currently looking for opportunities to be part of exciting projects. Whether you have a question, idea,
          or just want to say hi, my inbox is always open. I will do my best to return a message as soon as possible.
        </Col>
        <Col xs={10} md={8} lg={6} className="text-center mt-5">
          <a href="mailto:alexjohnson@sitefulstudios.com">
            <Button variant="outline-primary" size="lg" className="button-brand">
              Say Hello 👋🏻
            </Button>
          </a>
        </Col>
      </Row>
    </Container>
  </>
);

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <IndexPageTemplate
        portrait={frontmatter.portrait.childImageSharp.fluid}
        projectImage1={frontmatter.projectImage1.childImageSharp.fluid}
        projectImage2={frontmatter.projectImage2.childImageSharp.fluid}
        projectImage3={frontmatter.projectImage3.childImageSharp.fluid}
        projectImage4={frontmatter.projectImage4.childImageSharp.fluid}
      />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        portrait {
          childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        projectImage1 {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        projectImage2 {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        projectImage3 {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        projectImage4 {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
