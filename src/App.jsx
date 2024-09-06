import Logo from './logo/Logo';
import './App.css';
import { useEffect, useRef } from 'react';
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

  const getPosition = (event) => {
    const button = event.currentTarget; 
    const rect = button.getBoundingClientRect(); 


    let x = rect.left + window.scrollX 
    document.getElementById('circle').style.transform = `translateX(calc(${x}px - 0.8em))`
  }
  const [active, setActive] = useState(2)

  useEffect(() => {
    let rect = document.getElementsByClassName('mybutton')[0].getBoundingClientRect()
    document.getElementById('circle').style.transform = `translateX(calc(${rect.x}px - 0.8em))`
    
    console.log(rect);
  }, [])

  useEffect(() => {
    console.log(active)
  }, [active])
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
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
        </svg>
      <div className="top-container min-h-screen bg-slate-100 -z-50">

        <header className="text-center text-4xl p-3 bg-gradient-to-r from-blue-300 via-sky-300 to-blue-300 ">
          <span className="font-bold">Plancab</span> <Logo />
        </header>
        <nav className="selected flex flex-row justify-evenly w-full bg-slate-700 text-cyan-50 absolute bottom-0 rounded-t-2xl text-4xl py-4">
          <div id='circle' className="selected-background bg-slate-700 rounded-full "
            style={{

              transition: 'transform 0.3s ease',
            }}
          />
          {icons.map((Icon, index) => {
            return (
              <button key={index} className="z-10 mybutton" onClick={(e) => { setActive(  ); getPosition(e) }}><Icon /></button>
            )
          })}
        </nav>

      </div>
    </>
  );
}

export default App;
