import { memo } from "react";
import { twMerge } from "tailwind-merge";

const Button = ({ children, icon, className }) => {
  return (
    <button
      className={twMerge(
        "flexCenter gap-2 rounded-full border border-coral-red bg-coral-red px-7 py-4 hover:border-opacity-50" +
          " font-montserrat text-lg leading-none text-white hover:bg-opacity-80",
        className,
      )}
    >
      {children}
      {icon && (
        <img src={icon} alt="icon" className="ml-2 h-5 w-5 rounded-full" />
      )}
    </button>
  );
};

export default memo(Button);
