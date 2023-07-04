import { createStore, combineReducers, applyMiddleware } from "redux";
import { pinVerifyReducer, signUpReducer } from "./redux/userReducer";
import thunkMiddleWare from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// store main reducers sy pass hony wala data save krna
const rootReducer = combineReducers({
  signUpUsers: signUpReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleWare))
);

export default store;
