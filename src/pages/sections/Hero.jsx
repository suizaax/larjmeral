import React, { useState } from 'react'
import Navbar from '../componenets/Navbar'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'


const Hero = () => {

    const { t } = useTranslation()

    return (
        <div className='relative'>
            <Navbar />

            <div className='md:flex md:items-center mx-auto my-auto space-y-0 md:space-y-0 relative min-h-screen bg-home-bg bg-contain bg-opacity-50 bg-white'>
                <div className='relative md:w-auto md:min-w-full md:min-h-full md:h-full h-96 w-full md:max-w-none z-10'>
                    <div className=' absolute h-full w-full object-cover z-10 bg-opacity-40 flex flex-col justify-center'>
                        <h1 className='md:text-lg font-light text-center text-sm font-font-main text-[#000] mb-6' data-aos="fade-right" data-aos-duration="500">
                            {t("Modern and easy-to-maintain die casting, Alumenium, Alloy")}
                        </h1>
                        <p className=' md:text-9xl text-5xl font-bold text-center font-font-main text-[#000] mb-6' data-aos="fade-left" data-aos-duration="500">
                            Larj Metal
                        </p>
                        <a href="/products/OurProducts" className=' mx-auto'>
                            <div className='flex bg-[#EFE8DD] text-[#714A2D] items-center p-2 px-6 hover:text-[#EFE8DD] hover:bg-[#714A2D] transition duration-300 space-x-2'>
                                <p>{t("View Products")}</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" /> </svg>
                            </div>
                        </a>
                    </div>
                    {/* <Image src='/heroBg.png' className=' w-full h-full object-cover' width={1920} height={1080}/> */}
                </div>
            </div>
        </div>
    )
}

export default Hero