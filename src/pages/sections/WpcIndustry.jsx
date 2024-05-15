import React from 'react'
import { useTranslation } from 'react-i18next'

const WpcIndustry = () => {

    const { t } = useTranslation()

    return (
        <React.Fragment>
            <div className=' relative md:h-screen md:py-0 py-10 h-max w-full md:flex block space-y-6 md:space-y-0 bg-[#EFE8DD]' id='wpc-industry'>
                <img src="/advBg.png" className=' absolute z-0 opacity-10 w-full object-cover bottom-0' alt="" />
                <div className='md:w-1/2 w-full h-full flex flex-col justify-center md:px-20 px-10 z-10'>
                    <h1 className=' text-[#71492C] md:text-4xl text-xl font-bold mb-6'>{t("WPC Industry")}</h1>
                    <span className=" h-0.5 bg-[#C3AB92] rounded-full max-w-md"></span>
                    <span className=' md:w-10/12  mt-4 text-[#1E1915] '>
                        {t("Wood-plastic composites are composite materials made of wood fiber/wood flour and thermoplastic such as polythene, polypropylene, polyvinyl chloride, or polylactic acid.")}
                        <br /> <br />
                        {t("In addition to wood fiber and plastic, WPCs can also contain other ligno-cellulosic and/or inorganic filler materials.")}
                        <br /> <br />
                        {t("WPC is a highly durable and secure material used for construction purposes. It is a blend of wood fiber wood flour and thermoplastics.")}
                        <br /> <br />
                        {t("The WPC boards are also prepared from inorganic fillers and plastic composites.")}
                        <br /> <br />
                        {t("Wood plastic composite is also used as a strong and high-end flooring option.")}
                    </span>
                </div>
                <div className=' md:w-1/2 w-full h-full md:flex md:flex-col hidden justify-center md:px-20 px-10 z-10'>
                    <h1 className=' text-[#71492C] md:text-4xl text-xl font-bold mb-6'>{t("Product Adventages")}</h1>
                    <span className=" h-0.5 bg-[#C3AB92] rounded-full max-w-md mb-6"></span>
                    <div className=' grid grid-cols-3 gap-6 items-center'>
                        <div className=' md:flex md:items-center md:space-x-1 space-x-0 md:space-y-0 space-y-1'>
                            <img src="/features/fireproof.png" alt="Güzel wpc - Features" />
                            <p className=' text-[#1E1915] font-light text-md md:text-base'>{t("Fireproof")}</p>
                        </div>
                        <div className='md:flex md:items-center md:space-x-1 space-x-0 md:space-y-0 space-y-1'>
                            <img src="/features/envirmental.png" alt="Güzel wpc - Features" />
                            <p className=' text-[#1E1915] font-light text-sm md:text-base'>{t("Environmental")}</p>
                        </div>
                        <div className='md:flex md:items-center md:space-x-1 space-x-0 md:space-y-0 space-y-1'>
                            <img src="/features/highIntensity.png" alt="Güzel wpc - Features" />
                            <p className=' text-[#1E1915] font-light text-sm md:text-base'>{t("High intensity")}</p>
                        </div>
                        <div className='md:flex md:items-center md:space-x-1 space-x-0 md:space-y-0 space-y-1'>
                            <img src="/features/Practical.png" alt="Güzel wpc - Features" />
                            <p className=' text-[#1E1915] font-light text-sm md:text-base'>{t("Practical")}</p>
                        </div>
                        <div className='md:flex md:items-center md:space-x-1 space-x-0 md:space-y-0 space-y-1'>
                            <img src="/features/pasteable.png" alt="Güzel wpc - Features" />
                            <p className=' text-[#1E1915] font-light text-sm md:text-base'>{t("Pasteable")}</p>
                        </div>
                        <div className='md:flex md:items-center md:space-x-1 space-x-0 md:space-y-0 space-y-1'>
                            <img src="/features/highQuality.png" alt="Güzel wpc - Features" />
                            <p className=' text-[#1E1915] font-light text-sm md:text-base'>{t("High Quality")}</p>
                        </div>
                        <div className='md:flex md:items-center md:space-x-1 space-x-0 md:space-y-0 space-y-1'>
                            <img src="/features/convenienty.png" alt="Güzel wpc - Features" />
                            <p className=' text-[#1E1915] font-light text-sm md:text-base'>{t("Convenient")}</p>
                        </div>
                        <div className='md:flex md:items-center md:space-x-1 space-x-0 md:space-y-0 space-y-1'>
                            <img src="/features/casual.png" alt="Güzel wpc - Features" />
                            <p className=' text-[#1E1915] font-light text-sm md:text-base'>{t("Casual")}</p>
                        </div>
                        <div className='md:flex md:items-center md:space-x-1 space-x-0 md:space-y-0 space-y-1'>
                            <img src="/features/earthquakeResist.png" alt="Güzel wpc - Features" />
                            <p className=' text-[#1E1915] font-light text-sm md:text-base'>{t("Earthquake Resistant")}</p>
                        </div>
                        <div className='md:flex md:items-center md:space-x-1 space-x-0 md:space-y-0 space-y-1'>
                            <img src="/features/soundproof.png" alt="Güzel wpc - Features" />
                            <p className=' text-[#1E1915] font-light text-sm md:text-base'>{t("Soundproof")}</p>
                        </div>
                        <div className='md:flex md:items-center md:space-x-1 space-x-0 md:space-y-0 space-y-1'>
                            <img src="/features/efficient.png" alt="Güzel wpc - Features" />
                            <p className=' text-[#1E1915] font-light text-sm md:text-base'>{t("Efficient")}</p>
                        </div>
                        <div className='md:flex md:items-center md:space-x-1 space-x-0 md:space-y-0 space-y-1'>
                            <img src="/features/moistureproof.png" alt="Güzel wpc - Features" />
                            <p className=' text-[#1E1915] font-light text-sm md:text-base'>{t("Moistureproof insulation")}</p>
                        </div>
                    </div>
                </div>
                <div className=' w-full h-full md:hidden block justify-center px-10 z-10'>
                    <h1 className=' text-[#71492C] md:text-4xl text-xl font-bold mb-6'>{t("Product Adventages")}</h1>
                    <span className=" h-0.5 bg-[#C3AB92] rounded-full max-w-md mb-6"></span>
                    <div className=' grid grid-cols-3 gap-6 items-center'>
                        <div className='flex flex-col items-center space-x-0 space-y-1'>
                            <img src="/features/fireproof.png" alt="Güzel wpc - Features" />
                            <p className=' text-[#1E1915] font-light text-sm text-center'>{t("Fireproof")}</p>
                        </div>
                        <div className='flex flex-col items-center space-x-0 space-y-1'>
                            <img src="/features/envirmental.png" alt="Güzel wpc - Features" />
                            <p className=' text-[#1E1915] font-light text-sm text-center'>{t("Environmental")}</p>
                        </div>
                        <div className='flex flex-col items-center space-x-0 space-y-1'>
                            <img src="/features/highIntensity.png" alt="Güzel wpc - Features" />
                            <p className=' text-[#1E1915] font-light text-sm text-center'>{t("High intensity")}</p>
                        </div>
                        <div className='flex flex-col items-center space-x-0 space-y-1'>
                            <img src="/features/Practical.png" alt="Güzel wpc - Features" />
                            <p className=' text-[#1E1915] font-light text-sm text-center'>{t("Practical")}</p>
                        </div>
                        <div className='flex flex-col items-center space-x-0 space-y-1'>
                            <img src="/features/pasteable.png" alt="Güzel wpc - Features" />
                            <p className=' text-[#1E1915] font-light text-sm text-center'>{t("Pasteable")}</p>
                        </div>
                        <div className='flex flex-col items-center space-x-0 space-y-1'>
                            <img src="/features/highQuality.png" alt="Güzel wpc - Features" />
                            <p className=' text-[#1E1915] font-light text-sm text-center'>{t("High Quality")}</p>
                        </div>
                        <div className='flex flex-col items-center space-x-0 space-y-1'>
                            <img src="/features/convenienty.png" alt="Güzel wpc - Features" />
                            <p className=' text-[#1E1915] font-light text-sm text-center'>{t("Convenient")}</p>
                        </div>
                        <div className='flex flex-col items-center space-x-0 space-y-1'>
                            <img src="/features/casual.png" alt="Güzel wpc - Features" />
                            <p className=' text-[#1E1915] font-light text-sm text-center'>{t("Casual")}</p>
                        </div>
                        <div className='flex flex-col items-center space-x-0 space-y-1'>
                            <img src="/features/earthquakeResist.png" alt="Güzel wpc - Features" />
                            <p className=' text-[#1E1915] font-light text-sm text-center'>{t("Earthquake Resistant")}</p>
                        </div>
                        <div className='flex flex-col items-center space-x-0 space-y-1'>
                            <img src="/features/soundproof.png" alt="Güzel wpc - Features" />
                            <p className=' text-[#1E1915] font-light text-sm text-center'>{t("Soundproof")}</p>
                        </div>
                        <div className='flex flex-col items-center space-x-0 space-y-1'>
                            <img src="/features/efficient.png" alt="Güzel wpc - Features" />
                            <p className=' text-[#1E1915] font-light text-sm text-center'>{t("Efficient")}</p>
                        </div>
                        <div className='flex flex-col items-center space-x-0 space-y-1'>
                            <img src="/features/moistureproof.png" alt="Güzel wpc - Features" />
                            <p className=' text-[#1E1915] font-light text-sm text-center'>{t("Moistureproof insulation")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default WpcIndustry