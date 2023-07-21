// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const SingleProductRoute = (props) => {
//   const navigate = useNavigate();
//   const { SingleRoute } = props;

//     useEffect(() => {
//       let login = () => {
//         const loggedIn = localStorage.getItem("LoginAuthToken");
//         const sigleProduct = localStorage.getItem("Single Product");
//         debugger;

//         if (!loggedIn) {
//           navigate("/login");
//         } else if (loggedIn) {
//           navigate("/");
//         }
//       };
//       login();
//     }, []);

//   return (
//     <div>
//       <SingleRoute />
//     </div>
//   );
// };

// export default SingleProductRoute;
