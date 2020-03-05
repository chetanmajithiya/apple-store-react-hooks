import React, { useReducer } from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from './Components/Navigation/Navigation'
import HomePage from './Pages/Products/Products'
import MyCartPage from './Pages/Cart/Cart'
import Footer from './Components/Footer/Footer'
import { CartReducer } from './Reducer/CartReducer'

export const CartContext = React.createContext()
const initialState = []

function App () {
  const [Cart, setCart] = useReducer(CartReducer, initialState)
  return (
    <CartContext.Provider value={{ CartState: Cart, AddCart: setCart }}>
      <div className='clear-fix'>
        <Router>
          <Navigation />
          <div className='ch-container' />
          <div className='clear-fix'>
            <Route path='/' exact component={HomePage} />
            <Route path='/my-cart/' component={MyCartPage} />
          </div>
          <Footer />
        </Router>
      </div>
    </CartContext.Provider>
  )
}

export default App
