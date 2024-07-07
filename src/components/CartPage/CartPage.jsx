/* eslint-disable react/prop-types */
import '../../styles/CartPage.css';
import Spinner from '../Spinner';
import Checkout from './Checkout';
import CartItemCard from './CartItemCard';

function CartPage({cartItems, setCartItems, loading}) {

  if (cartItems.length == 0) {
    return ( 
      <div className='cart-page'>
        <h1>Check Out</h1>
        <p>You cart appears to be empty! Visit the store to shop for more items!</p>
      </div>
    )
  }

  if (loading) {
    return <Spinner />;
  }

      const increaseItemQuantity = (itemToIncrease) => {
        if (itemToIncrease.quantity < 99) {
          const updatedItems = cartItems.map(item => {
              if (item.id === itemToIncrease.id) {
                  return { ...item, quantity: item.quantity + 1 };
              }
              return item;
          });
          setCartItems(updatedItems);
      }
    }

    const decreaseItemQuantity = (itemToDecrease) => {
        const updatedItems = cartItems.map(item => {
            if (item.id === itemToDecrease.id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCartItems(updatedItems);
    }

    const totalCartPrice = cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
  }, 0);

  return (
    <div className='cart-page-container'>
      <div className='cart-item-container' id='cart-item-container'>
        {cartItems.map((item, index) => (
          <CartItemCard key={index} item={item} 
          itemQuantity={item.quantity} 
          increaseItemQuantity={() => increaseItemQuantity(item)}
          decreaseItemQuantity={() => decreaseItemQuantity(item)}
          />
        ))}
      </div>
      <div className='checkout-container'>
        <Checkout cartItems={cartItems} totalCartPrice={totalCartPrice} />
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
