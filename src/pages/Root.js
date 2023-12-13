import React from "react";
import MainNav from "../components/MainNav";
import {Outlet} from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <MainNav />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
