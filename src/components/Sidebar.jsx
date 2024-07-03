/* eslint-disable react/prop-types */
import '../styles//Sidebar.css'
import { useState } from 'react';
import itemFunctions from '../itemFunctions';

function Sidebar() {


const {setCategory} = itemFunctions();
const [selectedCategory, setSelectedCategory] = useState('');
const [dropdownOpen, setDropdownOpen] = useState(false);

const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCategory(category);
}

const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  
  return (
    <div className='sidebar'>
      <div className='shopping-page-container'>
        <div className={`filter-category ${dropdownOpen ? 'open' : ''}`}>
          <h3 onClick={toggleDropdown} className='dropdown-title'>
            Filter by Category
          </h3>
          <div className='dropdown-content'>
            <ul>
              <li
                className={selectedCategory === 'electronics' ? 'selected' : ''}
                onClick={() => handleCategoryClick('electronics')}
              >
                Electronics
              </li>
              <li
                className={selectedCategory === 'jewelery' ? 'selected' : ''}
                onClick={() => handleCategoryClick('jewelery')}
              >
                Jewelery
              </li>
              <li
                className={selectedCategory === "men's clothing" ? 'selected' : ''}
                onClick={() => handleCategoryClick("men's clothing")}
              >
                Mens Clothing
              </li>
              <li
                className={selectedCategory === "women's clothing" ? 'selected' : ''}
                onClick={() => handleCategoryClick("women's clothing")}
              >
                Womens Clothing
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;