import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from "./components";
import { Home, Products, Product, Contacts, About } from "./pages";
import "@fontsource/raleway"; // Defaults to weight 400.

import "./app.scss"

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about" element={<About />} />
          </Routes>      
        </div>
        <ToastContainer
              position="top-center"
              autoClose={1500}
              hideProgressBar={false}
              closeOnClick
              pauseOnHover
              draggable
              progress={undefined} 
              progressStyle={{ backgroundColor: 'lightblue' }}
              icon={true}
        />
      </Layout>      
    </BrowserRouter>    
  );
}

export default App;

