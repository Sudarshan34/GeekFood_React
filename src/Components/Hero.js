import React from 'react'
import bgimg from './food1.avif'


function Hero() {
    return (
        <div className='root'>
            <div className='card1'>
                <div className='prod'>
                    <h1 className='ulk'>Unlock the Heroic Flavor Journey.<br />with Our Food App!</h1>
                    <button className='search'>Search Now</button>
                    <button className='km'>Know More</button>

                </div>


                <img src={bgimg} className='food'></img>

            </div>

        </div>
        
    
    )
}

export default Hero;