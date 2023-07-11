import { Button } from "@/components/Button";
import { HTMLAttributes, useState } from "react";
import dropdownSvg from "@/assets/svgs/dropdown.svg";
import React from "react";

export interface DivProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

const QuestionTab = React.forwardRef<HTMLElement, DivProps>(
  ({ ...props }, ref) => {
    const { className = "", children, title, ...rest } = props;

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };

    return (
      <div
        className={
          "  bg-primary-600 w-full md:w-[712px] rounded-xl grid grid-cols-1 gap-10 border-l-8 border-secondary-50 px-5  md:px-10 text-xl py-7 text-blue-10 text-left " +
          className
        }
      >
        <Button
          onClick={handleOpen}
          className="flex justify-between text-xl md:text-2xl !px-0  text-secondary-150 w-full "
        >
          {title}{" "}
          <img
            className={open ? "" : "rotate-180"}
            src={dropdownSvg}
            alt="dropdown"
          />
        </Button>
        {open ? children : null}
      </div>
    );
  }
);

Button.displayName = "QuestionTab";

export default QuestionTab;
