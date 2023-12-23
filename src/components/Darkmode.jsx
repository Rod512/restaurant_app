import React from 'react';
import darkimg from '../assets/dark-mode-button.png';

import lightimg from '../assets/light-mode-button.png'

const Darkmode = () => {
    const [isDark, setIsDark] = React.useState(localStorage.getItem("isDark") ? localStorage.getItem("isDark") : "light");

    const element = document.documentElement

    React.useEffect(()=>{
        if(isDark == "dark"){
            element.classList.add("dark")
            localStorage.setItem("isDark","dark")
        }else{
            element.classList.remove("dark")
            localStorage.setItem("isDark","light")
        }
    },[isDark])

    const changeTheme = ()=>{
        if(isDark == "light"){
            setIsDark("dark");
        }else{
            setIsDark("light")
        }
    }

    return (
        <>
            <div className='relative'>
                <img src={darkimg} className={`w-12 absolute right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${
                    isDark !== "dark" ? "opacity-0": "opacity-100"
                }`} alt="" onClick={changeTheme} />


                <img src={lightimg} className='w-12 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300'  alt="" onClick={changeTheme}/>
            </div>
        </>
    );
};

export default Darkmode;