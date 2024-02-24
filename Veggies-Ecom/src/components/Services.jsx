import React from 'react'
import '../styles/services.scss'

const Services = () => {
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
    </div>
  )
}

export default Services