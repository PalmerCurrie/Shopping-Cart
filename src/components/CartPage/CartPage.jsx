/* eslint-disable react/prop-types */
import '../../styles/CartPage.css';
import Spinner from '../Spinner';
import Checkout from './Checkout';
import CartItemCard from './CartItemCard';

function CartPage({cartItems, loading}) {

  if (loading) {
    return <Spinner />; // Show spinner if items are still loading
  }


  return (
    <div className='cart-page-container'>
      <div className='cart-item-container' id='cart-item-container'>
        {cartItems.map((item, index) => (
          <CartItemCard key={index} item={item}/>
        ))}
      </div>
      <div className='checkout-container'>
        <Checkout cartItems={cartItems}/>
      </div>
    </div>
  );
}





{/* <h1>Check Out</h1>
      <p>Thank you for shopping with cart.</p>
      <p>Please review your items and proceed to checkout to complete your shopping experience!</p> */}


//   return (
//     <div className='shopping-page-container'>
//       <div className='item-header'>
//         <p>Items ({items.length})</p>
//       </div>
//       <div className='item-container' id='item-container'>
//         {items.map((item, index) => (
//           <ItemCard key={index} item={item} addItemToCart={addItemToCart} />
//         ))}
//       </div>
//     </div>
//   );
// }

export default CartPage;
