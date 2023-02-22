import { Link } from 'react-router-dom'

const DestinationItem = ({ destination, destinations, itemName, setItemName }) => {
  return (
    <div className="flex flex-col justify-between items-center gap-10 lg:pr-12 lg:flex-row" id={destination.name.toLowerCase()}>
      <img className="max-w-[300px] animate-fade lg:ml-12 lg:max-w-sm" src={destination.images.png} alt="moon image" />
      <div className="flex flex-col w-full items-center text-center lg:text-left lg:w-auto lg:items-start">
        <div
          className="flex gap-8 font-barlow-condensed tracking-widest text-acColor mb-8 lg:mb-0 lg:-translate-y-10 lg:gap-4"
        >
          {
            destinations.map(item => (
              <Link
                to={`#${item.name.toLowerCase()}`}
                key={item.name}
                className={
                  `${item.name === itemName ? "text-white" : ""} relative \
                    uppercase text-lg hover:text-white`
                }
                onClick={() => setItemName(item.name)}
              >
                <div
                  className={`${item.name === itemName ? "after:w-full after:bg-fgColor" : "after:w-0 after:bg-fgColor/40"} after:absolute after:h-[2px] after:-bottom-1 after:left-0 after:duration-300 hover:after:w-full`}
                >
                </div>
                {item.name}
              </Link>
            ))
          }
        </div>
        <h1 className="text-8xl font-bellefair -ml-2 uppercase animate-fade">{destination.name}</h1>
        <p className="text-md text-acColor mt-4 max-w-xl animate-fade lg:max-w-sm">
          {destination.description}
        </p>
        <p className="w-full h-[1px] bg-acColor/20 mt-12 animate-fade"></p>
        <div className="flex justify-evenly w-full uppercase mt-6 animate-fade lg:justify-between">
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
