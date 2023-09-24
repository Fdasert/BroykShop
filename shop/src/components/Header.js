import React, { useState } from 'react'
import { FaShoppingBasket } from "react-icons/fa";
import Orderjs from './Order';

const showOrders = (props) => {
  return (<div>
    {props.orders.map(el => (
        <Orderjs key={el.id} item={el}/>
  ))}
  </div>)
}


const showNothing = () => {
  return(<div className='empty'>
    <h2>Корзина пуста</h2>
  </div>)
}


export default function Header(props) {
  let [cartOpen, SetCartOpen] = useState(false);

  return (
    <header>
        <div>
            <span className='logo'>BroykShop</span>
            <ul className='nav'>
                <il>Доставка</il>
                <il>О нас</il>
                <il>Контакты</il>
            </ul>
            <FaShoppingBasket onClick={() => SetCartOpen(cartOpen = !cartOpen)} className={`shop-button ${cartOpen && 'active'}`}/>


            {cartOpen && (
              <div className='shop-cart'>
                {props.orders.length > 0 ? 
                  showOrders(props) : showNothing()}
              </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
