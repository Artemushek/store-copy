import React, { useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'

import "./Products.scss"
import List from "../components/List"
import useFetch from '../hooks/useFetch'

const Products = () => {

  const { id } = useParams()
  const location = useLocation()
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState("asc")
  const [selectedSubCats, setSelectedSubCats] = useState([])
  //const [gender, setGender] = useState(1)

  const { data, loading, error } = useFetch(`/sub-categories?[filters][categories][id][$eq]=${id}`)

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
  
    setSelectedSubCats((prevSelectedSubCats) =>
      isChecked
        ? [...prevSelectedSubCats, value]
        : prevSelectedSubCats.filter((item) => item !== value)
    );
  };
  
  let imageSrc = "";
  if (location.pathname === "/products/1") {
    //https://images.pexels.com/photos/3068690/pexels-photo-3068690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
    imageSrc = "https://images.pexels.com/photos/14571720/pexels-photo-14571720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1600";
  } else if (location.pathname === "/products/2") {
    imageSrc = "https://images.pexels.com/photos/7654037/pexels-photo-7654037.jpeg?auto=compress&cs=tinysrgb&w=1600";
  }

  let centered = "";
  if (location.pathname === "/products/1") {
    centered = "WOMEN CLOTHES";
  } else if (location.pathname === "/products/2") {
    centered = "MENS CLOTHES";
  }
  
  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h3>Product Categories</h3>
          {data?.map((item)=>(
            <div className="inputItem" key={item.id}>
              <input type="checkbox" id={item.id} value={item.id} onChange={handleChange}/>
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
         
        </div>
        <div className="filterItem2">
          <h3>Filter by price</h3>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem3">
          <h3>Sort by</h3>
          <div className="inputItem">
            <input type="radio" id="asc" value="asc" name="price" onChange={(e)=>setSort("asc")}/>
            <label htmlFor="asc">Price (Up)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="desc" value="desc" name="price" onChange={(e)=>setSort("desc")}/>
            <label htmlFor="desc">Price (Down)</label>
          </div>
        </div>
      </div>
      <div className="right">       
        <img
          className="catImg"
          src={imageSrc}
          alt=""
        />
         <span className="centered">{centered}</span>
        <List className="imageProds" catId={id} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
      </div>
    </div>
  )
}

export default Products