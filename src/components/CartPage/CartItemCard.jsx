/* eslint-disable react/prop-types */
import '../../styles//CartItemCard.css'

function CartItemCard({item, itemQuantity, increaseItemQuantity, decreaseItemQuantity}) {

    // TODO:
                    // - Finish Quantity and Buttons
            // - Price based on quantity
    // - Remove from Cart button
    // Then Checkout Component

    const handleIncreaseItem = () => {
        increaseItemQuantity(item);
    }
    const handleDecreaseItem = () => {
        decreaseItemQuantity(item);
    }

    return (
        <div className='cart-item-card'>
          <div className='cart-item-image'>
            {item.image ? (
              <img src={item.image} alt={`${item.title} - image`} />
            ) : (
              <div className='cart-placeholder-image'>No Image</div>
            )}
          </div>
          <div className='cart-item-details-container'>
                <div className='cart-item-details'>
                    <h2>{item.title}</h2>
                    <p className='item-category'>{item.category}</p>
                    <p className='item-stock'>
                    <span className='in-stock'>In Stock</span>
                    </p>
                    <p className='item-quantity'>Qty: {itemQuantity}</p>
                </div>
                <div className='item-quantity-controls'>
                    <button onClick={handleDecreaseItem}>-</button>
                    <span>{itemQuantity}</span>
                    <button onClick={handleIncreaseItem}>+</button>
                </div>
                <div className='item-price-container'>
                    <button className='remove-item'>🗑️</button>
                    <p className='item-price'>${(item.price * itemQuantity).toFixed(2)}</p>
                </div>
          </div>
        </div>
      );

}



export default CartItemCard;