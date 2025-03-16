import './App.css'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const StickyNavbar = () =>  {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsSticky(window.scrollY > 60);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
  return (
    <>
    <nav
      className={`w-full z-50 transition-colors duration-200 ${
        isSticky
          ? "fixed top-0 bg-white/80 shadow-sm"
          : "absolute top-[10px] bg-transparent p-10"
      }`}
    >
        <div class="mx-auto max-w-7xl h-10 px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between">
            <div class="flex flex-1 items-center justify-center sm:justify-between sm:items-stretch mx-30">
                <div className="flex shrink-0 items-center">
                    <h1 className='text-xl font-semibold'>Apple Vision Pro</h1>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4 items-center">
                    {/*  Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <a href="#" className="px-3 py-2 text-sm text-black" aria-current="page">Store</a>
                    <a href="#" className="px-3 py-2 text-sm text-black border-b-1">Overview</a>
                    <a href="#" className="px-3 py-2 text-sm text-black">Guided Tour</a>
                    <a href="#" className="px-3 py-2 text-sm text-black">Tech Specs</a>
                    <button className='bg-transparent border px-4 py-1 rounded-full group hover:bg-black'><a className='text-sm text-black group-hover:cursor-pointer group-hover:text-white'>Book a demo</a></button>
                    <button className='bg-blue-600 px-4 py-1 rounded-full group'><a className='text-sm text-white group-hover:cursor-pointer'>Buy</a></button>
                </div>
                </div>
            </div>
            </div>
        </div>
        </nav>
    </>
  );
};