import axios from 'axios'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const ContactUs = () => {

    const { t } = useTranslation()

    const [Email, setEmail] = useState("")
    const [FullName, setFullName] = useState("")
    const [PhoneNumber, setPhoneNumber] = useState("")
    const [Message, setMessage] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("/api/sendMail", {
            body: JSON.stringify({
                email: Email,
                fullname: FullName,
                phoneNumber: PhoneNumber,
                message: Message,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });

        const { error } = await res.json();
        if (error) {
            alert("error")
            return;
        } else {
            alert("done")
            setFullName("")
            setEmail("")
            setPhoneNumber("")
            setMessage("")
        }
    };
    return (
        <div className=' md:h-screen md:py-0 py-10 h-max w-full md:flex block space-y-6 md:space-y-0 bg-[#C3AB92]' id='contact-us' >
            {/* <img src="/contactBg.png" alt="" className=' absolute h-full object-cover w-full z-0' /> */}
            <div className=' md:flex block items-center w-full z-10 justify-center md:space-x-5'>
                <div className='block md:flex md:flex-col md:w-5/12 md:p-10 md:pl-32 p-5 space-y-6'>
                    <p className=' text-[#714A2D] text-4xl font-semibold '>{t("You have Questions?")}</p>
                    <span className=" h-0.5 bg-[#EFE8DD] rounded-full w-10/12"></span>
                    {/* <p className=' text-[#EFE8DD] w-10/12 '>{t("In our products we have several different types ...")}</p> */}
                    <div className=' flex items-center space-x-4 md:pt-6 pt-0'>
                        <div className='p-2 border-2 rounded-full'>
                            <img src="/location.png" alt="Güzel wpc - contact us" className=' w-fit h-fit' />
                        </div>
                        <p className='text-[#EFE8DD]'>El eulma, Setif, Algeria</p>
                    </div>
                    <div className=' flex items-center space-x-4'>
                        <div className='p-2 border-2 rounded-full'>
                            <img src="/phone.png" alt="Güzel wpc - contact us" className=' w-fit h-fit' />
                        </div>
                        <div className=' flex flex-col' >
                            <p className=' text-[#EFE8DD] '>+213553448984 (Phone / WhatsApp)</p>
                            {/* <a href='tel:+213770196954' className=' text-[#EFE8DD] '>+213770196954 (Phone / WhatsApp)</a> */}
                        </div>
                    </div>
                    <div className=' flex items-center space-x-4 md:pb-10 mb-0'>
                        <div className='p-2 border-2 rounded-full'>
                            <img src="/mailbox.png" alt="Güzel wpc - contact us" className=' w-fit h-fit' />
                        </div>
                        <p className=' text-[#EFE8DD] '>contact@larjmetal.com</p>
                    </div>
                    <p className=' text-[#714A2D] text-4xl font-semibold '>{t("Our social media")}</p>
                    <div className=' flex space-x-6'>
                        <div className='p-3 border-2 rounded-full'>
                            <img src="/facebook.png" alt="Güzel wpc - contact us" className=' w-fit h-fit' />
                        </div>
                        <div className='p-3 border-2 rounded-full'>
                            <img src="/instagram.png" alt="Güzel wpc - contact us" className=' w-fit h-fit' />
                        </div>
                        <div className='p-3 border-2 rounded-full'>
                            <img src="/tiktok.png" alt="Güzel wpc - contact us" className=' w-fit h-fit' />
                        </div>
                    </div>
                </div>
                <div className='md:w-5/12 flex flex-col md:bg-white md:p-20 p-10 space-y-4'>
                    <p className=' text-[#714A2D] text-4xl font-semibold '>Contact us</p>
                    <span className=" h-0.5 bg-[#C3AB92] rounded-full w-10/12"></span>
                    <p className=' font-light'>{t("Please contact us if you would like any further information.")}</p>
                    <div className=' flex flex-col space-y-4'>
                        <input type="text" placeholder={t('Full Name*')} onChange={(e) => { setFullName(e.target.value) }} className='max-h-[56px] min-h-[50px] h-10 p-2 bg-[#EFE8DD] border-[#714A2D] border border-b-2 font-light text-[#714A2D] focus:ring-0  ' />
                        <input type="email" placeholder={t('Email*')} onChange={(e) => { setEmail(e.target.value) }} className='max-h-[56px] min-h-[50px] h-10 p-2 bg-[#EFE8DD] border-[#714A2D] border border-b-2 font-light text-[#714A2D] focus:ring-0  ' />
                        <input type="text" placeholder={t('Phone Number')} onChange={(e) => { setPhoneNumber(e.target.value) }} className='max-h-[56px] min-h-[50px] h-10 p-2 bg-[#EFE8DD] border-[#714A2D] border border-b-2 font-light text-[#714A2D] focus:ring-0  ' />
                        <textarea type="text" placeholder={t('Write your message...')} onChange={(e) => { setMessage(e.target.value) }} className=' min-h-[144px] p-2 bg-[#EFE8DD] border-[#714A2D] border border-b-2 font-light text-[#714A2D] focus:ring-0  ' />
                        <div className=' flex items-center space-x-4'>
                            <input type="checkbox" className=' w-5 h-5 accent-[#714A2D]' />
                            <p className=' text-black'>{t("I agree to all terms and conditions of Larj Metal.")}</p>
                        </div>
                        <button type='submit' onClick={handleSubmit} className=' w-full max-h-[56px] min-h-[50px] bg-[#714A2D] font-light text-[#EFE8DD] '>
                            {t("Send")}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs