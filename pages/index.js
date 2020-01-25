import Container from "@material-ui/core/Container";
import {SectionMain, Section2, FeaturedTitle, ServicesSection} from "../styles/indexStyles.js";
import { projects, services } from "../data";
import dynamic from 'next/dynamic'
import posts from '../posts.json';
import AwesomeButton from '../components/AwesomeButton/AwesomeButton';
import BlogCon from "../components/BlogSection/BlogSection.container";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ProjectHoverCon from "../components/ProjectHover/ProjectHover.container";
import ServicesCon from "../components/Services/Services.container";

const projectsLimit = projects.slice(0, 4).map(project => {
  return project
})

const Home = () => {
  return (
    <>
      <SectionMain id="home" bgimg="https://ik.imagekit.io/zkvrzayer06/tr:f-auto,q-50/pedro-lastra-Nyvq2juw4_o-unsplash_25No_PXHs-.jpg">
        <div>
          <Container fixed>
              <div className="content-main">
                <h1>Ontime Web Services</h1>
                <p>
                  Perfectly crafted, creative and innovative Websites, Android
                  and iPhone App Design, Development & Digital Marketing
                  Solutions.
                </p>
                <AnchorLink offset="100" href="#work">
                  <AwesomeButton text="Our Work" />
                </AnchorLink>
              </div>
          </Container>
        </div>
      </SectionMain>
      <Section2 id="about-us">
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
      </Section2>
      <FeaturedTitle>
        <h2>Services We Offer</h2>
      </FeaturedTitle>
      <ServicesSection id="services">
        <Container fixed>
          <ServicesCon services={services} />
        </Container>
      </ServicesSection>
      <section id="work">
        <FeaturedTitle>
          <h2>Featured Projects</h2>
        </FeaturedTitle>
        <ProjectHoverCon projects={projectsLimit} />
      </section>
      <FeaturedTitle>
        <h2>Latest From Our Blog</h2>
      </FeaturedTitle>
      <ServicesSection id="blog">
        <Container fixed>
            <BlogCon page="home" posts={posts} delay={true} /> 
          <div className="allButton">
            <AwesomeButton href="/blog" text="All Blogs" />
          </div>
        </Container>
      </ServicesSection>
    </>
  );
};
export default Home;
