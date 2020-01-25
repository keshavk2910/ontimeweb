import { AboutTop, AboutSection, AboutContent } from '../styles/aboutStyles';
import Container from "@material-ui/core/Container";

const About = () => {
    return (<>
        <AboutTop bgimg="https://ik.imagekit.io/zkvrzayer06/tr:f-auto,q-50/nastuh-abootalebi-yWwob8kwOCk-unsplash_P6jBPd4K0.jpg">
      <div>
        <h1>About Us</h1>
        </div>
    </AboutTop>
        <AboutSection id="aboutPage">
        <AboutContent>
        <Container fixed>
          <div>
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
      </AboutContent>
        </AboutSection>
    </>);
}
export default About;