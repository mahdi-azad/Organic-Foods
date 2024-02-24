import React from 'react'
import '../styles/navbar.scss'
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoHeartCircleOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar__container'>
            <div className='navbar__AllDep'>
                <button className='navbar__AllDep-button'>All Departments</button>
            </div>
            <div className='navbar__list'>
                <div className='navbar__list-item'>
                    <h3>Home</h3>
                </div>
                <div className='navbar__list-item'>
                    <h3>Shop</h3>
                </div>
                <div className='navbar__list-item'>
                    <h3>Blog</h3>
                </div>
                <div className='navbar__list-item'>
                    <h3>Portfolio</h3>
                </div>
                <div className='navbar__list-item'>
                    <h3>Pages</h3>
                </div>
                <div className='navbar__list-item'>
                    <h3>Contact</h3>
                </div>
            </div>
            <div className='navbar__icons'>
                <div className=''>
                    <h1 className='navbar__icon-item'><IoPersonCircleSharp /></h1>
                </div>
                <div className=''>
                    <h1 className='navbar__icon-item'><IoHeartCircleOutline /></h1>
                </div>
                <div className='navbar__icons-item'>
                    <h1 className='navbar__icon-item'><FaShoppingCart /></h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar