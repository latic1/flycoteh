import Image from "next/image";

const page = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[20rem] w-full overflow-hidden sm:h-[30rem] lg:h-[40rem]">
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

        <div className="relative z-10 flex h-full items-center px-6 py-16 text-white sm:py-32 lg:w-2/3 lg:pl-24">
          <h1 className="text-3xl font-bold leading-tight sm:text-5xl xl:text-6xl">
            About Us
          </h1>
        </div>
      </section>

      {/* Statistics & Services Section */}
      <section className="relative hidden bg-white pb-10 sm:block sm:pb-16 md:block lg:pb-24">
        <div className="container mx-auto flex max-w-4xl justify-end">
          <div className="border-t-8 border-blue-900 bg-white p-8 py-6 shadow-md lg:-mt-16 lg:px-10">
            <p>Call Us Today</p>
            <h3 className="text-2xl font-semibold">+233 303 966 546</h3>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-white py-10 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-y-10 md:grid-cols-2 md:gap-x-10">
            <div className="flex justify-end">
              <div className="relative">
                <img
                  className="h-full w-full rounded-md object-cover"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/4/man-eating-noodles.jpg"
                  alt="Man eating noodles"
                />
              </div>
            </div>
            <div>
              <p className="mb-4 text-center text-sm font-semibold md:text-left md:text-base">
                About Us
              </p>
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Your trusted partner in quality and affordable real estate in
                Ghana.
              </h2>
              <div className="mt-4">
                <p className="text-base leading-relaxed">
                  Flycotec Company Limited is a leading real estate company in
                  Ghana, with over a decade of experience providing top-notch
                  services to clients. Registered under the Companies Act of
                  1963, we specialize in Architectural Services, Land Surveying,
                  Building Materials, Sale of Land, and Construction & Property
                  Management. Our mission is to deliver quality, affordable
                  housing in serene, well-planned communities.
                </p>
                <p className="mt-5 text-base leading-relaxed">
                  Our commitment to customer satisfaction is at the core of
                  everything we do. Through a collaborative approach and a focus
                  on economical solutions, we provide our clients with
                  impressive, high-quality communities where they can thrive.
                  Our clients include prominent organizations and individuals
                  across Ghana, including staff from U.S. Peace Corps, SSNIT,
                  Electricity Company of Ghana, and TV3.
                </p>
              </div>

              <button className="btn-primary mt-8">Get Started Today</button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative h-[40rem] w-full overflow-hidden sm:h-[45rem] lg:h-[50rem]">
        <div className="absolute inset-0">
          <Image
            src="/images/Rectangle29.png"
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

        <div className="relative z-10 flex h-full items-center justify-center py-16 text-center text-white sm:py-32">
          <div className="w-full">
            <p className="mb-4 text-lg">Request a Quote</p>
            <h1 className="text-2xl font-bold leading-tight sm:text-3xl xl:text-5xl">
              Build Your Vision with Flycotec
            </h1>
            <p className="mx-auto mt-6 max-w-2xl leading-relaxed">
              From groundbreaking designs to enduring infrastructure, we bring
              your dreams to life with expertise and commitment. Let’s create a
              legacy that stands the test of time.
            </p>

            <div className="flex justify-center">
              <button className="btn-primary mt-8"> Get Started Today</button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlights Section */}
      <section className="relative pb-10 sm:block sm:pb-16 md:block lg:pb-24">
        <div className="container mx-auto flex max-w-4xl flex-col gap-5 px-6 md:flex-row lg:px-0">
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex gap-4 bg-white p-5 shadow-md">
              <div className="bg-black p-5 text-3xl font-black text-white">
                <p>0{num}</p>
              </div>
              <div>
                <p className="font-bold text-blue-600">Kind Consultation</p>
                <p>Etiam ac leo at quam aliquet</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="font-bold">Appointment</p>
          <div className="grid md:grid-cols-2 md:gap-x-10">
            <div>
              <h4 className="text-2xl font-extrabold text-blue-700">
                Request a Quote
              </h4>
              <form action="#" method="POST" className="mt-4">
                <div className="grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2">
                  {[
                    "Full name",
                    "E - Mail",
                    "Phone Number",
                    "Select Service",
                  ].map((placeholder) => (
                    <input
                      key={placeholder}
                      type="text"
                      placeholder={placeholder}
                      className="mt-2.5 w-full rounded-md border border-gray-200 px-4 py-2 text-black placeholder-gray-500 focus:border-blue-600"
                    />
                  ))}
                  <textarea
                    rows={3}
                    className="col-span-full mt-2.5 w-full resize-y rounded-md border border-gray-200 px-4 py-4 text-black placeholder-gray-500 focus:border-blue-600"
                    placeholder="Your message"
                  ></textarea>
                  <button
                    type="submit"
                    className="mt-8 w-full rounded bg-black px-8 py-3 text-lg font-semibold text-white transition hover:bg-white hover:text-black focus:ring focus:ring-offset-2"
                  >
                    Appointment
                  </button>
                </div>
              </form>
            </div>
            <div className="mt-4 space-y-8">
              {[4, 5, 6].map((num) => (
                <div key={num} className="flex items-center gap-4">
                  <Image
                    width={100}
                    height={100}
                    alt=""
                    src={`/images/Vector${num}.svg`}
                  />
                  <div>
                    <p className="font-bold">High Quality Build</p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
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
