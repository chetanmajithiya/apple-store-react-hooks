import React, { useContext } from 'react'
import './ItemCard.css'
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import AddToCart from '../AddToCart/AddToCart'
import { withRouter } from 'react-router-dom'
import { CartContext } from '../../App'
import { Discount } from '../../HelperFunctions/CalculateDiscount'

function ItemCard (props) {
  const cartContext = useContext(CartContext)

  return (
    <div>
      <div className='ch-cart-card'>
        <div className='ch-card-media'>
          <img src={props.image} alt='' />
        </div>
        <div className='ch-card-title'>
          <h2>{props.title}</h2>
        </div>
        <div className='ch-card-price'>
          <h3>${Discount((props.price / 70).toFixed(0), props.discount)}
            <span className='ch-discount-price'>
              <del>${(props.price / 70).toFixed(0)}</del>
              <span>({props.discount}% Discount)</span>
            </span>
          </h3>
        </div>
        <CardActions>
          <Button
            style={{ marginLeft: '8px' }}
            variant='contained'
            color='secondary'
            onClick={() => { cartContext.AddCart({ type: 'add', value: props.id, do: '' }); props.history.push('/my-cart') }}
          >Buy Now
          </Button>
          <AddToCart id={props.id} />
        </CardActions>
      </div>
    </div>
  )
}

export default withRouter(ItemCard)
