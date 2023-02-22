import { useState } from 'react'
import { Link } from 'react-router-dom'
import { technology } from '../data/data.json'

const Technology = () => {
  const [itemName, setItemName] = useState('Launch vehicle')
  return (
    <main className="max-w-7xl mx-auto flex justify-between mt-10 items-end lg:mt-20 lg:px-20">
      <section className='w-full flex flex-col gap-16'>
        <h1
          className="w-max px-20 text-xl font-barlow-condensed tracking-[0.2em] uppercase lg:px-0 lg:text-2xl"
        >
          <span className="text-gray-500 font-bold -ml-6 mr-6 lg:ml-0">03</span>Space launch 101
        </h1>
        {
          technology
            .filter(crewItem => crewItem.name === itemName)
            .map(crewItem =>
              <div
                key={crewItem.name}
                className="uppercase flex flex-col-reverse justify-between gap-10 min-h-[45vh] lg:gap-6 lg:flex-row"
              >
                <div className="flex flex-col gap-10 justify-between items-center lg:gap-20 lg:items-start lg:flex-row">
                  <div
                    className="flex flex-row gap-4 font-barlow-condensed tracking-widest text-acColor lg:flex-col"
                  >
                    {
                      technology.map(item => (
                        <Link
                          to={`#${item.name.toLowerCase()}`}
                          key={item.name}
                          className={
                            `
                            ${item.name === itemName
                              ? "bg-fgColor text-bgColor border-fgColor"
                              : "text-fgColor border-fgColor/30"
                            } 
                            relative flex justify-center items-center w-16 h-16
                            rounded-full uppercase font-bellefair text-2xl 
                            border duration-300 hover:border-fgColor
                            `
                          }
                          onClick={() => setItemName(item.name)}
                        >
                          {item.id}
                        </Link>
                      ))
                    }
                  </div>
                  <div className="flex flex-col animate-fade items-center text-center lg:items-start lg:text-start">
                    <p className="text-acColor font-barlow-condensed text-sm tracking-[0.2rem]">The Terminology...</p>
                    <p className="text-fgColor font-bellefair text-5xl mt-4 mb-8">{crewItem.name}</p>
                    <p className="text-acColor font-barlow text-md max-w-md normal-case leading-7">{crewItem.description}</p>
                  </div>
                </div>
                <img
                  className="max-w-[400px] animate-fade absolute bottom-32 right-0 hidden lg:block"
                  src={crewItem.images.portrait} alt="crew member image"
                />
                <img
                  className="w-screen lg:hidden"
                  src={crewItem.images.landscape} alt="crew member image"
                />
              </div>
            )
        }
      </section>
    </main >
  )
}

export default Technology
