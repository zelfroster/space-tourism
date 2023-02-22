import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main
      className="max-w-7xl mx-auto px-20 mt-24 flex flex-col justify-between items-center gap-40 lg:flex-row lg:mt-48 lg:items-end"
    >
      <section className='flex flex-col gap-6 text-center w-min animate-fade lg:text-left'>
        <h3
          className="text-lg font-barlow-condensed text-acColor tracking-[0.2em] lg:text-2xl"
        >
          SO, YOU WANT TO TRAVEL TO
        </h3>
        <h1 className="text-[9.5rem] leading-none font-bellefair lg:-ml-3 lg:text-9xl">SPACE</h1>
        <p className="text-md text-acColor leading-7 lg:mt-4 lg:leading-6">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of the world
          experience.
        </p>
      </section>
      <Link
        to="/destination"
        className="w-64 h-64 text-4xl font-bellefair bg-fgColor \
                   text-bgColor flex justify-center items-center rounded-full \
                   after:absolute after:w-0 after:h-0 after:bg-fgColor/10 \
                   after:rounded-full hover:after:w-96 hover:after:h-96 \
                   after:duration-300 ease-in-out lg:mr-8"
      >
        EXPLORE
      </Link>
    </main>
  )
}

export default Home
