import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./footer.jsx";
import MyForm from "./Myform.jsx";
import Main from "./Main.jsx";
import Payment from "./payment.jsx";
import Product from "./Product.jsx";
import Body from "./Body.jsx";

function App()
{
   
  return(
    
    <BrowserRouter>
    <Routes>
      <Route path={'/login'} element={<MyForm />} />
      <Route path={'/Order'} element={<Main />} />
      <Route path={'/payment'} element={<Payment />} />
      <Route path={'/product'} element={<Product />} />
      <Route path={'/'} element={<Header />} />
      <Route path={'/'} element={<Footer />} />
      <Route path={'/'} element={<Body />} />
      <Route path={'/'} element={<Body />} />

    </Routes>
    </BrowserRouter>
  )
  
}

export default App;