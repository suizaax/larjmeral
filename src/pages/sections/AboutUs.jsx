import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next'

const AboutUs = () => {

    const { t } = useTranslation()

    return (
        <React.Fragment>
            <div className=' relative md:h-screen h-max w-full md:flex block space-y-6 md:space-y-0 pb-10 md:pb-0 bg-white' id='about-us'>
                <img src="/aboutBg.png" className=' absolute top-0 z-0 w-full object-cover opacity-40 ' alt="Güzel wpc - pattern" />
                <div className=' md:w-1/2 w-full z-10'>
                    <Image src="/test.jpeg" alt="Güzel wpc - about image" className='h-full w-full object-cover' width={960} height={1920} />
                </div>
                <div className='md:w-1/2 w-full h-full flex flex-col justify-center px-10 z-10'>
                    <h1 className=' text-[#71492C] md:text-4xl text-xl font-bold mb-6'>{t("About Larj Metal")}</h1>
                    <span className=" h-0.5 bg-[#C3AB92] rounded-full max-w-md"></span>
                    <span className=' md:w-10/12  mt-4 text-[#1E1915] '>
                        At Larj Metal, we're passionate about pushing the boundaries of modern die casting. We leverage cutting-edge automation and precision tooling to craft exceptional aluminum alloy components.  Our commitment to innovation ensures consistent, high-quality parts, minimizing maintenance needs for our clients.
                        <br /> <br />
                        We understand the importance of efficiency in high-volume production.  That's why aluminum alloys, known for their strength and lightweight properties, are a perfect fit for our process.  By injecting molten aluminum at high pressure into reusable molds, we achieve cost-effective solutions that meet your exact specifications.
                        <br /> <br />
                        Want to learn more about how our modern die casting solutions can benefit your business?  Contact us today!
                    </span>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AboutUs