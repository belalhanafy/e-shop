import React, { useEffect, useState } from 'react'
import lightMode from "../../assets/website/light-mode-button.png"
import darkMode from "../../assets/website/dark-mode-button.png"
const DarkMode = () => {
    const [theme, settheme] = useState(localStorage.getItem("theme"))

    // to get html element
    const htmlTag = document.documentElement;
    
    useEffect(() => {
        localStorage.setItem("theme",theme);
        if(theme === 'light'){
            htmlTag.classList.remove('dark');
            htmlTag.classList.add('light');
        }else{
            htmlTag.classList.remove('light');
            htmlTag.classList.add('dark');
        }
    }, [theme])
    
  return (
    <div className='relative'>
        <img onClick={()=>settheme(theme === "dark"? "light" : "dark")} className={`duration-300 w-12 absolute z-10 cursor-pointer ${theme === "dark" ? "opacity-0" : "opacity-100"}`} src={lightMode} alt="" />
        <img className={`w-12 cursor-pointer`} src={darkMode} alt="" />
    </div>
  )
}

export default DarkMode
