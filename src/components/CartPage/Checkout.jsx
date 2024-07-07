/* eslint-disable react/prop-types */
import '../../styles/Checkout.css';

function Checkout({cartItems, totalCartPrice}) {

  return (
    <div className='checkout-container'>
        {cartItems.length}
        <button className='checkout-button'>Checkout</button>
        <h1>${totalCartPrice.toFixed(2)}</h1>
    
    </div>
  );
}


export default Checkout;
