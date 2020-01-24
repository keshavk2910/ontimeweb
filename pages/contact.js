import { motion } from 'framer-motion';
import '../styles/contact.scss';
import Container from "@material-ui/core/Container";

const Contact = () => {
    return (<>
        <div className="contactTop">
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
        <h1>Contact Us</h1>
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
        } }} id="contactPage" className="contactPage">
        
        </motion.section>
    </>);
}
export default Contact;