import React from 'react'
import products from '../../../staticData/product.js'
import '../../../styles/displayproducts.scss'

const Breads = () => {
    const breads = products.filter(product => product.type === 'bread');
    return (
        <div className='display-stack'>
            {
                breads.map(bread => (
                    <div key={bread.id} className='display_item'>
                        <div>
                            <img src={bread.image} alt={bread.name} style={{ width: '150px', height: '120px' }} />
                        </div>
                        <div className='display-text-items'>
                            <p className='display_item-name'>{bread.name}</p>
                            <p className='display_item-rating'>Rated {bread.stars}&nbsp;Stars!</p>
                            {/* .toFixed(2) ensures the value shows 5.00 instead of just 5 */}
                            <p className='display_item-prev-price'>${bread.prevPrice.toFixed(2)}</p>
                            <p className='display_item-price'>${bread.currentPrice.toFixed(2)}</p>
                            <div className="discount">{bread.discount}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Breads