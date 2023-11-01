import React from 'react'
import logo from './logo.avif'
import fb from './fb.png'



function Foot() {
    return (
        <div className='root'>
            <div className='foot'>
                <img src={logo}></img>
                <h3>GeekFoods</h3>


            </div>

            <div>
                <p>The Gourmet Bistro
                    123 Main Street
                    Cityville, CA 12345
                    United States</p>
            </div>

            <div className='footbar'>
                <a className='abt'>About</a>
                <a className='car'>Careers</a>
                <a className='his'>History</a>
                <a className='ser'>Services</a>
                <a className='proj'>Projects</a>
                <a className='blg'>Blog</a>
            </div>

            <div className='end'>
                <p>Developed with love using React 💘 </p>
            </div>
        </div>
    )
}

export default Foot