import React from 'react'
import logo from '../assets/logo.svg';
import shop from '../assets/shop.svg'
import magnify from '../assets/magnify.svg'


const Header = () => {
    return (
        <header>
            <div>
                <img src={logo} alt='Logo' />
                <h1 className='title'>Kov-Ihor Shop</h1>
            </div>
            <nav>
                <ul className='container nav gap'>
                    <li className='nav-item active'>Home</li>
                    <li className='nav-item'>Shop</li>
                    <li className='nav-item'>Contacts</li>
                </ul>
            </nav>
            <div className='container gap'>
                <img src={shop} alt='shop' className='icon' />
                <img src={magnify} alt='Logmagnifyo' className='icon' />
                <button className='btn'>Log in</button>
            </div>
        </header>
    )
}

export default Header;