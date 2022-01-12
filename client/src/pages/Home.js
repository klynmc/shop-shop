import React, { useState } from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu></CategoryMenu>
      <ProductList></ProductList>
    </div>
  );
};

export default Home;
