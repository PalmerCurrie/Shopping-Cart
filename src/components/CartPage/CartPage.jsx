/* eslint-disable react/prop-types */
import '../../styles/CartPage.css';
import Spinner from '../Spinner';
import Checkout from './Checkout'; 
import CartItemCard from './CartItemCard';
import { Link } from 'react-router-dom';

function CartPage({cartItems, setCartItems, loading}) {

  if (cartItems.length == 0) {
    return ( 
      <div className='cart-page'>
        <h1>Check Out</h1>
        <p>You cart appears to be empty! Visit the store to shop for more items!</p>
        <div className='shop-now-button'>
        <Link to="/store">
          <button className='button'> Shop Now</button>
        </Link>
      </div>
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

    const removeItemFromCart = (itemToDelete) => {
      const updatedItems = cartItems.filter(item => item.id !== itemToDelete.id);
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
          removeItemFromCart={() => removeItemFromCart(item)}
          />
        ))}
      </div>
      <div className='checkout-container'>
        <Checkout cartItems={cartItems} totalCartPrice={totalCartPrice} />
      </div>
    </div>
  );
}

export default CartPage;
