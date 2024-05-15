import React from 'react'
import { useTranslation } from 'react-i18next'

const OurProducts = () => {

    const { t } = useTranslation()

    return (
        <div className='h-max w-full md:flex md:flex-col block space-y-6 md:space-y-0 md:p-20 p-0 py-10 md:px-20 px-10 bg-white' id='our-products'>
            <div className=' flex flex-col space-y-2 mb-4'>
                <p className='text-[#714A2D] text-3xl font-light '>{t("Our products")}</p>
                {/* <p className='text-[#714A2D] text-5xl font-bold '>{t("Wall Panels")}</p> */}
                <span className=" h-0.5 bg-[#C3AB92] rounded-full max-w-md"></span>
                <p className='text-[#714A2D] md:w-4/12 w-full '>{t("Strength meets efficiency: We craft top-quality aluminum alloy components through automated die casting")}</p>
            </div>
            <div className=' md:flex block items-end md:space-x-20 space-y-10 md:space-y-0 justify-center '>
                <div className=' bg-[#EFE8DD] p-3 relative md:max-w-lg w-full '>
                    <div className='absolute top-0 right-0 bg-[#C3AB92] p-5'>
                        <p className='font-bold text-[#714A2D] writing-vertical tracking-widest'>LM-FA001</p>
                    </div>
                    <img src="/image1-removebg-preview.png" alt="Güzel wpc - gw1005" />
                    <div className=' flex items-end justify-between px-6'>
                        <p className=' text-2xl md:text-4xl font-bold text-[#714A2D]'>Ferrure d'assemblage</p>
                        {/* <a href="/project/gw-wp005" className='text-[#714A2D] text-xl'>
                            {t("Details...")}
                        </a> */}
                    </div>
                </div>
                <div className=' bg-[#EFE8DD] p-3 relative md:max-w-lg w-full '>
                    <div className='absolute top-0 right-0 bg-[#C3AB92] p-5'>
                        <p className='font-bold text-[#714A2D] writing-vertical tracking-widest'>LM-FA001</p>
                    </div>
                    <img src="/image1-removebg-preview.png" alt="Güzel wpc - gw1005" />
                    <div className=' flex items-end justify-between px-6'>
                        <p className=' text-2xl md:text-4xl font-bold text-[#714A2D]'>Ferrure d'assemblage</p>
                        {/* <a href="/project/gw-wp005" className='text-[#714A2D] text-xl'>
                            {t("Details...")}
                        </a> */}
                    </div>
                </div>
                <div className=' bg-[#EFE8DD] p-3 relative md:max-w-lg w-full '>
                    <div className='absolute top-0 right-0 bg-[#C3AB92] p-5'>
                        <p className='font-bold text-[#714A2D] writing-vertical tracking-widest'>LM-FA001</p>
                    </div>
                    <img src="/image1-removebg-preview.png" alt="Güzel wpc - gw1005" />
                    <div className=' flex items-end justify-between px-6'>
                        <p className=' text-2xl md:text-4xl font-bold text-[#714A2D]'>Ferrure d'assemblage</p>
                        {/* <a href="/project/gw-wp005" className='text-[#714A2D] text-xl'>
                            {t("Details...")}
                        </a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurProducts