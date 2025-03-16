import { useState } from 'react'
import { TextParallaxContentExample } from './TextParallaxContent'
import { MainNavbar } from './MainNavbar'
import { StickyNavbar } from './StickyNavbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MainNavbar />
    < StickyNavbar />
    <div className="h-screen flex justify-center relative">
      <video autoPlay muted loop playsInline className="h-full object-cover" src='https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/hero-us/large.mp4'/>

      {/* Overlay Content */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-10 flex flex-col items-center">
        <div className="flex flex-row items-center space-x-4 p-4 rounded-lg">
          {/* Apple Logo */}
          <svg className="text-black w-10 h-10 md:w-12 md:h-12" viewBox="-1.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor">
            <g id="SVGRepo_iconCarrier">
              <title>apple [#173]</title>
              <desc>Created with Sketch.</desc>
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Dribbble-Light-Preview" transform="translate(-102.000000, -7439.000000)" fill="currentColor">
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path d="M57.5708873,7282.19296 C58.2999598,7281.34797 58.7914012,7280.17098 58.6569121,7279 C57.6062792,7279.04 56.3352055,7279.67099 55.5818643,7280.51498 C54.905374,7281.26397 54.3148354,7282.46095 54.4735932,7283.60894 C55.6455696,7283.69593 56.8418148,7283.03894 57.5708873,7282.19296 M60.1989864,7289.62485 C60.2283111,7292.65181 62.9696641,7293.65879 63,7293.67179 C62.9777537,7293.74279 62.562152,7295.10677 61.5560117,7296.51675 C60.6853718,7297.73474 59.7823735,7298.94772 58.3596204,7298.97372 C56.9621472,7298.99872 56.5121648,7298.17973 54.9134635,7298.17973 C53.3157735,7298.17973 52.8162425,7298.94772 51.4935978,7298.99872 C50.1203933,7299.04772 49.0738052,7297.68074 48.197098,7296.46676 C46.4032359,7293.98379 45.0330649,7289.44985 46.8734421,7286.3899 C47.7875635,7284.87092 49.4206455,7283.90793 51.1942837,7283.88393 C52.5422083,7283.85893 53.8153044,7284.75292 54.6394294,7284.75292 C55.4635543,7284.75292 57.0106846,7283.67793 58.6366882,7283.83593 C59.3172232,7283.86293 61.2283842,7284.09893 62.4549652,7285.8199 C62.355868,7285.8789 60.1747177,7287.09489 60.1989864,7289.62485" id="apple-[#173]"> 
                    </path>
                  </g>
                </g>
              </g>
            </g>
          </svg>

          {/* Text */}
          <h1 className="text-3xl md:text-6xl font-semibold text-black">Vision Pro</h1>
        </div>
        <a href="https://idmsa.apple.com/IDMSWebAuth/signin?appIdKey=e48e92b8e87335f23bb1750ece469d3bbbe1ab73117d9ec66246b5f5a02dcf2c&language=US-EN&rv=1&path=%2Fretail%2Finstore-shopping-session%2Fsession-selection%2F%3Ftopic%3Dvisionpro%26resToken%3D5f1a54e6-ef5f-b372-2801-4318b2b1a256" target='_blank' className='flex items-center gap-2 text-md md:text-2xl font-semibold text-orange-500 group'><p className='text-orange-500 text-md font-semibold group-hover:cursor-pointer group-hover:underline md:text-2xl'>Book a demo</p>&gt;</a>
        <a href="https://idmsa.apple.com/IDMSWebAuth/signin?appIdKey=e48e92b8e87335f23bb1750ece469d3bbbe1ab73117d9ec66246b5f5a02dcf2c&language=US-EN&rv=1&path=%2Fretail%2Finstore-shopping-session%2Fsession-selection%2F%3Ftopic%3Dvisionpro%26resToken%3D5f1a54e6-ef5f-b372-2801-4318b2b1a256" target='_blank' className='flex items-center gap-2 text-md md:text-2xl font-semibold text-orange-500 group'><p className='text-orange-500 text-md font-semibold group-hover:cursor-pointer group-hover:underline md:text-2xl'>Learn more about visionOS 2</p>&gt;</a>
      </div>
    </div>
    <TextParallaxContentExample />
    </>
  )
}

export default App
