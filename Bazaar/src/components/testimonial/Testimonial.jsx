import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import TestomonialContent from './componentTest/TestomonialContent';


function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <section className=''>
                <div className=" container mx-auto px-5 py-10">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{ color: mode === 'dark' ? 'white' : '' }}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{ color: mode === 'dark' ? 'white' : '' }}>What our <span className=' text-blue-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            {<TestomonialContent image={'https://webknudocs.vercel.app/logo/react.png'} Content={"Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."}  Name={'Ashwini Yadav'} title={"Web developer"} mode={mode}/>}
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            {<TestomonialContent image={'https://webknudocs.vercel.app/logo/react.png'} Content={"Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."}  Name={'Ashwini Yadav'} title={"Web developer"} mode={mode}/>}
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            {<TestomonialContent image={'https://webknudocs.vercel.app/logo/react.png'} Content={"Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."}  Name={'Ashwini Yadav'} title={"Web developer"} mode={mode}/>}
                        </div>

                        
                    
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial