import React from 'react'
import '../styles/sustainable.scss'

const Sustainable = () => {
  return (
    <div className='sustain_container'>
        <div className='sustain_container-cards'>
            <div className='sustain_container-cards-left'>
                <div className='sustain-card'>
                    <img src='/images/global.png' alt='global.png'/>
                    
                    <p>Choose organic for a healthier you and a healthier planet.</p>
                </div>
                <div className='sustain-card'>
                    <img src='/images/sustain.png' alt='sustain.png'/>
                    
                    <p>Make a difference with every bite.</p>
                </div>
            </div>
            <div className='sustain_container-cards-right'>
                <div className='sustain-card'>
                    <img src='/images/shopping.png' alt='shopping.png' style = {{width: '173px'}}/>
                    
                    <p>Shop sustainably with our curated collection of organic foods.</p>
                </div>
                <div className='sustain-card'>
                    <img src='/images/turbine.png' alt='turbine.png' style = {{width: '173px'}}/>
                    
                    <p>Join the movement towards a more sustainable future.</p>
                </div>
            </div>
        </div>
        <div className='clean-future'>
            <h1>Sustainable Shopping: Embrace Organic Foods for a Greener Future</h1>
            <p>Embrace organic foods on our platform to combat climate change. By supporting organic farming, you promote sustainability, reduce carbon footprints, and foster healthier ecosystems. Join us in making a positive impact on both personal health and the environment.</p>
            <button>Join Us</button>
        </div>
    </div>
  )
}

export default Sustainable