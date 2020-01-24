import { motion } from 'framer-motion';
import '../styles/about.scss';
import Container from "@material-ui/core/Container";

const About = () => {
    return (<>
        <div className="aboutTop">
      <motion.div 
        animate={{
        opacity: 1,
        y: '0%',
        transition: { 
        duration: 0.4}
        }}

     initial={{ y: '50%', opacity: 0, transition:{
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96],
      }}} 

      exit={{ y: '50%', opacity: 0, transition:{
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96],
      } }} className="content">
        <h1>About Us</h1>
        </motion.div>
    </div>
        <motion.section
        animate={{
          opacity: 1,
          y: '0%',
          transition: { 
          duration: 0.4}
          }}
  
       initial={{ y: '50%', opacity: 0, transition:{
          duration: 1,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}} 
  
        exit={{ y: '50%', opacity: 0, transition:{
          duration: 1,
          ease: [0.43, 0.13, 0.23, 0.96],
        } }} id="aboutPage">
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
        </motion.section>
    </>);
}
export default About;