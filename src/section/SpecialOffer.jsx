import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex flex-col flex-1">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className=" text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-2 font-montserrat text-info"> Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
        <p className="mt-2 font-montserrat text-info"> Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        <div className="flex mt-14 flex-wrap gap-6">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
