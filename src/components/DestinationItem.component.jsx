import { Link } from 'react-router-dom'

const DestinationItem = ({ destination, destinations, itemName, setItemName }) => {
  return (
    <div className="flex flex-col justify-between items-center gap-6 md:gap-10 lg:pr-12 lg:flex-row" id={destination.name.toLowerCase()}>
      <img
        className="max-w-[180px] animate-fade md:max-w-[300px] lg:ml-12 lg:max-w-sm 2xl:max-w-2xl"
        src={destination.images.png}
        alt="celestial body image"
      />
      <div className="flex flex-col w-full items-center text-center lg:text-left lg:w-auto lg:items-start">
        <div
          className="flex gap-6 font-barlow-condensed tracking-widest text-acColor mb-8 md:gap-8 lg:mb-0 lg:-translate-y-10 lg:gap-4 2xl:gap-10"
        >
          {
            destinations.map(item => (
              <Link
                to={`#${item.name.toLowerCase()}`}
                key={item.name}
                className={
                  `${item.name === itemName ? "text-white" : ""} relative \
                  uppercase text-sm md:text-lg hover:text-white 2xl:text-2xl`
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
        <h1 className="text-6xl font-bellefair -ml-2 uppercase animate-fade md:text-8xl 2xl:text-[130px]">
          {destination.name}
        </h1>
        <p className="text-sm text-acColor mt-4 max-w-xl animate-fade md:text-md lg:max-w-sm lg:text-[16px] lg:leading-7 2xl:text-2xl 2xl:max-w-xl 2xl:leading-10">
          {destination.description}
        </p>
        <p className="w-full h-[1px] bg-acColor/20 mt-8 animate-fade md:mt-12"></p>
        <div className="flex justify-evenly w-full text-xs uppercase mt-4 animate-fade md:mt-6 lg:justify-between 2xl:text-lg">
          <div className="flex flex-col gap-2">
            <p className="tracking-widest text-acColor font-barlow-condensed">
              Avg. Distance
            </p>
            <p className="text-2xl font-bellefair 2xl:text-4xl">{destination.distance}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="tracking-widest text-acColor font-barlow-condensed">
              Est. travel time
            </p>
            <p className="text-2xl font-bellefair 2xl:text-4xl">{destination.travel}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DestinationItem
