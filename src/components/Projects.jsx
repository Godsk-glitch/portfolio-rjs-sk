import React,{useEffect} from 'react'
import Meme from '../assets/projects/Meme.png'
import Weather from '../assets/projects/weather.png'
import Soon from '../assets/projects/soon.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {
  useEffect(()=> {
    AOS.init({duration: 1000})
})

  const Projects = () => [
    {
      id: 1,
      src: Weather,
      desc: "Weather App is built on Javascript and Api Of Weather which shows weather in real time...",
      demo: "https://weatherapp900.netlify.app//",
      code: "https://github.com/Godsk-glitch/weather-app"
    },
    {
      id: 2,
      src: Meme,
      desc: "Meme App is built on Javascript and Api Of Meme which shows Meme in real time...",
      demo: "https://godsk-glitch.github.io/Meme-Generator-DarkMode/",
      code: "https://github.com/Godsk-glitch/Meme-Generator-DarkMode"
    },
    {
      id: 3,
      src: Soon,
      desc: "This project is under development.",
      demo: "",
      code: ""
    },
    {
      id: 4,
      src: Soon,
      desc: "This project is under development.",
      demo: "",
      code: ""
    },
    {
      id: 5,
      src: Soon,
      desc: "This project is under development.",
      demo: "",
      code: ""
    },
    {
      id: 6,
      src: Soon,
      desc: "This project is under development.",
      demo: "",
      code: ""
    },
  ]


  return (
    <div name="projects" className='h-auto max-h-screen-lg  bg-gradient-to-b from-black to-gray-800 w-full text-white
     md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <h2 className='text-4xl font-bold inline border-b-4 border-gray-400'>Projects</h2>
          <p className='py-6'>Check out Some of my Projects </p>
        </div>
        <div   className='grid sm:grid-cols-2 md:grid-cols-3 mb-20 gap-8 px-12 sm:px-0'>
          {
            Projects().map(({ id, src, desc, demo, code }) => (

              <div data-aos="fade-in" data-aos-duration="500" key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="Ai" className='rounded-md duration-200 hover:scale-105' />
                <p className='p-2 text-justify font-extralight'>{desc}</p>
                <div className='flex items-center justify-center'>
                  
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-gray-700 to-blue-900 rounded-md'>
                    <a href={demo} target='_blank' rel="noopener noreferrer">Demo</a>
                  </button>
                  <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-purple-900 to-gray-700 rounded-md'>
                    <a href={code} target='_blank' rel="noopener noreferrer">Code</a>
                  </button>
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects