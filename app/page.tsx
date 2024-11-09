import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40rem] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.png"
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

        <div className="relative z-10 flex h-full w-full items-center justify-start px-6 py-32 text-white lg:w-2/3 lg:pl-24">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold leading-tight sm:text-5xl xl:text-6xl">
              Construction Solutions for Everyone
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed sm:text-xl">
              Discover innovative construction solutions tailored for every
              need. With expertise in project planning, infrastructure
              management, and general contracting, we bring your vision to life
              with precision.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="btn-primary mt-8">Learn more</button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics & Services Section */}
      <section className="relative bg-white pb-10 sm:pb-16 md:pb-24">
        <div className="container mx-auto flex flex-wrap items-stretch justify-center gap-6 px-6 lg:justify-between lg:px-0">
          <div className="flex-1 bg-blue-900 p-10 text-center text-white">
            <h2 className="text-5xl font-bold">145</h2>
            <p className="mt-2 text-lg">Completed Projects</p>
          </div>
          <div className="flex-1 bg-black p-10 text-center text-white">
            <h2 className="text-5xl font-bold">25+</h2>
            <p className="mt-2 text-lg">Years of Experience</p>
          </div>
          <div className="relative flex w-full max-w-lg flex-col border-t-8 border-blue-900 bg-white p-8 py-6 shadow-md lg:-mt-40 lg:max-w-[400px] lg:px-10">
            <h3 className="text-2xl font-semibold">
              We Construct and Manage Places and Infrastructures
            </h3>
            <div className="mt-8 space-y-3 lg:mt-4">
              <Service
                iconSrc="/icons/general-contract-icon.png"
                title="General Contract"
                description="Quisque condimentum erat ac orci blandit, in sollicitudin tellus vestibulum."
              />
              <Service
                iconSrc="/icons/project-planning-icon.png"
                title="Project Planning"
                description="Quisque condimentum erat ac orci blandit, in sollicitudin tellus vestibulum."
              />
              <Service
                iconSrc="/icons/infrastructure-management-icon.png"
                title="Infrastructure Management"
                description="Quisque condimentum erat ac orci blandit, in sollicitudin tellus vestibulum."
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="bg-white py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-y-10 md:grid-cols-2 md:gap-x-20">
            <div>
              <p className="text-center text-sm font-semibold text-gray-700 md:text-left md:text-base">
                About Us
              </p>
              <h2 className="text-center text-3xl font-bold leading-tight text-black sm:text-4xl md:text-left lg:text-5xl">
                Grow business with Celebration.
              </h2>
              <p className="mt-4 text-center text-base leading-relaxed text-gray-600 md:text-left">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <div className="mt-6 flex justify-center md:justify-start">
                <button className="btn-primary">Learn more</button>
              </div>
            </div>
            <div className="flex justify-center pr-12 sm:pr-0 md:justify-end">
              <div className="relative mb-12 max-w-xs">
                <img
                  className="rounded-md object-bottom"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/4/man-eating-noodles.jpg"
                  alt=""
                />
                <img
                  className="absolute -bottom-12 -right-12 origin-bottom-right scale-75 rounded-md"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/4/smiling-businessman.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section with Background Images and Content */}
      <section className="bg-white py-10 sm:py-16 lg:py-24">
        <div className="">
          <div className="grid h-full grid-cols-1 gap-5 md:grid-cols-5 md:gap-0">
            {/* Background Image for Large Screens */}
            <div
              className="col-span-2 hidden h-[500px] bg-[url('/images/professional-architect-woman-standing-outdoors-NDAEJH5.jpg')] bg-cover bg-center md:block"
              aria-hidden="true"
            ></div>

            {/* Research & Analysis Section */}
            {[
              {
                title: "Research & Analysis",
                description:
                  "Explore in-depth studies and innovative solutions tailored for your projects.",
                bgImage:
                  "/images/industrial-landscape-building-crane-against-the-bl-8T3EXGK.png",
              },
              {
                title: "Industry Development",
                description:
                  "Stay ahead with the latest trends and developments in the construction industry.",
                bgImage:
                  "/images/industrial-landscape-building-crane-against-the-bl-8T3EXGK.png",
              },
              {
                title: "Production Launch",
                description:
                  "Get ready for a seamless launch with our comprehensive production strategies.",
                bgImage:
                  "/images/industrial-landscape-building-crane-against-the-bl-8T3EXGK.png",
              },
            ].map((section, index) => (
              <div
                key={index}
                className="group relative h-[300px] w-full bg-cover p-8 sm:h-[400px] md:h-full"
                style={{ backgroundImage: `url(${section.bgImage})` }}
              >
                <div className="absolute inset-0 bg-blue-700/50 transition duration-300 group-hover:bg-black/70"></div>
                <div className="relative z-10 flex h-full flex-col justify-between text-white">
                  <div>
                    <h3 className="text-3xl font-semibold">{section.title}</h3>
                    <p className="mt-4">{section.description}</p>
                  </div>
                  <button
                    className="btn-primary mt-8 self-end"
                    aria-label={`Learn more about ${section.title}`}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold md:text-base">
            Our Works
          </p>
          <h2 className="text-center text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Our Special Projects
          </h2>
          <div className="py-5">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {/* First Column */}
              <div>
                <div className="group relative h-64 w-full bg-[url('/images/industrial-landscape-building-crane-against-the-bl-8T3EXGK.png')] bg-cover bg-center p-4 sm:h-80 md:h-96">
                  <div className="absolute inset-0 transition duration-300 group-hover:bg-blue-700/50"></div>
                  <div className="relative z-10 hidden h-full items-center justify-center text-center text-white group-hover:flex">
                    <div>
                      <h3 className="text-lg font-semibold sm:text-xl">
                        Commercial
                      </h3>
                      <p className="mt-2 sm:mt-4">Benoit Architecture</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="group relative h-64 w-full bg-[url('/images/industrial-landscape-building-crane-against-the-bl-8T3EXGK.png')] bg-cover bg-center p-4 sm:h-80 md:h-96">
                  <div className="absolute inset-0 transition duration-300 group-hover:bg-blue-700/50"></div>
                  <div className="relative z-10 hidden h-full items-center justify-center text-center text-white group-hover:flex">
                    <div>
                      <h3 className="text-lg font-semibold sm:text-xl">
                        Commercial
                      </h3>
                      <p className="mt-2 sm:mt-4">Benoit Architecture</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Column */}
              <div>
                <div className="group relative h-64 w-full bg-[url('/images/round-building-CGY4TZ5.png')] bg-cover p-4 sm:h-80 md:h-96">
                  <div className="absolute inset-0 transition duration-300 group-hover:bg-blue-700/50"></div>
                  <div className="relative z-10 hidden h-full items-center justify-center text-center text-white group-hover:flex">
                    <div>
                      <h3 className="text-lg font-semibold sm:text-xl">
                        Commercial
                      </h3>
                      <p className="mt-2 sm:mt-4">Benoit Architecture</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="group relative h-64 w-full bg-[url('/images/xrdes-PHgbWpst8UA-unsplash.png')] bg-cover p-4 sm:h-80 md:h-96">
                  <div className="absolute inset-0 transition duration-300 group-hover:bg-blue-700/50"></div>
                  <div className="relative z-10 hidden h-full items-center justify-center text-center text-white group-hover:flex">
                    <div>
                      <h3 className="text-lg font-semibold sm:text-xl">
                        Commercial
                      </h3>
                      <p className="mt-2 sm:mt-4">Benoit Architecture</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="group relative h-64 w-full bg-[url('/images/office-building-P6EY7D6.png')] bg-cover p-4 sm:h-80 md:h-96">
                  <div className="absolute inset-0 transition duration-300 group-hover:bg-blue-700/50"></div>
                  <div className="relative z-10 hidden h-full items-center justify-center text-center text-white group-hover:flex">
                    <div>
                      <h3 className="text-lg font-semibold sm:text-xl">
                        Commercial
                      </h3>
                      <p className="mt-2 sm:mt-4">Benoit Architecture</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="group relative h-64 w-full bg-[url('/images/scott-webb-kAJE-3_4zHE-unsplash.png')] bg-cover p-4 sm:h-80 md:h-96">
                  <div className="absolute inset-0 transition duration-300 group-hover:bg-blue-700/50"></div>
                  <div className="relative z-10 hidden h-full items-center justify-center text-center text-white group-hover:flex">
                    <div>
                      <h3 className="text-lg font-semibold sm:text-xl">
                        Commercial
                      </h3>
                      <p className="mt-2 sm:mt-4">Benoit Architecture</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div>
          {" "}
          <img src="/images/Screenshot.png" alt="" className="flex-1" />
        </div>
        <div className="container mx-auto flex max-w-4xl px-6 lg:px-0">
          <div className="relative flex max-w-[400px] flex-col border-t-8 border-blue-900 bg-white p-8 py-6 shadow-md lg:-mt-20 lg:px-14">
            <p>Company Address</p>
            <h3 className="text-2xl font-semibold">
              We Construct and Manage Places and Infrastructures
            </h3>
          </div>
          <div className="p-5">
            <p className="text-center font-semibold">Company Phones</p>

            <div className="mt-2 flex items-center gap-2">
              <div>
                <div className="bg-blue-600 p-3 text-white">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-phone"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="">+ 1 234 5678 098</p>
                <p className="">+ 1 234 5678 098</p>
              </div>
            </div>
          </div>
          <div className="p-5">
            <p className="text-center font-semibold"> Emails </p>

            <div className="mt-2 flex items-center gap-2">
              <div>
                <div className="bg-black p-3 text-white">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-phone"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="">dustro@gmail.com </p>
                <p className="">dustro.info@gmail.com </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-blue-600 md:text-base">
            Testimonials
          </p>
          <h2 className="text-center text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Our Clients Say
          </h2>
          <div className="grid grid-cols-1 items-center gap-x-12 gap-y-8 py-10 md:grid-cols-2 lg:items-stretch xl:gap-x-20">
            {/* Testimonial Image */}
            <div className="relative">
              <div className="aspect-w-2 aspect-h-3">
                <img
                  className="h-full w-full rounded-lg border-8 border-white object-cover shadow-lg"
                  src="/images/colleagues-brainstorming-in-the-office-A4RGGUX.png"
                  alt="Testimonial"
                />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="flex flex-col space-y-4 md:py-5">
              <blockquote className="text-lg leading-relaxed text-gray-800">
                <p>
                  "You made it so simple. My new site is so much faster and
                  easier to work with than my old site. I just choose the page,
                  make the change and click save. No need to think twice before
                  making it."
                </p>
              </blockquote>
              <div className="mt-6 lg:mt-auto">
                <p className="text-xl font-semibold text-black">Jenny Wilson</p>
                <p className="text-base text-gray-500">Co-founder, Appson</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-center">
          <img
            src="/images/Mask.png"
            alt="Description of the image"
            className="h-60 w-full content-center rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  );
}

interface IService {
  iconSrc: string;
  title: string;
  description: string;
}
// Reusable Service Component
function Service({ iconSrc, title, description }: IService) {
  return (
    <div className="flex items-start space-x-4">
      <Image src={iconSrc} width={24} height={24} alt={`${title} icon`} />
      <div>
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
