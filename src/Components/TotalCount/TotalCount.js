import React, { useContext } from 'react'
import './TotalCount.css'
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { CartContext } from '../../App'

function TotalCount (props) {
  const cartContext = useContext(CartContext)
  return (
    <div className='ch-total-box'>
      <h2 className='ch-total'>Total Discounts: ${props.discount}</h2>
      <h2 className='ch-total'>Total Cart Value: ${props.Total}</h2>
      {
        (cartContext.CartState.length !== 0)
          ? <Button
            onClick={() => { props.history.push('/') }}
            variant='contained'
            color='primary'
            className='ch-Shopping-btn'
          >Continue Shopping
            </Button>
          : ''
      }
    </div>
  )
}

export default withRouter(TotalCount)
