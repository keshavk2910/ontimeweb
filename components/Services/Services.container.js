import ServicesComp from './Services.component';
import './services.scss';


const ServicesCon = ({services}) => {

    return (
        <div className="services_list">
         <div className="services_wrap">
        {services.map((service, index) => 
           <div key={index} className="singleService">
        <ServicesComp service={service}/>
        </div>
        )}
        </div>
        </div>
    );
}
export default ServicesCon;