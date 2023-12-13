import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigation = useNavigate();

  const navigationHandler = () => {
    navigation("/products");
  };
  return (
    <>
      <h1>Home</h1>
      <Link to="/products">Products</Link>
      <div>
        <button onClick={navigationHandler}>Products</button>
      </div>
    </>
  );
};

export default Home;
