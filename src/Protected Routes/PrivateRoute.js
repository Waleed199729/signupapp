// import React, { useState } from "react";
// import {
//   Route,
//   Navigate,
//   Routes,
//   BrowserRouter as Router,
// } from "react-router-dom";

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const [isLogin, setIsLogin] = useState(
//     localStorage.getItem("LoginAuthToken")
//   );

//   // Show the component only when the user is logged in
//   // Otherwise redirect the user to /signin page
//   return (
//     <>
//       <Routes>
//         <Route
//           {...rest}
//           render={(props) =>
//             isLogin ? <Component {...props} /> : <Navigate to="/register" />
//           }
//         />
//       </Routes>
//     </>
//   );
// };

// export default PrivateRoute;
