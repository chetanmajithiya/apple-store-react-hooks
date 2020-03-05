import React from 'react'
import ProductCard from '../../Components/ItemCard/ItemCard'
import Iphones from '../../DummyJson/iphones'

function Products () {
  return (
    <div>
      {
        Iphones.items.map(data => (
          <ProductCard
            key={data.id}
            id={data.id}
            image={data.image}
            title={data.title}
            price={data.price}
            itemId={data.id}
            discount={data.discount}
          />
        ))
      }
    </div>
  )
}

export default Products
