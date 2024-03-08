import { services } from "../constants";
import ServicesCard from "../components/ServicesCard";

const Services = () => {
  return (
    <section>
      <div className="mt-16 flex-1 flex justify-center gap-9 max-container flex-wrap">
        {services.map((service) => (
          <ServicesCard key={service.label} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
