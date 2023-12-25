import React, { useEffect, useState } from 'react';
import img from '../assets/biryani2.png'
import axios from 'axios';

const Menu = () => {
    const [food, setFood] = useState([])
    const fetchfood = async()=>{
        const response = await axios.get(`http://themealdb.com/api/json/v1/1/categories.php`)
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

            <div className='container grid sm:grid-cols-3 grid-cols-1 gap-4'>
            {/* Map through the food array and create a card for each item */}
            {
                food?.map((item,key)=>(
                    <div>
                        <div>
                            <img src={item?.strCategoryThumb} alt="" />
                        </div>
                        <div>
                            <h4>{item?.strCategory}</h4>
                            <p>{item?.strCategoryDescription}</p>
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