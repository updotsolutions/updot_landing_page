import React from 'react'
import Link from 'next/link'
import HeroForm from './HeroForm'
// import HeroImg from '../assets/Hero.svg'

const Hero = () => {
  return (
    <div className="w-full mx-auto px-4 py-8 md:py-0 flex items-center relative  md:h-screen">
      <div className="w-full grid gap-y-10 md:gap-x-24 grid-cols-1 md:grid-cols-2 items-start">
        <div className="flex flex-col justify-center relative z-20 gap-3 md:gap-6">
          <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold flex flex-col text-gray-900 gap-y-2">
            Professional
            <span>Website Development and</span>
            <span>Design</span>
            <span>Company</span>
          </h1>
          <p className="hidden md:block text-sm sm:text-sm xl:text-base text-gray-600 ">
            Being your perfect web solutions partner, UPDOT is a Bangalore based
            web design and development studio. Striving to the best of its
            abilities the team serves top-notch digital experiences to its
            clients.
          </p>

          <div className="hidden md:flex">
            <Link
              href="#stories"
              className="py-2 px-4 rounded-lg bg-gray-900 border-2 border-transparent text-white text-base sm:text-lg mr-4 hover:bg-gray-800"
            >
              Read Success Stories
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center md:items-start relative z-20 ">
          <HeroForm />
        </div>
      </div>
    </div>
  )
}

export default Hero
