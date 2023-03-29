import React from 'react'
import Slider from '../components/Slider'

import "./Contacts.scss"

const Contacts = () => {
  return (
    <div className='contacts'>
      <span className="textable">CONTACTS</span>
      <span className="textableSmall">
        You can reach us via email at contact@example.com <br /> or by phone at +1 (555) 123-4567.<br />
        We're also available on Viber and Telegram at <br /> +1 (555) 987-6543.<br />
        Our office is located at <br /> 123 Main Street, Suite 456 in Anytown, USA.
        </span>
      <Slider startingImageIndex={1} />         

    </div>
  )
}

export default Contacts;
