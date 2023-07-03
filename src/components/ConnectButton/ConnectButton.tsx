import React, { useState, type ButtonHTMLAttributes } from "react";
import WalletSvg from "@/assets/svgs/wallet.svg";
import WalletYellowSvg from "@/assets/svgs/walletyellow.svg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  walletColor?: "yellow";
}

const ConnectButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ...props }, ref) => {
    const {
      className = "",
      type = "button",
      walletColor,
      children,
      ...rest
    } = props;

    const [connect, setConnect] = useState(false);

    return (
      <button
        ref={ref}
        type={type}
        className={
          "hover:opacity-90 active:opacity-75 font-bold  font-rubik rounded-lg tracking-widest  flex place-items-center gap-4 " +
          className
        }
        {...rest}
      >
        <>
          <img
            src={walletColor === undefined ? WalletSvg : WalletYellowSvg}
            alt="wallet"
          />
          <h1>{connect ? children : "Connect Wallet"}</h1>
        </>
      </button>
    );
  }
);

ConnectButton.displayName = "ConnectButton";

export default ConnectButton;
