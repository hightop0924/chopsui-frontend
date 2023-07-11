import React, { type ButtonHTMLAttributes } from "react";

const background = {
  primary: "text-white bg-blue-400 shadow-[0px_0px_15px_0px_#000000E0_inset]  ",
  success: "bg-secondary-50 text-white ",
  normal: "bg-white ",
  secondary:
    "bg-gradient-to-b from-secondary-50 to-secondary-100 text-primary-100 ",
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "success" | "normal" | "secondary";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ...props }, ref) => {
    const {
      className = "",
      type = "button",
      children,
      variant,
      ...rest
    } = props;

    return (
      <button
        ref={ref}
        type={type}
        className={
          (variant !== undefined ? background[variant] : "") +
          "hover:opacity-90 active:opacity-75 font-bold  font-rubik rounded-lg py-1 tracking-widest px-5 flex place-items-center " +
          className
        }
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
