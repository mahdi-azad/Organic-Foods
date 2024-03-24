import React from 'react'
import products from '../../../staticData/product.js'
import '../../../styles/displayproducts.scss'

const Vegetables = () => {
    const fruits = products.filter(product => product.type === 'fruit');
    const vegetables = products.filter(product => product.type === 'vegetable');
    const breads = products.filter(product => product.type === 'bread');
    return (
        <div className='display-stack'>
            {
                vegetables.map(veg => (
                    <div key={veg.id} className='display_item'>
                        <div>
                            <img src={veg.image} alt={veg.name} style={{ width: '150px', height: '100px' }} />
                        </div>
                        <div className='display-text-items'>
                            <p className='display_item-name'>{veg.name}</p>
                            <p className='display_item-rating'>Rated {veg.stars}&nbsp;Stars!</p>
                            {/* .toFixed(2) ensures the value shows 5.00 instead of just 5 */}
                            <p className='display_item-prev-price'>${veg.prevPrice.toFixed(2)}</p>
                            <p className='display_item-price'>${veg.currentPrice.toFixed(2)}</p>
                            <div className="discount">{veg.discount}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Vegetables