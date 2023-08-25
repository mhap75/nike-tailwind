import { useState } from "react";
import { arrowRight } from "../assets/icons/index.js";
import { bigShoe1 } from "../assets/images/index.js";
import { Button, ShoeCard } from "../components";
import { shoes, statistics } from "../const/index.js";

const Hero = () => {
  const [bigImage, setBigImage] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="flexCol max-container min-h-screen w-full justify-center gap-10 xl:flex-row"
    >
      <div className="flexCol max-xl:padding-x relative w-full items-start justify-center pt-28 xl:w-2/5">
        <p className="font-montserrat text-xl text-coral-red">
          Our summer collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="relative z-10 rounded pr-10 xl:whitespace-nowrap xl:bg-white">
            The New Arrival
          </span>
          <br />
          <span className="mt-3 inline-block text-coral-red">Nike</span> Shoes
        </h1>
        <p
          className="mb-14 mt-6 font-montserrat text-lg
        leading-8 text-slate-gray sm:max-w-sm"
        >
          Discover stylish Nike arrivals, quality, comfort, and innovation for
          your active life.
        </p>
        <Button icon={arrowRight}>Show now</Button>

        <div className="flexStart mt-20 w-full flex-wrap gap-16">
          {statistics.map((stat) => (
            <div key={stat.value}>
              <p className="font-palanquin text-4xl font-bold">{stat.value}</p>
              <p className="font-montserrat leading-7 text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flexCenter relative flex-1 bg-primary bg-hero bg-cover bg-center max-xl:py-40 xl:min-h-screen">
        <img
          src={bigImage}
          alt="nike shoe"
          width={610}
          height={500}
          className="relative z-10 object-contain"
        />

        <div className="absolute -bottom-[5%] flex gap-4 max-sm:px-6 sm:left-[10%] sm:gap-6">
          {shoes.map((sh) => (
            <div key={sh.thumbnail}>
              <ShoeCard
                onChooseImage={(img) => setBigImage(img)}
                currentImage={bigImage}
                imgUrl={sh}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
