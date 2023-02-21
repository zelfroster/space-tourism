import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main
      className="max-w-7xl mx-auto flex justify-between px-20 mt-48 items-end"
    >
      <section className='flex flex-col gap-6 w-min'>
        <h3
          className="text-2xl font-barlow-condensed text-acColor tracking-[0.2em]"
        >
          SO, YOU WANT TO TRAVEL TO
        </h3>
        <h1 className="text-9xl font-bellefair -ml-3">SPACE</h1>
        <p className="text-md text-acColor mt-4">
          Let's face it; if you want to go to space, you might as well go to
          outer space and not hover kind of on the edge of it. Well sit back,
          and relax because we'll give you a truly out of the world experience.
        </p>
      </section>
      <Link
        to="/destination"
        className="w-64 h-64 mr-8 text-4xl font-bellefair bg-fgColor \
                   text-bgColor flex justify-center items-center rounded-full \
                   after:absolute after:w-0 after:h-0 after:bg-fgColor/10 \
                   after:rounded-full hover:after:w-96 hover:after:h-96 \
                   after:duration-300 ease-in-out"
      >
        EXPLORE
      </Link>
    </main>
  )
}

export default Home
