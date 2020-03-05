import React, { useContext } from 'react'
import './CartItem.css'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import RemoveFromCartUser from '../RemoveFromCart/RemoveFromCart'
import { Discount } from '../../HelperFunctions/CalculateDiscount'
import { CartContext } from '../../App'

function CartItem (props) {
  const cartContext = useContext(CartContext)

  return (
    <div>
      <br />
      <div className='ch-cart-item-card clear-fix'>
        <div className='clear-fix'>
          <img
            src={props.data.image}
            alt=''
            className='ch-item-img'
          />
          <h3>{props.data.title}</h3>
          <RemoveFromCartUser id={props.data.id} />
          <h3 className='ch-price'>${Discount((props.data.price / 70).toFixed(0), props.data.discount)}
            <span className='ch-discount-price'><del>${(props.data.price / 70).toFixed(0)}</del>({props.data.discount}% Discount)</span>
          </h3>
        </div>
        <div className='clear-fix ch-Cart-Action'>
          <div className='ch-Cart-Action-Container'>
            <h4>Quantity: </h4>
            <IconButton
              aria-label='delete'
              disabled={(props.data.Quantity === 1)} onClick={() => { cartContext.AddCart({ type: 'add', value: props.data.id, do: 'minus' }) }}
              size='small'
              color='primary'
            >
              <RemoveIcon />
            </IconButton>
            <h4>{props.data.Quantity}</h4>
            <IconButton
              aria-label='delete'
              onClick={() => { cartContext.AddCart({ type: 'add', value: props.data.id, do: '' }) }}
              size='small'
              color='secondary'
            >
              <AddIcon />
            </IconButton>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CartItem
