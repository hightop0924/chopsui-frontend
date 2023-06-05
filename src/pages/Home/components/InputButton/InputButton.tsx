import { Button } from "@/components/Button";
import React, { type InputHTMLAttributes } from "react";

export interface InputButtonProps
  extends InputHTMLAttributes<HTMLInputElement> {
  buttonText: string;
  handle?: () => void;
}

const InputButton = React.forwardRef<HTMLDivElement, InputButtonProps>(
  (
    { className = "", type = "text", handle, buttonText = "", ...props },
    ref
  ) => {
    return (
      <div
        className={
          "relative  rounded-full outline outline-offset-2 outline-grey-50 outline-2 " +
          className
        }
      >
        <input
          type={type}
          className="rounded-full px-1 focus:ring-blue-500 hover:outline-white border-white block w-full pl-6 p-2.5 pr-48 "
          {...props}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pl-3 ">
          <input
            type="button"
            value={buttonText}
            onClick={handle}
            className="bg-secondary-50 focus:opacity-90 active:opacity-75 py-3 rounded-full text-white  px-7 "
          />
        </div>
      </div>
    );
  }
);

InputButton.displayName = "InputButton";

export default InputButton;
