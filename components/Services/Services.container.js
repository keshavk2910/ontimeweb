import ServicesComp from './Services.component';
import './services.scss';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer'


const ServicesCon = ({services}) => {

    return (
        <div className="services_list">
         <div className="services_wrap">
        {services.map((service, index) => 
         <InView triggerOnce={true} threshold="0.4" key={index} rootMargin="-80px 0px 0px 0px">
         {({ inView, ref }) => (
           <div ref={ref} className="singleService">
        <motion.div 
        animate={inView ? {
        opacity: 1,
        y: '0%',
        transition: { 
        duration: 0.4,
        delay: index * 0.05 }
        }
     : ""} 

     initial={{ y: '50%', opacity: 0, transition:{
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96],
      }}} 
      exit={{ y: '50%', opacity: 0, transition:{
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96],
      } }} >
        <ServicesComp service={service}/>
        </motion.div>
        </div>
)}
</InView>
        )}
        </div>
        </div>
    );
}
export default ServicesCon;