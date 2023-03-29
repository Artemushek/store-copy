import React from 'react'
import Slider from '../components/Slider'

import "./About.scss"

const About = () => {
  return (
    <div className='about'>
      <span className="textable">ABOUT</span>
      <span className="textableSmall">
      "Established in 2020, our fashion brand has quickly grown into a premier destination for both women's and men's clothing.
      With a focus on stylish and sustainable pieces, we pride ourselves on delivering high-quality garments that are both affordable and ethically made.
      Our team of designers and creatives are dedicated to bringing you the latest trends and timeless classics, with a commitment to reducing our environmental impact.
      We believe that everyone deserves to look and feel their best, and we're passionate about helping you achieve that with our carefully curated collections.
      Thank you for choosing us as your go-to source for all your fashion needs!"
        </span>
      <Slider startingImageIndex={2} />         

    </div>
  )
}

export default About;