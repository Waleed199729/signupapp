import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterForm from "./registration/RegisterForm";
import Login from "./login/Login";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<RegisterForm />} />
          <Route path="/login_page" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
