import React, { useState } from 'react';
import bgimg from '../assets/vector3.png'
import food1 from '../assets/biryani.png'
import food2 from '../assets/biryani2.png'
import food3 from '../assets/biryani3.png'

const imageList= [
    {
        id: 1,
        image: food1
    },

    {
        id: 2,
        image: food2
    },

    {
        id: 3,
        image: food3
    }
]

const bgImage = {
    backgroundImage : `url(${bgimg})`,
    backgroundPosition : 'center',
    backgroundSize : 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%'
}

const Hero = () => {
    const [imgId, setImageID] = useState(food1)
    return (
        <>
            <div style={bgImage} className='min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 flex justify-center items-center'>
                <div className='container pb-8 sm:pb-0'>
                    <div className='grid grid-cols-1 sm:grid-cols-2'>
                        <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-2'>
                            <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
                            Welcome To The Foodie Zone
                            </h1>
                            <p className='text-sm'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident soluta, dignissimos temporibus deleniti dolores fugit, quasi reprehenderit quia iure consequatur eos numquam cumque, laboriosam sit maxime magnam corrupti impedit porro harum eaque vel quas totam aliquam minus! Ab harum a modi enim! Maiores consequatur dolorum officiis dolor fugiat? Maxime, obcaecati!
                            </p>
                            <div>
                                <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-200'>Order Now</button>
                            </div>
                        </div>

                        <div className='order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative'>
                            <div className='flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden'>
                                <img src={imgId} alt="" className='w-[300px] sm:w-[450px] mx-auto spin'/>
                            </div>

                            <div className='flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full'>
                                {
                                    imageList.map(item=>(
                                        <img key={item.id} src={item.image} className='max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200 cursor-pointer' onClick={()=>{
                                           setImageID(
                                            item.id === 1 ? food1 : item.id === 2 ? food2 : food3 
                                           )
                                        }}/>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;