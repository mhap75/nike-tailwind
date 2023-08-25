import { memo } from "react";

const ShoeCard = ({ onChooseImage, currentImage, imgUrl }) => {
  const handleChangeImage = () => {
    if (currentImage !== imgUrl) {
      onChooseImage(imgUrl.bigShoe);
    }
  };

  return (
    <div
      className={`rounded-xl border-2 ${
        currentImage === imgUrl.bigShoe
          ? "scale-110 border-coral-red"
          : "border-transparent"
      } cursor-pointer transition-all duration-500 max-sm:flex-1`}
      onClick={handleChangeImage}
    >
      <div className="flexCenter rounded-xl bg-card bg-cover bg-center max-sm:py-4 sm:h-40 sm:w-40">
        <img
          src={imgUrl.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default memo(ShoeCard);
