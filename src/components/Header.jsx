/* eslint-disable react/prop-types */
import '../styles/Header.css'
import { Link } from 'react-router-dom'

function Header({cartItems}) {

  return (
    <>
      <header className="header">
        <Link to="/" className="logo-link">
            <div className="logo">
                <span className="logo-text">cart.</span>
            </div>
        </Link>
            <nav className="nav-links">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/store">Store</Link>
                    </li>
                    {/* Add more links as needed */}
                </ul>
            </nav>
            <div className="search-bar">
                {/* Placeholder for search bar */}
                <input type="text" placeholder="Search" />
                <button type="button">Search</button>
            </div>
            <Link to="/cart" className="shopping-link">
                <div className="shopping-bag">
                    {/* Placeholder for shopping bag/cart icon */}
                    <img src="/shopping-bag.svg" alt="Shopping Bag" />
                   <div> {cartItems.length} </div>  {/* PLACEHOLDER FOR CART ITEMS LENGTH THING */}
                </div>
            </Link>
        </header>

    </>
  )
}

export default Header