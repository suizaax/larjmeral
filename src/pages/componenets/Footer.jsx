import React from 'react'

const Footer = () => {

    return (
        <div>
            <footer className="bg-white pt-20 lg:pt-[120px] pb-10 lg:pb-20 relative z-10 w-full">
                <div className="container mx-auto">
                    <div className="flex flex-wrap  ">
                        <div className="w-full sm:w-2/3 lg:w-3/12 px-4">
                            <div className="w-full mb-10 ">
                                {/* <a
                                    href="#"
                                    className="inline-block max-w-[250px] mb-6"
                                >
                                    <img
                                        src="/logoFooter.png"
                                        alt="logo"
                                        className="max-w-full"
                                    />
                                </a> */}
                                <p className="flex items-center text-sm text-dark text-[#714A2D] font-medium">
                                    <a href='/'>{("©2023 Larj Metal, Co. All rights reserved")}</a>
                                </p>
                                <p className="flex items-center text-sm text-dark text-[#714A2D] font-light mt-1 hover:underline">
                                    {/* <a href='https://sami-dev.me/' target='_blank'>{("Created by sami-dev")}</a> */}
                                </p>
                            </div>
                        </div>
                        <div className=" md:w-1/2 w-1/2 lg:w-2/12 px-4 text-[#714A2D]">
                            <div className="w-full mb-10">
                                <h4 className="text-dark text-2xl mb-9 font-bold">{("Menu")}</h4>
                                <ul>
                                    <li>
                                        <a href="/#about-us"
                                            className="inline-block font-font-main text-body-color hover:text-primary leading-loose mb-2 text-[#C3AB92]" >
                                            {("About Us")}
                                        </a>
                                    </li>
                                    {/* <li>
                                        <a
                                            href="/#wpc-industry"
                                            className="inline-block font-font-main text-body-color  hover:text-primary leading-loose mb-2 text-[#C3AB92] ">
                                            {("WPC Industry")}
                                        </a>
                                    </li> */}
                                    <li>
                                        <a
                                            href="/#our-products"
                                            className="inline-block font-font-main text-body-color  hover:text-primary leading-loose mb-2 text-[#C3AB92] ">
                                            {("Product List")}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/#contact-us"
                                            className="inline-block font-font-main text-body-color  hover:text-primary leading-loose mb-2 text-[#C3AB92] ">
                                            {("Contact Us")}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className=" md:w-1/2 w-1/2 lg:w-2/12 px-4 text-[#714A2D]">
                            <div className="w-full mb-10">
                                <h4 className="text-dark text-2xl mb-9 font-bold">{("Products")}</h4>
                                <ul>
                                    <li>
                                        <p href="/project/gw-wp001"
                                            className="inline-block font-font-main text-body-color text-[#C3AB92] hover:text-primary leading-loose mb-2" >
                                            LM-FA001
                                        </p>
                                    </li>
                                    <li>
                                    <p href="/project/gw-wp001"
                                            className="inline-block font-font-main text-body-color text-[#C3AB92] hover:text-primary leading-loose mb-2" >
                                            LM-FA002
                                        </p>
                                    </li>
                                    <li>
                                    <p href="/project/gw-wp001"
                                            className="inline-block font-font-main text-body-color text-[#C3AB92] hover:text-primary leading-loose mb-2" >
                                            LM-FA003
                                        </p>
                                    </li>
                                    <li>
                                    <p href="/project/gw-wp001"
                                            className="inline-block font-font-main text-body-color text-[#C3AB92] hover:text-primary leading-loose mb-2" >
                                            LM-FA004
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className=" md:w-1/2 w-1/2 lg:w-2/12 px-4 text-[#714A2D]">
                            <div className="w-full mb-10">
                                <h4 className="text-dark text-2xl mb-9 font-bold">{("Documents")}</h4>
                                <ul>
                                    <li>
                                        <a
                                            href="#"
                                            className="inline-block font-font-main text-body-color hover:text-primary leading-loose mb-2 text-[#C3AB92]"
                                        >
                                            {("Terms & conditions")}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="inline-block font-font-main text-body-color hover:text-primary leading-loose mb-2 text-[#C3AB92]"
                                        >
                                            {("Privacy & policy")}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="inline-block font-font-main text-body-color hover:text-primary leading-loose mb-2 text-[#C3AB92]"
                                        >
                                            {("Company profile")}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className=" md:w-1/2 w-1/2 lg:w-2/12 px-4 text-[#714A2D]">
                            <div className="w-full mb-10">
                                <h4 className="text-dark text-2xl mb-9 font-bold">{("Follow us")}</h4>
                                <p className='text-[#C3AB92] mb-9 md:w-full'>
                                    {("Join our (social media) community for the best tips and tricks for WPC.")}
                                </p>
                                <div className="flex items-center mb-6">
                                    <a
                                        href="#"
                                        target={"_blank"}
                                        className="w-12 h-12 flex items-center justify-center rounded-full border border-[#E5E5E5] text-dark hover:text-white hover:bg-primary hover:border-primary mr-3 sm:mr-4 lg:mr-3 xl:mr-4"
                                    >
                                        <div className=' p-3 rounded-full border'>
                                            <img src="/facebook.png" alt="Güzel WPC - Facebook logo" />
                                        </div>
                                    </a>
                                    <a
                                        href="#"
                                        target={"_blank"}
                                        className="w-12 h-12 flex items-center justify-center rounded-full border border-[#E5E5E5] text-dark hover:text-white hover:bg-primary hover:border-primary mr-3 sm:mr-4 lg:mr-3 xl:mr-4"
                                    >
                                        <div className=' p-3 rounded-full border'>
                                            <img src="/instagram.png" alt="Güzel WPC - instagram logo" />
                                        </div>
                                    </a>
                                    <a
                                        href="#"
                                        target={"_blank"}
                                        className="w-12 h-12 flex items-center justify-center rounded-full border border-[#E5E5E5] text-dark hover:text-white hover:bg-primary hover:border-primary mr-3 sm:mr-4 lg:mr-3 xl:mr-4"
                                    >
                                        <div className=' p-3 rounded-full border'>
                                            <img src="/tiktok.png" alt="Güzel WPC - tiktok logo" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer