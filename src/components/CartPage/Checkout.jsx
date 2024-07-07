/* eslint-disable react/prop-types */
import '../../styles/Checkout.css';

function Checkout({cartItems}) {

  return (
    <div className='checkout-container'>
        {cartItems.length}
        <button className='checkout-button'>Checkout</button>
    
    </div>
  );
}


export default Checkout;
