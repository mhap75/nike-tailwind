import { memo } from "react";

const Button = ({ children, icon }) => {
  return (
    <button className="flexCenter gap-2 rounded-full border border-coral-red bg-coral-red px-7 py-4 font-montserrat text-lg leading-none text-white hover:bg-opacity-80">
      {children}
      {icon && (
        <img src={icon} alt="icon" className="ml-2 h-5 w-5 rounded-full" />
      )}
    </button>
  );
};

export default memo(Button);
