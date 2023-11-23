import React from "react";

function Contacts() {
  return (
    <div
      id="contacts"
      className="h-screen flex items-center justify-center bg-gray-50 px-80 py-40"
    >
      <div className="container">
        <h1 className="uppercase text-4xl font-semibold leading-10 text-secondary text-center pb-20">
          Contact me
        </h1>
        <div className="rounded-md shadow-2xl overflow-hidden bg-white">
          <div className="p-8">
            <form>
              <div className="pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-12 sm:grid-cols-6">
                  <div className="lg:col-span-6 sm:col-span-3">
                    <div className="mt-2">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        autoComplete="name"
                        className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-6 sm:col-span-3">
                    <div className="mt-2">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-12 sm:col-span-6">
                    <div className="mt-2">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        autoComplete="subject"
                        className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-12 sm:col-span-6">
                    <div className="mt-2">
                      <textarea
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Message"
                        className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="items-center justify-center lg:col-span-12 sm:col-span-6 mx-auto">
                    <button className="text-center text-white text-lg bg-secondary p-2 transition-colors duration-150 focus:shadow-outline hover:bg-blue-800 rounded-md uppercase">Submit</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
