import React from "react";
import Card from "./Card";
import "./FeaturedProducts.scss";
import useFetch from "../hooks/useFetch";

const FeaturedProducts = ({ type }) => {

  const { data, loading, error } = useFetch(
  `/products?populate=*&[filters][type][$eq]=${type}`
  );
  
  return (
    <div className="featuredProducts">
      <div className="top">
        <h2>{type} products</h2>
        <p>
        Introducing our latest collection of stylish and trendy outfits, carefully curated to keep you fashion-forward.
        From vibrant prints to elegant designs, our featured products offer a perfect blend of comfort and style for any occasion.
        Get ready to elevate your wardrobe with our top picks for the season, handpicked by our fashion experts to ensure you stand out in every crowd.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;