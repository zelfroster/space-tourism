import { useState } from 'react'
import { Link } from 'react-router-dom'
import { technology } from '../data/data.json'

const Technology = () => {
  const [itemName, setItemName] = useState('Launch vehicle')
  return (
    <main className="max-w-7xl mx-auto flex justify-between px-20 mt-20 items-end">
      <section className='w-full flex flex-col gap-16'>
        <h1
          className="w-max text-2xl font-barlow-condensed tracking-[0.2em] uppercase"
        >
          <span className="text-gray-500 font-bold mr-6">03</span>Space launch 101
        </h1>
        {
          technology
            .filter(crewItem => crewItem.name === itemName)
            .map(crewItem =>
              <div
                key={crewItem.name}
                className="uppercase flex justify-between gap-6 min-h-[45vh]"
              >
                <div className="flex flex-row-reverse gap-20 justify-between">
                  <div className="flex flex-col animate-fade">
                    <p className="text-acColor font-barlow-condensed text-sm tracking-[0.2rem]">The Terminology...</p>
                    <p className="text-fgColor font-bellefair text-5xl mt-4 mb-8">{crewItem.name}</p>
                    <p className="text-acColor font-barlow text-md max-w-sm normal-case leading-7">{crewItem.description}</p>
                  </div>
                  <div
                    className="flex flex-col gap-4 font-barlow-condensed tracking-widest text-acColor"
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
                </div>
                <img
                  className="max-w-[400px] animate-fade absolute bottom-32 right-0"
                  src={crewItem.images.portrait} alt="crew member image"
                />
              </div>
            )
        }
      </section>
    </main >
  )
}

export default Technology
