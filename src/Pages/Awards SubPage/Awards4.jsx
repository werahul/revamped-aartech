import React, {useEffect} from 'react'
import { Navbar, Footer } from '../../Components'
import { BigThumb4 } from '../../assets/mediaAwards'


const Awards4 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Navbar />
            <div className=" 2xl:px-[120px] lg:py-20 lg:px-20  pt-20 px-5 py-10 lg:mt-0 mt-5 sm:px-10">
                <div className="  lg:mt-20 text-black lg:text-[40px] text-[20px] font-Barlow font-bold lg:leading-[52px] leading-6">
                AIC – Aartech, proudly backed by A NITI AAYOG, Government of India, serves as an Atal Incubation Centre (AIC). 
                
                </div>
                <div className="w-full h-auto  mt-6">
                    <img src={BigThumb4} alt="" className='w-full' />
                </div>
                <div class="text-black lg:text-xl text-base  lg:font-normal font-medium font-Barlow leading-relaxed mt-8">This dynamic hub is buzzing with innovation, and we're eager to collaborate with you in shaping the future of cutting-edge, innovation-led enterprises. Let's co-create success together!</div>
               
            </div>
            <Footer />
        </>
    )
}

export default Awards4