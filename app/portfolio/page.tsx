import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className=" overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[20rem] w-full overflow-hidden sm:h-[30rem] md:h-[40rem]">
        <div className="absolute inset-0">
          <Image
            src="/images/Rectangle.png"
            alt="Background image"
            layout="fill"
            objectFit="cover"
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 bg-black/60"
            aria-hidden="true"
          ></div>
        </div>

        <div className="relative z-10 flex h-full w-full items-center justify-center px-6 py-20 text-white sm:justify-start sm:px-8 md:px-12 lg:w-2/3 lg:pl-24">
          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl xl:text-6xl">
              Portfolio Archive
            </h1>
          </div>
        </div>
      </section>
      
      {/* Statistics & Services Section */}
      <section className="relative bg-white pb-10 sm:pb-16 md:block lg:pb-24">
        <div className="container mx-auto flex w-full max-w-4xl justify-center sm:justify-end">
          <div className="border-t-8 border-blue-900 bg-white p-6 py-4 text-center shadow-md sm:p-8 md:-mt-16 lg:px-10">
            <p>Call Us Today</p>
            <h3 className="text-xl font-semibold sm:text-2xl">+233 303 966 546</h3>
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section className="py-8 sm:py-10 md:py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold md:text-base">Our Works</p>
          <h2 className="text-center text-2xl font-bold leading-tight text-black sm:text-3xl lg:text-4xl">
            Our Special Projects
          </h2>
          
          <div className="py-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(9)].map((_, index) => (
                <div key={index}>
                  <div className="group relative h-64 w-full bg-[url('/images/industrial-landscape-building-crane-against-the-bl-8T3EXGK.png')] bg-cover p-4 sm:h-80 md:h-96">
                    <div className="absolute inset-0 transition duration-300 group-hover:bg-blue-700/50"></div>
                    <div className="relative z-10 hidden h-full items-center justify-center text-center text-white group-hover:flex">
                      <div>
                        <h3 className="text-lg font-semibold sm:text-xl">Commercial</h3>
                        <p className="mt-2 sm:mt-4">Benoit Architecture</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
