// import React, { useState } from "react";
// import {
//   Route,
//   Navigate,
//   Routes,
//   BrowserRouter as Router,
// } from "react-router-dom";

// const PublicRoute = ({ component: Component, restricted, ...rest }) => {
//   const [isLogin, setIsLogin] = useState(
//     localStorage.getItem("LoginAuthToken")
//   );
//   //   console.log("uidheio", isLogin);
//   return (
//     <>
//       <Routes>
//         <Route
//           {...rest}
//           render={(props) =>
//             isLogin && restricted ? (
//               <Navigate to="*" />
//             ) : (
//               <Component {...props} />
//             )
//           }
//         />
//       </Routes>
//     </>
//     // restricted = false meaning public route
//     // restricted = true meaning restricted route
//   );
// };

// export default PublicRoute;
