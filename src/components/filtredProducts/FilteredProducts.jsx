import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const FilteredProducts = () => {
  const products = useSelector((state) => state.products.filteredProducts);
  console.log(products, "products from FilteredProducts");
  const { type } = useParams();
  console.log(type, "params type");

  return (
    <div>
      <div className="pt-16">
        <div className="pt-14">
          <h1 className="text-gray-600 text-4xl font-inter font-bold tracking-normal leading-none">
            {type}
          </h1>
        </div>
        <div className="grid grid-cols-4 justify-items-center py-8 gap-12 ">
          {products
            .filter((product) => product.type === type)
            .map((item, index) => {
              return (
                <div key={index}>
                  <ProductCard
                    id={item.id}
                    name={item.name}
                    text={item.text}
                    img={item.img}
                    color={item.color}
                    price={item.price}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default FilteredProducts;
