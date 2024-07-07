/* eslint-disable react/prop-types */
import '../../styles//CartItemCard.css'

function CartItemCard({item}) {


    // TODO:
    // - Finish Quantity and Buttons
    // - Price based on quantity
    // - Remove from Cart button
    // Then Checkout Component


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
                    <p className='item-quantity'>Qty: {item.quantity}</p>
                </div>
                <div className='item-quantity-controls'>
                    <button>-</button>
                    <span>{item.quantity}</span>
                    <button>+</button>
                </div>
                <div className='item-price-container'>
                    <button className='remove-item'>🗑️</button>
                    <p className='item-price'>${item.price}</p>
                </div>
          </div>
        </div>
      );

}



export default CartItemCard;