import Logo from './logo/Logo';
import './App.css';
import { useRef } from 'react';
import { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsGear } from 'react-icons/bs';
import { RiNotificationLine } from 'react-icons/ri';


function App() {
    const icons = [
      AiOutlineHome,
      FaRegUser,
      MdEmail,
      BsGear,
      RiNotificationLine
    ];  
    const [active,setActive] = useState(2)
  return (
  <>
        {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
            id="filter-svg">
            <defs>
                <filter id="goo">
                  <feGaussianBlur in="SourceGraphic"
                      stdDeviation="10" result="blur" />
                  <feColorMatrix in="blur" mode="matrix"
                      values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7" result="goo" />
                  <feBlend in="SourceGraphic" in2="goo" />
                </filter>
            </defs>
        </svg> */}
    <div className="top-container min-h-screen bg-slate-100 -z-50">

      <header className="text-center text-4xl p-3 bg-gradient-to-r from-blue-300 via-sky-300 to-blue-300 ">
        <span className="font-bold">Plancab</span> <Logo />
      </header>      
      <nav className="flex flex-row justify-evenly w-full bg-slate-700 text-cyan-50 absolute bottom-0 rounded-t-2xl text-4xl py-4">
          <div className="selected-background bg-slate-700 rounded-full" />
          {icons.map((Icon,index)=>{
            return (
              <Icon className="z-10"/>
            )
          })}
      </nav>
      
    </div>
  </>
  );
}

export default App;
