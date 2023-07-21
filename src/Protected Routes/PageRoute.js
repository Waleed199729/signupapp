// import React from "react";
// import { Navigate } from "react-router-dom";

// const PageRoute = ({ isSignedIn, children }) => {
//   if (!isSignedIn) {
//     return (
//       <>
//         <Navigate to="/" replace />
//       </>
//     );
//   }
//   return children;
// };

// export default PageRoute;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const PageRoute = (props) => {
//   const [currentProductIndex, setCurrentProductIndex] = useState(0);
//   const navigate = useNavigate();
//   const { PageComponent } = props;

//   useEffect(() => {
//     const apiData = () => {
//       const apiProductData = localStorage.getItem("Our apiData");
//       const apiSingleProductData = localStorage.getItem("Single Product");
//       const apiCartData = localStorage.getItem("cart");

//       if (!apiProductData) {
//         navigate("/");
//       } else if (apiProductData) {
//         try {
//           const singleProduct = JSON.parse(apiProductData);
//           if (singleProduct && singleProduct.length > currentProductIndex) {
//             const firstProduct = singleProduct[currentProductIndex];
//             if (firstProduct) {
//               navigate(`/products/${firstProduct.id}`);
//             }
//             console.log("iduseeeeee", `/products/${firstProduct.id}`);
//           }
//         } catch (error) {
//           console.error("Error parsing single product data:", error);
//         }
//       } else if (apiCartData) {
//         try {
//           const productCartData = JSON.parse(apiCartData);
//           if (productCartData) {
//             navigate("/cart");
//           }
//         } catch (error) {
//           console.error("Error parsing cart data:", error);
//         }
//       }
//     };

//     const navigate = (path) => {
//       if (window.location.pathname !== path) {
//         window.location.href = path;
//       }
//     };

//     apiData();
//   }, [currentProductIndex]);
//   //   useEffect(() => {
//   //     let apiData = () => {
//   //       const apiProductData = localStorage.getItem("Our apiData");
//   //       const apiSingleProductData = localStorage.getItem("Single Product");
//   //       const apiCartData = localStorage.getItem("cart");

//   //       if (!apiProductData) {
//   //         navigate("/");
//   //       } else if (apiSingleProductData) {
//   //         const singleProduct = JSON.parse(apiSingleProductData);
//   //         if (singleProduct) {
//   //           navigate(`/products/${singleProduct.id}`);
//   //         }
//   //       } else if (apiCartData) {
//   //         const productCartData = JSON.parse(apiCartData);
//   //         if (productCartData) {
//   //           navigate("/cart");
//   //         }
//   //       }
//   //     };
//   //     apiData();
//   //   }, []);
//   return (
//     <div>
//       <PageComponent />
//     </div>
//   );
// };

// export default PageRoute;
