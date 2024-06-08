import { useState, useEffect, Fragment } from 'react';
import { Transition } from '@headlessui/react';
import SideBar from "./SideBar";
import TopBar from "./TopBar"



import React from 'react'

export const DefaultLayout = ({ children }) => {
  const [showNav, setShowNav] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  function handleResize() {
    if (innerWidth <= 640) {
      setShowNav(false);
      setIsMobile(true);
    } else {
      setShowNav(true);
      setIsMobile(false);
    }
  }

  useEffect(() => {
    if (typeof window != undefined) {
      addEventListener("resize", handleResize)
    }

    return () => {
      


      removeEventListener("resize", handleResize);

    };
  }, []);

  return (
    
    <>

    

    
      <TopBar showNav={showNav} setShowNav={setShowNav} />
      <Transition
        as={Fragment}
        show={showNav}
        enter='transform transifion duration-[400ms]'
        enterFrom='-translate-x-full'
        enterTo='translate-x-0'
        leave='transform duration-[400ms] transition ease-in-out'
        leaveFrom='translate-x-0'h  
        leaveTo='-translate-x-full'



      >
        <SideBar showNav={showNav} />
        



      </Transition>

      <main className={`pt-16 transition-all duration-[400ms] ${showNav && !isMobile ? "pl-56" : ""}`}>
        <div className='px-4 md:px-16'>
        <p className='text-gray-700 text-3xl mb-16 font-bold'>DefaultLayout</p>
         <div className='rounded bg-white h-40 shadow-sm'></div>
          

          {children}
        </div>
        

      </main>

      


    </>
  )

}
