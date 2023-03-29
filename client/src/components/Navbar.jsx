import React, { useState, useRef, useEffect } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss"
import Cart from "./Cart";
import { useSelector } from "react-redux";

import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { items } from '../items';

const Navbar = () => {
  const [open,setOpen] = useState(false)
  const [zIndex, setZIndex] = useState(1)
  const products = useSelector((state) => state.cart.products)
  const cartRef = useRef(null);

  const [toggleMenu, setToggleMenu] = React.useState(false);

  useEffect(() => {
     document.addEventListener("mousedown", handleClickOutsideCart);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideCart);
    };
  }, []);

  const handleClickOutsideCart = (event) => {
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
           
          <div className="left">
          <Link className ="link1" to="/">AMSTORE</Link>
          </div>
        </div>
        
        <div className="center">
          <div className="item">
            <Link className ="link" to="/products/1">WOMEN</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/2">MEN</Link>
          </div>
         
          <div className="item">
            <Link className ="link" to="/">SALES</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/about">ABOUT</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/contacts">CONTACT</Link>
          </div>
        </div>
         
        <div className="right">
          <div className="icons">
           
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
              <span>{products.length}</span>              
            </div>
          </div>
        </div>
      </div>
      {open && <div ref={cartRef}><Cart/></div>}

      {/* mobile navigation menu */}

      <div className="navbarmobile">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} onClick={() => {setToggleMenu(true) && setZIndex(1000)}} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} onClick={() => {setToggleMenu(false) && setZIndex(10)}} />
        )}
        {toggleMenu && ( 
          <ul>
                      
              {items.map((item) => (
                    <a href={item.link}>&nbsp;{item.name}</a>
              ))}                
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
