import React, { useState } from 'react';
import './Cart.scss';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, resetCart, clearCart } from '../redux/cartReducer';
import { useNavigate } from 'react-router-dom';
import { makeRequest } from '../makeRequest';
import { loadStripe } from '@stripe/stripe-js';

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  const [loading, setLoading] = useState(false);
  const stripePromise = loadStripe(
    'pk_test_51MWJhKLMpstGfhVwjph5SbfHkjoRB9Ztk9nsUz0NM6Ovwsa2F4wToqAKj0Fzqi80qQUmVutCb6nMHh15Awj0AleO00SCfNl2Ci'
  );

  const handlePayment = async () => {
    setLoading(true);
    try {
      dispatch(clearCart()); // clear the cart before making the API request
      const stripe = await stripePromise;
      const res = await makeRequest.post('/orders', {
        products,
      });
  
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
  
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };  

  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className='item' key={item.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt='' />
          <div className='details'>
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className='price'>
              {item.quantity} * ${item.price}
            </div>
          </div>
          <DeleteOutlinedIcon className='delete' onClick={() => dispatch(removeItem(item.id))} />
        </div>
      ))}

      <div className='total'>
        <span>{loading ? 'REDIRECTING...' : 'SUBTOTAL'}</span>
        <span>{totalPrice()}</span>
      </div>
      <button onClick={handlePayment}>{loading ? 'LOADING...' : 'PROCEED TO CHECKOUT'}</button>
      <span className='reset' onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;

