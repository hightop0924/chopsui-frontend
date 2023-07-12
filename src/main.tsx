import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Providers from "./Providers";
import {
  WalletProvider,
  SuietWallet,
  SuiWallet,
  EthosWallet,
  MartianWallet,
  IDefaultWallet,
} from '@suiet/wallet-kit';
import '@suiet/wallet-kit/style.css';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WalletProvider defaultWallets={[
      // order defined by you
      SuietWallet,
      SuiWallet,
      MartianWallet,
      EthosWallet]}>
    <Providers>
      <App />
    </Providers>
    </WalletProvider>
  </React.StrictMode>
);
