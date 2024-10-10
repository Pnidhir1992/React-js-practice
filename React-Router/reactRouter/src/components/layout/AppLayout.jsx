import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Outlet, useNavigation } from "react-router";

export const AppLayout = () => {
  const navigation = useNavigation;

  // console.log(navigation);

  if (navigation.state === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
