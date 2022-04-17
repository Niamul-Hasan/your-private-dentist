import Home from "./Pages/HomePage/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header";
import About from "./Pages/About/About";
import Login from "./Pages/LoginPage/Login/Login";
import Register from "./Pages/LoginPage/Register/Register";
import RequireAuth from "./Pages/LoginPage/RequireAuth/RequireAuth";
import Checkout from "./Pages/Checkout/Checkout";
import NotFound from "./Pages/Not Found/NotFound";
import FooterPage from "./Pages/Shared/Footer/FooterPage";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="checkout" element={<RequireAuth>
          <Checkout />
        </RequireAuth>}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <FooterPage></FooterPage>
    </div>
  );
}

export default App;
