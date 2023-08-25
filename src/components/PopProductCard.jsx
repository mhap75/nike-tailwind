import { star } from "../assets/icons/index.js";

const PopProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flexCol group w-fit flex-1 cursor-pointer leading-normal">
      <img
        src={imgURL}
        alt={name}
        className="h-[280px] w-[280px] transition-transform group-hover:scale-105"
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="star rating" width={24} height={24} />
        <p className="font-montserrat text-xl text-slate-gray">
          {(Math.random() * (5.0 - 4.0) + 4.0).toFixed(1)}
        </p>
      </div>
      <h3 className="mt-2 font-palanquin text-2xl font-semibold">{name}</h3>
      <p className="mt-2 font-montserrat font-semibold text-coral-red ">
        {price}
      </p>
    </div>
  );
};

export default PopProductCard;
