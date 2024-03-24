import React, { useState } from 'react'
import '../../styles/displayproducts.scss'
import products from '../../staticData/product.js'
import AllProducts from './AllProducts/AllProducts.jsx';
import Vegetables from './Vegetables/Vegetables.jsx';
import Fruits from './Fruits/Fruits.jsx';
import Breads from './Breads/Breads.jsx';


const DisplayProducts = () => {
  const [category, setCategory] = useState('all');
  const [activeButton, setActiveButton] = useState('all');
  return (
    <div className='displayProducts_container'>
      <div className='displayProducts_header'>
          <div style = {{justifySelf: 'start'}}>
            <h2 style = {{fontSize: '1.8rem'}}>Our Products</h2>
          </div>
          <div className='displayProducts_header-buttons' style ={{justifySelf: 'end'}}>
            <div className = {activeButton === 'all'? 'active': 'inactive'}>
              <a
                  href=''
                  onClick={(e) => {
                    e.preventDefault();
                    setCategory('all');
                    setActiveButton('all');
                  }}
                  >
                  All
              </a>
            </div>
            <div className = {activeButton === 'Vegetables'? 'active': 'inactive'}>
              <a
                href=''
                onClick={(e) => {
                  e.preventDefault();
                  setCategory('Vegetables');
                  setActiveButton('Vegetables');
                }}>
                Vegetables
              </a>
            </div>
            <div className = {activeButton === 'Fruits'? 'active': 'inactive'}>
              <a
                href=''
                onClick={(e) => {
                  e.preventDefault();
                  setCategory('Fruits');
                  setActiveButton('Fruits');
                }}>
                Fruits
              </a>
            </div>
            <div className = {activeButton === 'Breads'? 'active': 'inactive'}>
              <a
                href=''
                onClick={(e) => {
                  e.preventDefault();
                  setCategory('Breads');
                  setActiveButton('Breads');
                }}>
                Breads
              </a>
            </div>
          </div>
      </div>
      <br></br>
      <hr></hr>
      <div className='displayProducts'>
        
          {
              category === 'all' && <AllProducts></AllProducts>
          }
          {
              category === 'Vegetables' && <Vegetables></Vegetables>
          }
          {
              category === 'Fruits' && <Fruits></Fruits>
          }
          {
              category === 'Breads' && <Breads></Breads>
          }
        
      </div>
    </div>
  )
}

export default DisplayProducts