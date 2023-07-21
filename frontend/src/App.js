import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import Home from './page/Home';
import Menu from './page/Menu';
import About from './page/About';
import Contact from './page/Contact';
import Login from "./page/Login";
import Newproduct from "./page/Newproduct";
import Signup from "./page/Signup";
import Header from './component/Header';
import { useDispatch, useSelector } from "react-redux";
import { setDataProduct } from "./redux/productSlide";
import Cart from "./page/Cart";
import Success from "./page/Success";
import Cancel from "./page/Cancel";

function App() {

  const dispatch = useDispatch()
  const productData = useSelector((state) => state.product)

  useEffect(() => {
    (async () => {
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/product/getProduct`)
      const resData = await res.json()
      dispatch(setDataProduct(resData))
    })()
  }, [])

  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Header />
        <div className="pt-16 bg-slate-100 min-h-[calc(100vh)]">
          <Routes>
            <Route path="/" element={<App />} />
            <Route index element={<Home />} />
            {/* <Route path="menu" element={<Menu />} /> */}
            <Route path="menu/:filterby" element={<Menu />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="newproduct" element={<Newproduct />} />
            <Route path="signup" element={<Signup />} />
            <Route path="cart" element={<Cart />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
