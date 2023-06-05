import React, { type HTMLAttributes } from "react";

interface CheckBoxProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  label?: string;
}

const CheckBox = React.forwardRef<HTMLDivElement, CheckBoxProps>(
  ({ label = "", className = "", ...props }, ref) => {
    const id = label.split(" ")[0];
    return (
      <label htmlFor={id} className="">
        <input
          type="checkbox"
          id={id}
          className={"hover:cursor-pointer mx-2 " + className}
          {...props}
        />
        {label}
      </label>
    );
  }
);

CheckBox.displayName = "CheckBox";

export default CheckBox;
