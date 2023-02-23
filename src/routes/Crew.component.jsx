import { useState } from 'react'
import { Link } from 'react-router-dom'
import { crew } from '../data/data.json'

const Crew = () => {
  const [itemName, setItemName] = useState('Douglas Hurley')
  return (
    <main
      className="max-w-7xl mx-auto flex justify-between px-6 mt-10 md:px-20 items-end lg:mt-20"
    >
      <section className='w-full flex flex-col gap-10 lg:gap-16'>
        <h1
          className="text-md font-barlow-condensed tracking-[0.2em] uppercase text-center md:text-start md:text-xl lg:text-2xl"
        >
          <span className="text-gray-500 font-bold mr-6 md:-ml-6 lg:ml-0">02</span>
          <span>Meet your crew</span>
        </h1>
        {
          crew
            .filter(crewItem => crewItem.name === itemName)
            .map(crewItem =>
              <div key={crewItem.name} className="uppercase flex flex-col-reverse justify-between gap-6 min-h-[24vh] md:min-h-[22vh] lg:min-h-[45vh]" >
                <div className="flex flex-col-reverse justify-between items-center w-full min-h-[26vh] md:min-h-[45vh] md:flex-col lg:items-start">
                  <div className="flex flex-col animate-fade text-center lg:text-start">
                    <p className="text-fgColor/50 font-bellefair text-lg md:text-2xl lg:text-3xl">{crewItem.role}</p>
                    <p className="text-fgColor font-bellefair text-2xl mt-1 mb-3 md:mt-2 md:mb-4 md:text-4xl lg:mb-8 lg:mt-4 lg:text-5xl">{crewItem.name}</p>
                    <p className="text-acColor font-barlow text-sm max-w-md normal-case md:text-md lg:max-w-sm">{crewItem.bio}</p>
                  </div>
                  <div
                    className="flex gap-4 font-barlow-condensed tracking-widest text-acColor"
                  >
                    {
                      crew.map(item => (
                        <Link
                          to={`#${item.name.toLowerCase()}`}
                          key={item.name}
                          className={
                            `
                            ${item.name === itemName
                              ? "text-white bg-fgColor"
                              : "bg-fgColor/20"
                            } 
                            relative w-3 aspect-square rounded-full uppercase
                            duration-300 hover:bg-fgColor/50 md:w-4
                            `
                          }
                          onClick={() => setItemName(item.name)}
                        >
                        </Link>
                      ))
                    }
                  </div>
                </div>
                <div className="relative min-h-[300px] min-w-[250px] w-full md:hidden">
                  <p className="w-full h-px bg-acColor/10 absolute -bottom-px"></p>
                  <img className="max-h-[300px] max-w-[250px] absolute bottom-0 right-1/2 translate-x-1/2 lg:right-48 lg:translate-x-0"
                    src={crewItem.images.png}
                    alt="crew member image"
                  />
                </div>
                <img className="hidden max-h-[550px] max-w-[500px] absolute bottom-0 right-1/2 translate-x-1/2 md:block lg:right-48 lg:translate-x-0"
                  src={crewItem.images.png}
                  alt="crew member image"
                />
              </div>
            )
        }
      </section>
    </main >
  )
}

export default Crew
