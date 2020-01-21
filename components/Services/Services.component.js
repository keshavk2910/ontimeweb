const ServicesComp = ({service}) => {
    return (
        <a>
        <img src={service.img} width="150px"/>
        <h4>{service.title}</h4>
        <div className="service_desc">
        <p>{service.desc}</p>
        </div>
        </a>
    );
}
export default ServicesComp;