import { ServiceCard } from "../components";
import { services } from "../const/index.js";

const Services = () => {
  return (
    <section className="max-container flexCenter flexWrap gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
