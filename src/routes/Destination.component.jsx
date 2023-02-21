import { useState } from 'react'
import { Link } from 'react-router-dom'
import DestinationItem from '../components/DestinationItem.component'
import { destinations } from '../data/data.json'

const Destination = () => {
  const [itemName, setItemName] = useState('Moon')
  return (
    <main
      className="max-w-7xl mx-auto flex justify-between px-20 mt-20 items-end"
    >
      <section className='w-full flex flex-col gap-16'>
        <div className="flex items-center justify-between">
          <h1
            className="text-2xl font-barlow-condensed tracking-[0.2em]"
          >
            <span className="text-gray-500 font-bold mr-6">01</span>PICK YOUR DESTINATION
          </h1>
          <div
            className="flex gap-4 my-4 pr-12 font-barlow-condensed tracking-widest text-acColor"
          >
            {
              destinations.map(item => (
                <Link
                  to={`#${item.name.toLowerCase()}`}
                  key={item.name}
                  className={
                    `${item.name === itemName ? "text-white" : ""} relative \
                    uppercase hover:text-white`
                  }
                  onClick={() => setItemName(item.name)}
                >
                  <div
                    className={
                      `${item.name === itemName
                        ? "after:w-full after:bg-fgColor"
                        : "after:w-0 after:bg-fgColor/40"
                      } after:absolute hover:after:w-full after:h-[2px] \
                      after:-bottom-1 after:left-0 after:duration-300`
                    }
                  >
                  </div>
                  {item.name}
                </Link>
              ))
            }
          </div>
        </div>
        {
          destinations
            .filter(item => item.name === itemName)
            .map(item =>
              <DestinationItem key={item.name} destination={item} />
            )
        }
      </section>
    </main >
  )
}

export default Destination
