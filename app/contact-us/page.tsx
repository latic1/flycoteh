import Image from "next/image";
import React from "react";

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
            Contact
          </h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <form action="#" method="POST" className="mt-4">
            <div className="grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2">
              {["Full name", "E - Mail", "Phone Number", "Select Service"].map(
                (placeholder) => (
                  <input
                    key={placeholder}
                    type="text"
                    placeholder={placeholder}
                    className="mt-2.5 w-full rounded-md border border-gray-200 px-4 py-2 text-black placeholder-gray-500 focus:border-blue-600"
                  />
                ),
              )}
              <textarea
                rows={3}
                className="col-span-full mt-2.5 w-full resize-y rounded-md border border-gray-200 px-4 py-4 text-black placeholder-gray-500 focus:border-blue-600"
                placeholder="Your message"
              ></textarea>
              <button
                type="submit"
                className="mt-8 w-full rounded bg-black px-8 py-3 text-lg font-semibold text-white transition hover:bg-white hover:text-black focus:ring focus:ring-offset-2"
              >
                Submit Message{" "}
              </button>
            </div>
          </form>

          {/* Google Map */}
          <div className="mt-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127066.75857679047!2d-0.17972944999999999!3d5.5912087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra!5e0!3m2!1sen!2sgh!4v1731180067657!5m2!1sen!2sgh"
              width="100%"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="mt-10 flex flex-col gap-5 md:flex-row md:gap-10">
            <div className="border-l-8 border-blue-900 bg-white p-8 py-6 shadow-md lg:px-10">
              <p>Company Address</p>
              <h3 className="text-2xl font-semibold">
                Themeforest, Envato HQ 24 Fifth st., Los Angeles, USA
              </h3>
            </div>

            <div className="flex gap-4 bg-white p-5 shadow-md">
              <div className="bg-black p-5 text-3xl font-black text-white">
                <img
                  src="/icons/ic--outline-local-phone.svg"
                  alt="Phone Icon"
                />
              </div>
              <div>
                <p className="font-bold text-blue-600">Company Phones</p>
                <p>Etiam ac leo at quam aliquet</p>
                <p>Etiam ac leo at quam aliquet</p>
              </div>
            </div>

            <div className="flex gap-4 bg-white p-5 shadow-md">
              <div className="bg-black p-5 text-3xl font-black text-white">
                <img src="/icons/uiw--message.svg" alt="Message Icon" />
              </div>
              <div>
                <p className="font-bold text-blue-600">Dustro Emails</p>
                <p>Etiam ac leo at quam aliquet</p>
                <p>Etiam ac leo at quam aliquet</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
