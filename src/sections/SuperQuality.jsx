import { shoe8 } from "../assets/images/index.js";
import { Button } from "../components/index.js";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flexBetween max-container w-full gap-10 max-lg:flex-col"
    >
      <div className="flexCol flex-1">
        <h2 className="mt-10 font-palanquin text-4xl font-bold lg:max-w-lg">
          <span className="relative z-10 rounded pr-10 xl:whitespace-nowrap xl:bg-white">
            We provide you with
          </span>
          <br />
          <span className="mt-3 inline-block text-coral-red">
            Super Quality
          </span>{" "}
          Shoes
        </h2>
        <p className="info-text mt-4 lg:max-w-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="info-text mt-6 lg:max-w-lg">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button>View details</Button>
        </div>
      </div>

      <div className="flexCenter flex-1">
        <img
          src={shoe8}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
