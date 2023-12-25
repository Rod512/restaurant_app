import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Menu = () => {
    const [food, setFood] = useState([])
    const fetchfood = async()=>{
        const response = await axios.get(`https://themealdb.com/api/json/v1/1/categories.php`)
        setFood(response.data?.categories)
    }

    useEffect(()=>{
        fetchfood()
    },[])
    
    return (
       <>
        <div className='py-10'>
            <div className='container text-center'>
                <h1 className='text-5xl font-bold text-yellow-500'>Our Menu</h1>

                <p className=''>Lorem ipsum dolor sit amet consectetu adipisicing elit.<br/>
                Rerum libero cumque ex doloribus quasi cum inventore minus?<br/>
                Iure commodi labore provident optio temporibus aut voluptatibus quasi,<br/>
                aliquam soluta? Voluptatem, error?</p>
            </div>

            <div className='container grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-14 md:gap-5 place-items-center py-10'>
            {/* Map through the food array and create a card for each item */}
            {
                food?.map((item,key)=>(
                    <div className='max-w-[300px] h-[300px] group rounded-2xl bg-white dark:bg-gray-800 border'>
                        <div>
                            <img className='w-full' src={item?.strCategoryThumb} alt="" />
                        </div>
                        <div>
                            <h4 className="font-bold text-center text-2xl text-primary">{item?.strCategory}</h4>
                            <div className='flex justify-center py-8'>
                                <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-200'>Order Now</button>
                            </div>
                        </div>
                    </div>
                ))
            }
                
            </div>
        </div>
       </>
    );
};

export default Menu;