import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main
      className="max-w-7xl mx-auto px-10 pb-10 mt-16 flex flex-col justify-between 
                 items-center gap-16 md:px-20 md:gap-40 md:mt-24 lg:flex-row 
                 lg:mt-48 lg:items-end 2xl:max-w-[1680px] 2xl:mt-64"
    >
      <section
        className="w-max flex flex-col items-center gap-6 text-center 
                   animate-fade lg:items-start lg:text-left 2xl:gap-10"
      >
        <h3
          className="text-lg font-barlow-condensed text-acColor tracking-[0.1em]
                     lg:text-2xl 2xl:text-4xl"
        >
          SO, YOU WANT TO TRAVEL TO
        </h3>
        <h1
          className="text-8xl leading-none font-bellefair md:text-[9.5rem] 
                     lg:-ml-3 lg:text-9xl 2xl:text-[180px]"
        >
          SPACE
        </h1>
        <p
          className="max-w-xs text-md text-acColor leading-7 md:max-w-lg lg:mt-4
                     lg:leading-6 lg:max-w-sm 2xl:text-2xl 2xl:max-w-xl"
        >
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of the world
          experience!
        </p>
      </section>
      <Link
        to="/destination"
        className="w-44 h-44 text-2xl font-bellefair bg-fgColor text-bgColor 
                   flex justify-center items-center rounded-full after:absolute
                   after:w-0 after:h-0 after:bg-fgColor/10 after:rounded-full 
                   hover:after:w-96 hover:after:h-96 after:duration-300 
                   ease-in-out md:w-64 md:h-64 md:text-4xl lg:mr-8 2xl:w-[350px]
                   2xl:h-[350px] 2xl:text-[40px] hover:2xl:after:w-[520px] 
                   hover:2xl:after:h-[520px] 2xl:tracking-widest"
      >
        EXPLORE
      </Link>
    </main>
  );
};

export default Home;
