import React, { type ButtonHTMLAttributes } from "react";

const background = {
  primary: "bg-blue-50 ",
  success: "bg-secondary-50 text-white ",
  normal: "bg-white ",
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "success" | "normal";
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
          "hover:opacity-90 active:opacity-75 font-bold rounded-lg py-1 tracking-widest px-5 flex place-items-center " +
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
