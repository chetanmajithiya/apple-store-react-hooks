import React, { useContext, useEffect } from 'react'
import './Cart.css'
import { CartContext } from '../../App'
import { withRouter } from 'react-router-dom'
import TotalCartValue from '../../Components/TotalCount/TotalCount'
import CartCard from '../../Components/CartItem/CartItem'
import { Discount, DiscountOnly } from '../../HelperFunctions/CalculateDiscount'
import Iphones from '../../DummyJson/iphones'
import Button from '@material-ui/core/Button'

function Cart (props) {
  const cartContext = useContext(CartContext)
  const CartItems = []
  let Total = 0
  let discounts = 0
  for (let i = 0; i < cartContext.CartState.length; i++) {
    for (let j = 0; j < Iphones.items.length; j++) {
      if (cartContext.CartState[i].itemId === (Iphones.items[j]).id) {
        CartItems.push({ ...Iphones.items[j], Quantity: cartContext.CartState[i].Quantity })
        Total = Total + (Discount(((Iphones.items[j].price / 70).toFixed(0)), Iphones.items[j].discount) * cartContext.CartState[i].Quantity)
        discounts = (discounts + DiscountOnly(((Iphones.items[j].price / 70).toFixed(0)), Iphones.items[j].discount) * cartContext.CartState[i].Quantity)
      }
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  CartItems.sort((a, b) => {
    return -(a.id - b.id)
  })
  return (
    <div className='clear-fix ch-min-height'>
      {
        CartItems.map((data, index) => (
          <CartCard
            key={index}
            data={data}
          />
        ))
      }
      {
        ((CartItems.length === 0)
          ? <div className='ch-empty-cart'>
            <h2>Your Shopping Cart is empty.</h2>
            <Button
              onClick={() => { props.history.push('/') }}
              variant='contained'
              color='primary'
            >Continue Shopping
            </Button>
          </div> : '')
      }
      <TotalCartValue
        Total={Total}
        discount={discounts}
      />
    </div>
  )
}

export default withRouter(Cart)
