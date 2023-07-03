import { Outlet } from "react-router-dom";
import { HomeHeader } from "./HomeHeader";
import { HomeFooter } from "./HomeFooter";

export default function HomeLayout() {
  return (
    <>
      <HomeHeader />
      <Outlet />
      <HomeFooter />
    </>
  );
}
