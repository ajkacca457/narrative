import React from 'react'

const ProjectData = [
    {
        title: 'Project 1',
        image: '/project1.jpg'
    },

    {
        title: 'Project 2',
        image: '/project1.jpg'
    },

    {
        title: 'Project 3',
        image: '/project1.jpg'
    },

    {
        title: 'Project 4',
        image: '/project1.jpg'
    }
    
]



const ProjectDisplay = () => {
  return (
    <div className='bg-black'>

        <div className='max-w-[90rem] w-[90%] mx-auto py-[10vh]'>
            <div className='grid grid-cols-2 gap-10'>
                {ProjectData.map((project, index) => (
                    <div key={index} className='col-span-1 group'>
                        <img src={project.image} alt='project' className='w-full group-hover:scale-95 transition-all duration-300 ease-out' />
                        <h4 className='text-white text-2xl mt-4'>{project.title}</h4>
                    </div>
                ))} 
            </div>
        </div>
    </div>
  )
}

export default ProjectDisplay