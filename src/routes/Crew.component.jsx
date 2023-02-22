import { useState } from 'react'
import { Link } from 'react-router-dom'
import { crew } from '../data/data.json'

const Crew = () => {
  const [itemName, setItemName] = useState('Douglas Hurley')
  return (
    <main
      className="max-w-7xl mx-auto flex justify-between px-20 mt-10 items-end lg:mt-20"
    >
      <section className='w-full flex flex-col gap-10 lg:gap-16'>
        <h1
          className="text-xl font-barlow-condensed tracking-[0.2em] uppercase lg:text-2xl"
        >
          <span className="text-gray-500 font-bold -ml-6 mr-6 lg:ml-0">02</span>
          <span>Meet your crew</span>
        </h1>
        {
          crew
            .filter(crewItem => crewItem.name === itemName)
            .map(crewItem =>
              <div key={crewItem.name} className="uppercase flex justify-between gap-6 min-h-[22vh] lg:min-h-[45vh]" >
                <div className="flex flex-col justify-between items-center w-full lg:items-start">
                  <div className="flex flex-col animate-fade text-center lg:text-start">
                    <p className="text-fgColor/50 font-bellefair text-2xl lg:text-3xl">{crewItem.role}</p>
                    <p className="text-fgColor font-bellefair text-4xl mt-2 mb-4 lg:mb-8 lg:mt-4 lg:text-5xl">{crewItem.name}</p>
                    <p className="text-acColor font-barlow text-md max-w-md normal-case lg:max-w-sm">{crewItem.bio}</p>
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
                            relative w-4 aspect-square rounded-full uppercase
                            duration-300 hover:bg-fgColor/50
                            `
                          }
                          onClick={() => setItemName(item.name)}
                        >
                        </Link>
                      ))
                    }
                  </div>
                </div>
                <img className="max-h-[550px] max-w-[500px] absolute bottom-0 right-1/2 translate-x-1/2 animate-fade lg:right-48 lg:translate-x-0"
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
