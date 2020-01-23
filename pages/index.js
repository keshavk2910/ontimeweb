import Container from "@material-ui/core/Container";
import "./index.scss";
import { projects, services } from "../data";
import ProjectHoverCon from "../components/ProjectHover/ProjectHover.container";
import ServicesCon from "../components/Services/Services.container";
import BlogCon from "../components/BlogSection/BlogSection.container";
import AwesomeButton from "../components/AwesomeButton/AwesomeButton";
import fetch from "isomorphic-unfetch";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Home = ({ posts }) => {
  return (
    <>
      <section id="home" className="main-section">
        <div className="videodiv">
        <Container fixed>
          <div className="content-main">
            <h1>Ontime Web Services</h1>
            <p>
              Perfectly crafted, creative and innovative Websites, Android and
              iPhone App Design, Development & Digital Marketing Solutions.
            </p>
            <AnchorLink offset='100' href='#work'>
            <AwesomeButton text="Our Work" />
            </AnchorLink>
          </div>
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
        <ProjectHoverCon projects={projects} />
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
Home.getInitialProps = async function() {
  const res = await fetch(
    "https://backend.ontimewebservices.com/wp-json/wp/v2/posts?_embed&per_page=6"
  );
  const data = await res.json();
  return { posts: data };
};
export default Home;
