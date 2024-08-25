import React from 'react'
import Nav from './utils/Nav'
import { ReactComponent as Logo } from '../assets/logo.svg'
import { ReactComponent as Cart } from '../assets/cart.svg'
import { ReactComponent as Magnify } from '../assets/magnify.svg'

const Header = ({ toggleCart, cartItems }) => {
  const computeItemsAmount = () => {
    return cartItems.reduce((currentAmount, item) => currentAmount + item.amount, 0)
  }

  return (
    <header>
      <div className='container'>
        <img className='icon' src={Logo} alt='Logo>'/>
        <h1 className='title'>SneakShop</h1>
      </div>
      <Nav />
      <div className='container gap'>
        <div className='cart-icon' onClick={toggleCart}>
          <img src={Cart} alt='Cart>' className='icon'/>

          <div className='cart-amount'>{computeItemsAmount()}</div>
        </div>
        <img className='icon' src={Magnify} alt='Magnify>'/>

        <button className='btn'>Log in</button>
      </div>
    </header>
  )
}

export default Header