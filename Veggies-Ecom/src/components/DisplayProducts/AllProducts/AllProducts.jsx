import React from 'react'
import products from '../../../staticData/product.js'
import '../../../styles/displayproducts.scss'

const AllProducts = () => {
    const secondMapFruits = products.filter(product => product.type === 'fruit').slice(0, 2);
    const secondMapVegetables = products.filter(product => product.type === 'vegetable').slice(0, 2);
    const secondMapBreads = products.filter(product => product.type === 'bread').slice(0, 2);
    return (
        <div className='display-stack'>
            {
                secondMapVegetables.map(veg => (
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
            {
                secondMapFruits.map(fruit => (
                    <div key={fruit.id} className='display_item'>
                        <div>
                            <img src={fruit.image} alt={fruit.name} style={{ width: '150px', height: '100px' }} />
                        </div>
                        <div>
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
            {
                secondMapBreads.map(bread => (
                    <div key={bread.id} className='display_item'>
                        <div>
                            <img src={bread.image} alt={bread.name} style={{ width: '150px', height: '100px' }} />
                        </div>
                        <div>
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

export default AllProducts