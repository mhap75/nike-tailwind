import { star } from "../assets/icons/index.js";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flexCenter flex-col">
      <img
        src={imgURL}
        alt={customerName}
        className="h-[120px] w-[120px] rounded-full object-cover"
      />
      <p className="info-text mt-6 max-w-sm text-center">{feedback}</p>
      <div className="flexCenter mt-3 gap-2.5">
        <img
          src={star}
          width={24}
          height={24}
          alt="star"
          className="m-0 object-contain"
        />
        <p className="font-montserrat text-xl text-slate-gray">{rating}</p>
      </div>
      <h3 className="mt-1 text-center font-palanquin text-3xl font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
