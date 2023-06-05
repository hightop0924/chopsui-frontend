import React, { type SelectHTMLAttributes } from "react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = "", options = [], ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={"rounded-lg border-2 border-grey-50 px-2 " + className}
        {...props}
      >
        {options.map((value, index) => (
          <option
            className="rounded-lg border-2 border-[red] px-2 h-3 "
            key={index}
          >
            <div className="bg-[#941616] h-5">{value}</div>
          </option>
        ))}
      </select>
    );
  }
);

Select.displayName = "Select";

export default Select;
