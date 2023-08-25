import { arrowRight } from "../assets/icons/index.js";
import { offer } from "../assets/images/index.js";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className="flexBetween max-container items-center gap-10 max-xl:flex-col-reverse">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={678}
          className="w-full object-contain"
          alt="special offer"
        />
      </div>
      <div className="flexCol flex-1">
        <h2 className="font-palanquin text-4xl font-bold">
          <span className="text-coral-red">Special </span>
          Offer
        </h2>
        <p className="info-text mt-4">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="info-text mt-6">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="flexWrap mt-11 gap-4">
          <Button icon={arrowRight}>Shop now</Button>
          <Button className="border-slate-gray bg-white text-slate-gray">
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
