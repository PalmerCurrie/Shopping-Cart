/* eslint-disable react/prop-types */
import '../styles/HomePage.css';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className='home-container'>
      <h1>Welcome to cart.</h1>
      <p className='home-description'>An online shopping experience for all your needs!</p>
      <div className='shop-now-button'>
        <Link to="/store">
          <button className='button'>Shop Now</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;