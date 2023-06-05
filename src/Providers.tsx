import { FC, ReactNode } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import { Provider as ReduxProdiver } from "react-redux";
import { store } from "./stores";

const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <SkeletonTheme baseColor="#FFFFFF20" highlightColor="#FFFFFF10">
      <ReduxProdiver store={store}>{children}</ReduxProdiver>
    </SkeletonTheme>
  );
};

export default Providers;
