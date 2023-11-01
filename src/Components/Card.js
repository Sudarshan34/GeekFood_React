import React from 'react'
import briyani from './biryani.png'


function Card() {
    return (
        <div className='root'>
            <hr></hr>
            <h1>
                "Indulge in Mouthwatering Delights with Our App!
            </h1>


            <div className='card2'>


                <img src={briyani} className='biryani'></img>

                <div className='para'>
                    <h1 className=''>Savor the Irresistible Magic of Mouthwatering Cuisine</h1>
                    <p>Biryani, the crown jewel of Indian cuisine, is an exquisite symphony of flavors that never fails to tantalize the taste buds. The aromatic spices, fragrant basmati rice, and tender meat or vegetables come together in a harmonious blend of tastes and textures. As you lift the lid of a biryani pot, the enchanting aroma escapes, teasing your senses and making your mouth water in eager anticipation. With every bite, the layers of spices and herbs unfold, leaving you in a state of pure culinary bliss. Biryani is not just a dish; it's a sensory experience that leaves an indelible mark on your palate, ensuring that the mere thought of it makes your mouth water.</p>


                </div>


               
            </div>
            <button className='cb'>Get a call Back!</button>


        </div>
    )
}

export default Card