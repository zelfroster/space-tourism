import React from 'react'

const DestinationItem = ({ destination }) => {
  return (
    <div className="flex justify-between items-center pr-12 animate-fade" id={destination.name.toLowerCase()}>
      <img className="max-w-sm ml-12" src={destination.images.png} alt="moon image" />
      <div className="flex flex-col">
        <h1 className="text-8xl font-bellefair -ml-3 uppercase">{destination.name}</h1>
        <p className="text-md text-acColor mt-4 max-w-sm">
          {destination.description}
        </p>
        <p className="w-full h-[1px] bg-acColor/20 mt-12"></p>
        <div className="flex justify-between uppercase mt-6">
          <div className="flex flex-col gap-2">
            <p className="text-xs tracking-widest text-acColor font-barlow-condensed">Avg. Distance</p>
            <p className="text-2xl font-bellefair">{destination.distance}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs tracking-widest text-acColor font-barlow-condensed">Est. travel time</p>
            <p className="text-2xl font-bellefair">{destination.travel}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DestinationItem
