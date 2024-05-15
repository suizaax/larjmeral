import React, { useState } from 'react'
import { Transition } from "@headlessui/react";
import Image from 'next/image';
import Script from 'next/script';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';


const NavbarBk = () => {

    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation()

    return (
        <div className=''>
            <nav className=" shadow-sm text-white border-b-2 border-[#A6907A] absolute top-0 left-0 w-full z-50 bg-[#A6907A] bg-opacity-0">
                <div className="w-full">
                    <div className="flex items-center h-20 w-full">
                        <div className="flex items-center md:justify-evenly md:px-0 px-6 w-full">
                            <a href="/">
                                <img priority={true} className='md:w-40 w-32' src='/logoFooter.png' alt="Guzel Wpc Logo" />
                            </a>
                            <div className="hidden md:block">
                                <ul className='hidden md:flex space-x-4'>
                                    <li className="ml-4 my-0 hover:scale-105 transition duration-300">
                                        <a href={"/#about-us"} className=" text-[#C9B39D] font-font-main font-semibold hover:text-[#714A2D]">
                                            {t("About Us")}
                                        </a>
                                    </li>
                                    <li className="ml-4 my-0 hover:scale-105 transition duration-300">
                                        <a href={"/#wpc-industry"} className="text-[#C9B39D] font-font-main font-semibold hover:text-[#714A2D]">
                                            {t("WPC Industry")}
                                        </a>
                                    </li>
                                    <li className="ml-4 my-0 hover:scale-105 transition duration-300">
                                        <a href={"/#our-products"} className="text-[#C9B39D] font-font-main font-semibold hover:text-[#714A2D]">
                                            {t("Product List")}
                                        </a>
                                    </li>
                                    <li className="ml-4 my-0 hover:scale-105 transition duration-300">
                                        <a href={"/#contact-us"} className="text-[#C9B39D] font-font-main font-semibold hover:text-[#714A2D]">
                                            {t("Contact Us")}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className=' flex space-x-3'>
                                <a className='md:block hidden text-lg font-normal p-2 px-6 text-[#71492C] border-none bg-[#C3AB92] hover:bg-[#efe2d3]' href="/products/OurProducts">
                                    {t("Products")}
                                </a>
                                <nav role="navigation" class="primary-navigation bg-[#C3AB92] hover:bg-[#efe2d3] p-2 hidden md:block">
                                    <ul>
                                        <li><a href="#">Language</a>
                                            <ul class="dropdown">
                                                <li><a onClick={(e) => { changeLanguage("fr") }}>Français</a></li>
                                                <li><a onClick={(e) => { changeLanguage("en") }}>English</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="mr-10 flex md:hidden ">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-[#C3AB92] inline-flex items-center justify-center p-2 rounded-md text-[#71492C]  hover:bg-[#efe2d3] focus:outline-none focus:ring-none"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>

                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden bg-black py-5" id="mobile-menu">
                            <ul className='flex flex-col items-start w-full text-base cursor-pointer space-y-6 py-10'>
                                <li className="ml-4 my-0 hover:scale-105 transition duration-300">
                                    <a href={"/#about-us"} className=" text-[#C9B39D] font-font-main font-semibold hover:text-white">
                                        {t("About Us")}
                                    </a>
                                </li>
                                <li className="ml-4 my-0 hover:scale-105 transition duration-300">
                                    <a href={"/#wpc-industry"} className="text-[#C9B39D] font-font-main font-semibold hover:text-white">
                                        {t("WPC Industry")}
                                    </a>
                                </li>
                                <li className="ml-4 my-0 hover:scale-105 transition duration-300">
                                    <a href={"/#our-products"} className="text-[#C9B39D] font-font-main font-semibold hover:text-white">
                                        {t("Product List")}
                                    </a>
                                </li>
                                <li className="ml-4 my-0 hover:scale-105 transition duration-300">
                                    <a href={"/#contact-us"} className="text-[#C9B39D] font-font-main font-semibold hover:text-white">
                                        {t("Contact Us")}
                                    </a>
                                </li>
                            </ul>
                            <div className=' mb-6 ml-4 flex space-x-4'>
                                <a className='md:hidden text-lg font-normal p-2 px-6 text-[#71492C] border-none bg-[#C3AB92] hover:bg-[#efe2d3]' href="/products/OurProducts">
                                    {t("Products")}
                                </a>
                                <nav role="navigation" class="primary-navigationn w-min bg-[#C3AB92] hover:bg-[#efe2d3] p-2 hidden md:block">
                                    <ul>
                                        <li><a href="#">Language</a>
                                            <ul class="dropdown">
                                                <li><a onClick={(e) => { changeLanguage("fr") }}>Français</a></li>
                                                <li><a onClick={(e) => { changeLanguage("en") }}>English</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    )
}

export default NavbarBk