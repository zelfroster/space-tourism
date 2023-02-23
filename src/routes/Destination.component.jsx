import { useState } from 'react'
import { destinations } from '../data/data.json'
import DestinationItem from '../components/DestinationItem.component'

const Destination = () => {
  const [itemName, setItemName] = useState('Moon')
  return (
    <main
      className="max-w-7xl mx-auto flex justify-between px-10 mt-10 items-end md:px-20 lg:mt-20"
    >
      <section className='w-full flex flex-col gap-12 md:gap-16'>
        <h1
          className="text-md font-barlow-condensed tracking-[0.2em] uppercase text-center md:text-start md:text-xl lg:text-2xl"
        >
          <span className="text-gray-500 font-bold mr-6 md:-ml-6 lg:ml-0">01</span>
          <span>Pick your destination</span>
        </h1>
        {
          destinations
            .filter(item => item.name === itemName)
            .map(item =>
              <DestinationItem
                key={item.name}
                destination={item}
                destinations={destinations}
                itemName={itemName}
                setItemName={setItemName}
              />
            )
        }
      </section>
    </main >
  )
}

export default Destination
