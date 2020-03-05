import React, { useContext } from 'react'
import './Navigation.css'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { CartContext } from '../../App'

const StyledBadge1 = withStyles(theme => ({
  badge: {
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px'
  }
}))(Badge)

function ItemCard () {
  const cartContext = useContext(CartContext)
  return (
    <div>
      <nav>
        <Link to='/' className='ch-app-logo'><img src='/static/img/apple.svg' alt='' /><span>Apple Store</span></Link>
        <Link to='/my-cart' className='ch-nav-cart-link'>
          <IconButton aria-label='cart'>
            <StyledBadge1
              badgeContent={(cartContext.CartState).length}
              color='primary'
            >
              <ShoppingCartIcon style={{ color: 'white' }} />
            </StyledBadge1>
          </IconButton>
        </Link>
      </nav>
    </div>
  )
}

export default ItemCard
