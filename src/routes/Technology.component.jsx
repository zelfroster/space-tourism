import { useState } from 'react'
import { Link } from 'react-router-dom'
import { technology } from '../data/data.json'

const Technology = () => {
  const [itemName, setItemName] = useState('Launch vehicle')
  return (
    <main
      className="max-w-7xl mx-auto flex justify-between mt-10 items-end lg:mt-20 lg:px-20 2xl:max-w-[1680px] 2xl:mt-28"
    >
      <section className="w-full flex flex-col gap-6 md:gap-16 2xl:gap-28">
        <h1
          className="text-md font-barlow-condensed tracking-[0.2em] uppercase text-center md:text-start md:text-xl lg:text-2xl 2xl:text-4xl"
        >
          <span className="text-gray-500 font-bold mr-6 md:-ml-6 lg:ml-0">03</span>
          <span>Space launch 101</span>
        </h1>
        {
          technology
            .filter(crewItem => crewItem.name === itemName)
            .map(crewItem =>
              <div
                key={crewItem.name}
                className="uppercase flex flex-col-reverse justify-between gap-10 min-h-[45vh] lg:gap-6 lg:flex-row"
              >
                <div className="flex flex-col gap-6 justify-between items-center md:gap-10 lg:gap-20 lg:items-start lg:flex-row">
                  <div
                    className="flex flex-row gap-4 font-barlow-condensed tracking-widest text-acColor lg:gap-8 lg:flex-col 2xl:gap-12"
                  >
                    {
                      technology.map(item => (
                        <Link
                          to={`#${item.name.toLowerCase()}`}
                          key={item.name}
                          className={`
                            ${item.name === itemName
                              ? "bg-fgColor text-bgColor border-fgColor"
                              : "text-fgColor border-fgColor/30"
                            } 
                            relative flex justify-center items-center w-10 h-10
                            rounded-full uppercase font-bellefair text-lg 
                            border duration-300 hover:border-fgColor md:text-2xl 
                            md:w-16 md:h-16 2xl:w-24 2xl:h-24 2xl:text-4xl`
                          }
                          onClick={() => setItemName(item.name)}
                        >
                          {item.id}
                        </Link>
                      ))
                    }
                  </div>
                  <div className="flex flex-col animate-fade items-center text-center lg:items-start lg:text-start">
                    <p className="text-acColor font-barlow-condensed text-sm tracking-[0.15em] md:tracking-[0.2rem] 2xl:text-xl">
                      The Terminology...
                    </p>
                    <p className="text-fgColor font-bellefair text-2xl mt-2 mb-4 md:mb-8 md:mt-2 md:text-5xl 2xl:text-7xl 2xl:mt-4">
                      {crewItem.name}
                    </p>
                    <p className="text-acColor font-barlow text-sm max-w-xs normal-case leading-6 md:max-w-md md:leading-7 md:text-md lg:text-[16px] 2xl:leading-10 2xl:text-2xl 2xl:max-w-xl">
                      {crewItem.description}
                    </p>
                  </div>
                </div>
                <img
                  className="max-w-[400px] animate-fade absolute bottom-32 right-0 hidden lg:block 2xl:max-w-xl"
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
