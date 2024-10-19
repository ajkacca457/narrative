import React from 'react'

const About = () => {
    return (
        <div className='bg-black'>
            <div className='max-w-[90rem] w-[90%] mx-auto py-[50vh] mt-[-30vh]'>

                <div className='grid grid-cols-4'>
                    <h1 className='text-8xl text-white col-span-3'>From illustration to
                        animation, scripting to
                        sound design, we love
                        ‍all things motion.</h1>
                </div>

                <div className='grid grid-cols-3 mt-10'>
                    <div className='col-span-1 col-start-3'>
                        <p className='text-white mt-10 text-2xl mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc non aliquet ultricies, libero
                            metus ultricies mi, auctor ultricies erat ligula nec ex. Sed euismod, nunc non aliquet ultricies, libero
                            met
                        </p>
                        <a href='#' className='text-white text-xl underline'>Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About