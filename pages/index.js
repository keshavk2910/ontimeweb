import Container from "@material-ui/core/Container";
import "../styles/index.scss";
import { projects, services } from "../data";
import dynamic from 'next/dynamic'
import fetch from 'isomorphic-unfetch';
import posts from '../posts.json';
import { motion } from "framer-motion";

const AwesomeButton = dynamic(() => import('../components/AwesomeButton/AwesomeButton'));
const BlogCon = dynamic(() => import("../components/BlogSection/BlogSection.container"));
const AnchorLink = dynamic(() => import("react-anchor-link-smooth-scroll"));
const ProjectHoverCon = dynamic(() => import("../components/ProjectHover/ProjectHover.container"));
const ServicesCon = dynamic(() => import("../components/Services/Services.container"));

const projectsLimit = projects.slice(0, 4).map(project => {
  return project
})

const baseAnimation = {
  exit: {
    y: "50%",
    opacity: 0,
    transition: {
      duration: 1,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  },
  enter: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.8
    }
  }
};

const Home = () => {
  return (
    <>
      <section id="home" className="main-section">
        <div className="videodiv">
          <Container fixed>
          <motion.div initial="exit" animate="enter" exit="exit">
              <motion.div variants={baseAnimation} className="content-main">
                <h1>Ontime Web Services</h1>
              </motion.div>
              <motion.div variants={baseAnimation} className="content-main">
                <p>
                  Perfectly crafted, creative and innovative Websites, Android
                  and iPhone App Design, Development & Digital Marketing
                  Solutions.
                </p>
              </motion.div>
              <motion.div variants={baseAnimation} className="content-main">
                <AnchorLink offset="100" href="#work">
                  <AwesomeButton text="Our Work" />
                </AnchorLink>
              </motion.div>
              </motion.div>
          </Container>
        </div>
      </section>
      <section className="section2" id="about-us">
        <Container fixed>
          <div className="section2_content">
            <h2>
              We Do Web Development <br /> For Businesses Of All Sizes!
            </h2>
            <p>
              Ontime Web Services is a web design company that specilizes in
              WordPress web development and maintenance. We offer both web
              design and development services. We are passionate about unique,
              creative and functional design for small, medium and large
              businesses. It doesn’t matter what size your business is – we want
              to hear your idea and would love the opportunity to offer our
              services to see it come to light.
            </p>
            <p>
              We combine our technical and design oriented experience to offer a
              wide assortment of services in order to develop, integrate or
              revitalize your brand. Our experience within the industry allows
              us to develop a concise strategy to help your business grow. From
              the beginning of the project, we will work closely with you every
              step of the way in order to complete and establish your vision.
            </p>
            <p>
              Web design and development is a constantly evolving and
              challenging industry. As a company, we make a point to adapt,
              learn and grow with changing technologies and best practices with
              design and development.
            </p>
          </div>
        </Container>
      </section>
      <div className="featured_title">
        <h2>Services We Offer</h2>
      </div>
      <section id="services" className="services">
        <Container fixed>
          <ServicesCon services={services} />
        </Container>
      </section>
      <section id="work">
        <div className="featured_title">
          <h2>Featured Projects</h2>
        </div>
        <ProjectHoverCon projects={projectsLimit} />
      </section>
      <div className="featured_title">
        <h2>Latest From Our Blog</h2>
      </div>
      <section id="blog">
        <Container fixed>
            <BlogCon posts={posts} delay={true} /> 
          <div className="allButton">
            <AwesomeButton href="/blog" text="All Blogs" />
          </div>
        </Container>
      </section>
    </>
  );
};
export default Home;
