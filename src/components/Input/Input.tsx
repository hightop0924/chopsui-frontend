import React, { type InputHTMLAttributes } from "react";

const background = {
  primary: "bg-white ",
  success: " border-2 border-grey-50 ",
  none: " ",
};

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "primary" | "success" | "none";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", type = "text", variant = "primary", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={
          (variant !== undefined ? background[variant] : "") +
          "rounded-lg outline-none  px-2 " +
          className
        }
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
