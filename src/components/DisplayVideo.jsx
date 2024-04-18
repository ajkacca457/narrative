import React from 'react'

const DisplayVideo = () => {
  return (
    <div className='w-3/6 mx-auto'>
        <iframe className='w-full aspect-video' src="https://www.youtube.com/embed/mZ5hnNRBFsc?si=kxF37tb8Nm-BoeNI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default DisplayVideo