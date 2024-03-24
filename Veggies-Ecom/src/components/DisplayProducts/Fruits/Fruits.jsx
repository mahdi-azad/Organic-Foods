import React from 'react'
import products from '../../../staticData/product.js'
import '../../../styles/displayproducts.scss'

const Fruits = () => {
    const fruits = products.filter(product => product.type === 'fruit');
    return (
        <div className='display-stack'>
            {
                fruits.map(fruit => (
                    <div key={fruit.id} className='display_item'>
                        <div>
                            <img src={fruit.image} alt={fruit.name} style={{ width: '150px', height: '120px' }} />
                        </div>
                        <div className='display-text-items'>
                            <p className='display_item-name'>{fruit.name}</p>
                            <p className='display_item-rating'>Rated {fruit.stars}&nbsp;Stars!</p>
                            {/* .toFixed(2) ensures the value shows 5.00 instead of just 5 */}
                            <p className='display_item-prev-price'>${fruit.prevPrice.toFixed(2)}</p>
                            <p className='display_item-price'>${fruit.currentPrice.toFixed(2)}</p>
                            <div className="discount">{fruit.discount}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Fruits