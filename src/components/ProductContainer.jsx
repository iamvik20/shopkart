import { useEffect, useState } from 'react'
import Card from './Card'
import './ProductContainer.css'


function ProductContainer({products}) {
    return (
        <div className='product-container'>
            {
                products.map((product) => {
                    return <Card
                        key={product.id}
                        title={product.title.slice(0, 37)}
                        image={product.image}
                        description={product.description.slice(0 , 35)}
                        price={product.price}
                    />
                })
            }
        </div>
    )
}

export default ProductContainer