import { useState } from 'react'
import { destinations } from '../data/data.json'
import DestinationItem from '../components/DestinationItem.component'

const Destination = () => {
  const [itemName, setItemName] = useState('Moon')
  return (
    <main
      className="max-w-7xl mx-auto flex justify-between px-20 mt-10 items-end lg:mt-20"
    >
      <section className='w-full flex flex-col gap-16'>
        <div className="flex items-center justify-between">
          <h1
            className="text-xl font-barlow-condensed tracking-[0.2em] uppercase lg:text-2xl"
          >
            <span className="text-gray-500 font-bold -ml-6 mr-6 lg:ml-0">01</span>
            <span>Pick your destination</span>
          </h1>
        </div>
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
