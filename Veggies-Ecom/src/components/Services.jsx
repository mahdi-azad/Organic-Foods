import React from 'react'
import '../styles/services.scss'
import products from '../staticData/product.js'

const Services = () => {
    //firstMapFruits is only for the the featured products display within services_first_map
    const firstMapFruits = products.filter(product => product.type === 'fruit').slice(0, 2);
    const fruits = products.filter(product => product.type === 'fruit')
    const vegetables = products.find(product => product.type === 'vegetable');
    const bread = products.find(product => product.type === 'bread');
  return (
    <div className='services'>
        <div className='services__container'>
            <div className='services__container-item'>
                <img src="/images/service-icon/delivery.png" alt="" loading='lazy'></img>
                <h5>Free Delivery</h5>
                <p>From 50$</p>
            </div>
            <div className='services__container-item'>
                <img src="/images/service-icon/customer.png" alt="" loading='lazy'></img>
                <h5>95% Customer</h5>
                <p>Ratings</p>
            </div>
            <div className='services__container-item'>
                <img src="/images/service-icon/days.png" alt="" loading='lazy'></img>
                <h5>365 Days</h5>
                <p>Free Returns!</p>
            </div>
            <div className='services__container-item'>
                <img src="/images/service-icon/payment.png" alt="" loading='lazy'></img>
                <h5>Payment</h5>
                <p>Secure System</p>
            </div>
            <div className='services__container-item'>
                <img src="/images/service-icon/best.png" alt="" loading='lazy'></img>
                <h5>The Best Brands</h5>
                <p>For You</p>
            </div>
        </div>
        <div className='services_first_map'>
            <div className='services_first_map-header'>
                <div>
                    <h2 style = {{fontSize: '1.8rem'}}>Featured Products</h2>
                </div>
                <div>
                    <button>View More</button>
                </div>
            </div>
            <hr></hr>
            <div className='services_first_map-display'>
                {/* Map over fruits */}
                {
                    firstMapFruits.map(fruit => (
                        <div key={fruit.id} className='services_first_map-display-item'>
                            <div>
                                <img src={fruit.image} alt={fruit.name} style={{ width: '150px', height: '100px' }} />
                            </div>
                            <div>
                                <p className='services_first_map-name'>{fruit.name}</p>
                                <p className='services_first_map-rating'>Rated {fruit.stars}&nbsp;Stars!</p>
                                {/* .toFixed(2) ensures the value shows 5.00 instead of just 5 */}
                                <p className='services_first_map-prev-price'>${fruit.prevPrice.toFixed(2)}</p>
                                <p className='services_first_map-price'>${fruit.currentPrice.toFixed(2)}</p>
                                <div className="discount">{fruit.discount}</div>
                            </div>
                        </div>
                    ))}  
                {/* Display 1 vegetable */}
                {vegetables && (
                     <div className='services_first_map-display-item'>
                        <img src={vegetables.image} alt={vegetables.name} style={{ width: '150px', height: '100px' }} />
                        <p className='services_first_map-name'>{vegetables.name}</p>
                        <p className='services_first_map-rating'>Rated {vegetables.stars}&nbsp;Stars!</p>
                        <p className='services_first_map-prev-price'>${vegetables.prevPrice.toFixed(2)}</p>
                        <p className='services_first_map-price'>${vegetables.currentPrice.toFixed(2)}</p>
                        <div className="discount">{vegetables.discount}</div>
                    </div>
                )}
                {/* Display 1 vegetable */}
                {bread && (
                    <div className='services_first_map-display-item'>
                        <img src={bread.image} alt={bread.name} style={{ width: '200px', height: '100px' }} />
                        <p className='services_first_map-name'>{bread.name}</p>
                        <p className='services_first_map-rating'>Rated {bread.stars}&nbsp;Stars!</p>
                        <p className='services_first_map-prev-price'>${bread.prevPrice.toFixed(2)}</p>
                        <p className='services_first_map-price'>${bread.currentPrice.toFixed(2)}</p>
                        <div className="discount">{bread.discount}</div>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Services