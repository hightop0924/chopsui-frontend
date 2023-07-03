import { Input } from "@/components/Input";
import { useState } from "react";
import Token from "./Token";

export default function TokenSelect({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  const [price, setPrice] = useState("0.00");
  const [amount, setAmount] = useState("0.00");
  return (
    <div
      className={
        "bg-blue-700 p-3 rounded-xl grid gap-2 font-rubik " + className
      }
    >
      <h1 className="text-white">{title}</h1>
      <div className="bg-blue-800 rounded-xl px-5 py-1 flex place-content-evenly md:place-content-between">
        <Token
          className="z-10"
          onClick={() => {
            console.log("select toekn");
          }}
        />
        <div className="grid place-content-end place-items-end">
          <Input
            placeholder="0.00"
            variant="none"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="bg-blue-800 w-20 md:w-32 text-right focus:cursor-context-menu text-xl text-white focus:ring-0 border-none"
          />
          <h1 className="text-secondary-200 text-base px-2">$0.00</h1>
        </div>
      </div>
    </div>
  );
}
