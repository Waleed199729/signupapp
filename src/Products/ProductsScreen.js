import React, { useState, useEffect } from "react";
import "./Products.css";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
// import ClotheAnimate from "../Animations/ClotheAnimate.json";
// import ClotheLogo from "../Animations/ClotheLogo.json";
// import Lottie from "lottie-react";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json(); //getting the data in the json format
      if (componentMounted) {
        setData(products); //update the data by fetching it from url
        setFilter(products); //filter the state from fetched products
        setLoading(false);
        // console.log("filter items",filter);
        localStorage.setItem("Our apiData", JSON.stringify(products));
      }

      return () => {
        componentMounted = false;
      };
    };
    getProducts(); // simple function call
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">Loading.............</div>
      </>
    );
  };

  const filterProduct = (cat) => {
    //filter the products as per category like men, women etc
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };
  //Showing the buttons below the Lastest Products heading
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            {" "}
            All{" "}
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            {" "}
            Men's Clothing{" "}
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            {" "}
            Women's Clothing{" "}
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("jewelery")}
          >
            {" "}
            Jewelery{" "}
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("electronics")}
          >
            {" "}
            Electronics{" "}
          </button>
        </div>
        {filter.map((product) => {
          //card format
          return (
            <>
              <Link to={`/products/${product.id}`} className="col-md-3 mb-4">
                <div
                  className="zoom card h-100 text-center p-4"
                  key={product.id}
                >
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height="250px"
                  />
                  <div class="card-body">
                    <h5 className="card-title mb-0">
                      {" "}
                      {product.title.substring(0, 12)}
                    </h5>
                    <p className="card-text lead fw-bold"> ${product.price} </p>
                    <NavLink
                      to={`/products/${product.id}`}
                      className="btn btn-outline-dark"
                    >
                      {" "}
                      Buy Now{" "}
                    </NavLink>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </>
    );
  };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div className="container my-5 py-5">
        {/* <Lottie
          style={{ height: 300, float: "right", marginLeft: "-50rem" }}
          loop={true}
          autoPlay
          animationData={ClotheAnimate}
        /> */}

        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">
              Lastest Products
            </h1>
            <hr />
          </div>
        </div>

        <div className="row justify-content-center ">
          {/* <Lottie
            style={{ height: 300, marginTop: "-3rem" }}
            loop={true}
            autoPlay
            animationData={ClotheLogo}
          /> */}
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </motion.div>
  );
};

export default Products;
