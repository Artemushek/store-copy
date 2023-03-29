import React from 'react'
import Categories from '../components/Categories'
import Contact from '../components/Contact'
import FeaturedProducts from '../components/FeaturedProducts'
import Slider from '../components/Slider'

import "./Home.scss"

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type="featured"/>
      <Categories/>
      <FeaturedProducts type="trending"/>
      <Contact/>
    </div>
  )
}

export default Home