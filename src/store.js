import { createStore, combineReducers, applyMiddleware } from "redux";
import { signUpReducer } from "./redux/userReducer";

import thunkMiddleWare from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import handleCart from "./redux/productReducer";
// store main reducers sy pass hony wala data save krna
const rootReducer = combineReducers({
  signUpUser: signUpReducer,
  handleCart,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleWare))
);

export default store;
