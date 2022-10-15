import React, { useEffect, useState } from "react";
import Category from "../categories/Category";
import Search from "../searchs/Search";
import Product from "./Product";
import { products as productData } from "../../data/product.js";

const ProductList = () => {
  const allCategories = [
    "all",
    ...new Set(
      productData.map((product) => {
        return product.category;
      }),
    ),
  ];

  const [products, setProducts] = useState(productData);
  const [search, setSearch] = useState("");
  const [filterProducts, setFilterProducts] = useState([]);
  const [categories, setCategories] = useState(allCategories);

  const handleSearch = (e) => {
    return setSearch(e.target.value);
  };

  const filterProduct = (category) => {
    if (category === "all") {
      return setProducts(productData);
    } else {
      const newProducts = productData.filter((product) => {
        return product.category === category;
      });
      return setProducts(newProducts);
    }
  };

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      setFilterProducts(products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase())));
    }

    return () => {
      ignore = true;
    };
  }, [search, products]);

  return (
    <header className="w-5/6">
      <h1 className="py-5 my-5 text-3xl tracking-widest ">
        <span className="text-amber-500">Emoticon</span> Filter
      </h1>
      <div className="">
        <Search inputValue={search} inputChange={handleSearch} />
        <Category categories={categories} filterItems={filterProduct} />
        <ul className="flex flex-wrap gap-4">
          {filterProducts.length === 0 ? (
            <li className="text-2xl text-red-500 flex justify-center w-full items-center mt-56">No Emoticons Found</li>
          ) : (
            filterProducts.map((product) => {
              const { id, title, img, price } = product;
              return <Product key={id} id={id} title={title} img={img} price={price} />;
            })
          )}
        </ul>
      </div>
    </header>
  );
};

export default ProductList;
