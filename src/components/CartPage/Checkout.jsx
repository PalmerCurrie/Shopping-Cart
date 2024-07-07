/* eslint-disable react/prop-types */
import '../../styles/Checkout.css';

function Checkout({cartItems, totalCartPrice}) {

  const handleCheckout = () => {
    alert("Congratulations! 😁 If this were a real store you just made a successful purchase!");

  }

  return (
    <div className='checkout-container'>
      <h1>Order Summary</h1>
      <div className='summary-details'>
        <div className='summary-item'>
          <p>Subtotal ({cartItems.length} items)</p>
          <p>${totalCartPrice.toFixed(2)}</p>
        </div>
        <div className='summary-item'>
          <p>Tax (18%)</p>
          <p>${(totalCartPrice * 0.18).toFixed(2)}</p>
        </div>
      </div>
      <div className='total-price-container'>
        <p>Total</p>
        <p>${(totalCartPrice * 1.18).toFixed(2)}</p>
      </div>
      <button className='checkout-button' onClick={handleCheckout}>Checkout</button>
    </div>
  );
}


export default Checkout;
