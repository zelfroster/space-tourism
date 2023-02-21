import { useState } from 'react'
import { Link } from 'react-router-dom'
import { crew } from '../data/data.json'

const Crew = () => {
  const [itemName, setItemName] = useState('Douglas Hurley')
  return (
    <main
      className="max-w-7xl mx-auto flex justify-between px-20 mt-20 items-end"
    >
      <section className='w-full flex flex-col gap-16'>
        <h1
          className="w-max text-2xl font-barlow-condensed tracking-[0.2em] uppercase"
        >
          <span className="text-gray-500 font-bold mr-6">02</span>Meet your crew
        </h1>
        {
          crew
            .filter(crewItem => crewItem.name === itemName)
            .map(crewItem =>
              <div key={crewItem.name} className="uppercase flex justify-between gap-6 min-h-[45vh]" >
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col animate-fade">
                    <p className="text-fgColor/50 font-bellefair text-3xl">{crewItem.role}</p>
                    <p className="text-fgColor font-bellefair text-5xl mt-4 mb-8">{crewItem.name}</p>
                    <p className="text-acColor font-barlow text-md max-w-sm normal-case">{crewItem.bio}</p>
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
                <img className="max-h-[600px] max-w-[500px] animate-fade absolute bottom-0 right-48" src={crewItem.images.png} alt="crew member image" />
              </div>
            )
        }
      </section>
    </main >
  )
}

export default Crew
