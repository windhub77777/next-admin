"use client";

const Home = () => {
  return (
    <>
      <main className="relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl">
        {/* <!-- Navbar --> */}
        <div className="w-full px-6 py-6 mx-auto">
          {/* <!-- row 1 --> */}
          <div className="flex flex-wrap -mx-3">
            {/* <!-- card1 --> */}
            <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
              <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                <div className="flex-auto p-4">
                  <div className="flex flex-row -mx-3">
                    <div className="flex-none w-2/3 max-w-full px-3">
                      <div>
                        <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">
                          Today's Money
                        </p>
                        <h5 className="mb-2 font-bold dark:text-white">
                          $53,000
                        </h5>
                        <p className="mb-0 dark:text-white dark:opacity-60">
                          <span className="text-sm font-bold leading-normal text-emerald-500">
                            +55%
                          </span>
                          since yesterday
                        </p>
                      </div>
                    </div>
                    <div className="px-3 text-right basis-1/3">
                      <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-blue-500 to-violet-500">
                        <i className="ni leading-none ni-money-coins text-lg relative top-3.5 text-white"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- card2 --> */}
            <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
              <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                <div className="flex-auto p-4">
                  <div className="flex flex-row -mx-3">
                    <div className="flex-none w-2/3 max-w-full px-3">
                      <div>
                        <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">
                          Today's Users
                        </p>
                        <h5 className="mb-2 font-bold dark:text-white">
                          2,300
                        </h5>
                        <p className="mb-0 dark:text-white dark:opacity-60">
                          <span className="text-sm font-bold leading-normal text-emerald-500">
                            +3%
                          </span>
                          since last week
                        </p>
                      </div>
                    </div>
                    <div className="px-3 text-right basis-1/3">
                      <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-red-600 to-orange-600">
                        <i className="ni leading-none ni-world text-lg relative top-3.5 text-white"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- card3 --> */}
            <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
              <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                <div className="flex-auto p-4">
                  <div className="flex flex-row -mx-3">
                    <div className="flex-none w-2/3 max-w-full px-3">
                      <div>
                        <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">
                          New Clients
                        </p>
                        <h5 className="mb-2 font-bold dark:text-white">
                          +3,462
                        </h5>
                        <p className="mb-0 dark:text-white dark:opacity-60">
                          <span className="text-sm font-bold leading-normal text-red-600">
                            -2%
                          </span>
                          since last quarter
                        </p>
                      </div>
                    </div>
                    <div className="px-3 text-right basis-1/3">
                      <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-emerald-500 to-teal-400">
                        <i className="ni leading-none ni-paper-diploma text-lg relative top-3.5 text-white"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- card4 --> */}
            <div className="w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:w-1/4">
              <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                <div className="flex-auto p-4">
                  <div className="flex flex-row -mx-3">
                    <div className="flex-none w-2/3 max-w-full px-3">
                      <div>
                        <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">
                          Sales
                        </p>
                        <h5 className="mb-2 font-bold dark:text-white">
                          $103,430
                        </h5>
                        <p className="mb-0 dark:text-white dark:opacity-60">
                          <span className="text-sm font-bold leading-normal text-emerald-500">
                            +5%
                          </span>
                          than last month
                        </p>
                      </div>
                    </div>
                    <div className="px-3 text-right basis-1/3">
                      <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-orange-500 to-yellow-500">
                        <i className="ni leading-none ni-cart text-lg relative top-3.5 text-white"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- cards row 2 --> */}
          <div className="flex flex-wrap mt-6 -mx-3">
            <div className="w-full max-w-full px-3 mt-0 lg:w-7/12 lg:flex-none">
              <div className="border-black/12.5 dark:bg-slate-850 dark:shadow-dark-xl shadow-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid p-6 pt-4 pb-0">
                  <h6 className="capitalize dark:text-white">Sales overview</h6>
                  <p className="mb-0 text-sm leading-normal dark:text-white dark:opacity-60">
                    <i className="fa fa-arrow-up text-emerald-500"></i>
                    <span className="font-semibold">4% more</span> in 2021
                  </p>
                </div>
                <div className="flex-auto p-4">
                  <div>
                    <canvas id="chart-line" height="300"></canvas>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full max-w-full px-3 lg:w-5/12 lg:flex-none">
              <div className="relative w-full h-full overflow-hidden rounded-2xl">
                {/* <!-- slide 1 --> */}
                <div className="absolute w-full h-full transition-all duration-500">
                  <img
                    className="object-cover h-full"
                    src="./assets/img/carousel-1.jpg"
                    alt="carousel image"
                  />
                  <div className="block text-start ml-12 left-0 bottom-0 absolute right-[15%] pt-5 pb-5 text-white">
                    <div className="inline-block w-8 h-8 mb-4 text-center text-black bg-white bg-center rounded-lg fill-current stroke-none">
                      <i className="top-0.75 text-xxs relative text-slate-700 ni ni-camera-compact"></i>
                    </div>
                    <h5 className="mb-1 text-white">Get started with Argon</h5>
                    <p className="dark:opacity-80">
                      There’s nothing I really wanted to do in life that I
                      wasn’t able to get good at.
                    </p>
                  </div>
                </div>

                {/* <!-- slide 2 --> */}
                <div className="absolute w-full h-full transition-all duration-500">
                  <img
                    className="object-cover h-full"
                    src="./assets/img/carousel-2.jpg"
                    alt="carousel image"
                  />
                  <div className="block text-start ml-12 left-0 bottom-0 absolute right-[15%] pt-5 pb-5 text-white">
                    <div className="inline-block w-8 h-8 mb-4 text-center text-black bg-white bg-center rounded-lg fill-current stroke-none">
                      <i className="top-0.75 text-xxs relative text-slate-700 ni ni-bulb-61"></i>
                    </div>
                    <h5 className="mb-1 text-white">
                      Faster way to create web pages
                    </h5>
                    <p className="dark:opacity-80">
                      That’s my skill. I’m not really specifically talented at
                      anything except for the ability to learn.
                    </p>
                  </div>
                </div>

                {/* <!-- slide 3 --> */}
                <div className="absolute w-full h-full transition-all duration-500">
                  <img
                    className="object-cover h-full"
                    src="./assets/img/carousel-3.jpg"
                    alt="carousel image"
                  />
                  <div className="block text-start ml-12 left-0 bottom-0 absolute right-[15%] pt-5 pb-5 text-white">
                    <div className="inline-block w-8 h-8 mb-4 text-center text-black bg-white bg-center rounded-lg fill-current stroke-none">
                      <i className="top-0.75 text-xxs relative text-slate-700 ni ni-trophy"></i>
                    </div>
                    <h5 className="mb-1 text-white">
                      Share with us your design tips!
                    </h5>
                    <p className="dark:opacity-80">
                      Don’t be afraid to be wrong because you can’t learn
                      anything from a compliment.
                    </p>
                  </div>
                </div>

                {/* <!-- Control buttons --> */}
                <button
                  btn-next
                  className="absolute z-10 w-10 h-10 p-2 text-lg text-white border-none opacity-50 cursor-pointer hover:opacity-100 far fa-chevron-right active:scale-110 top-6 right-4"
                ></button>
                <button
                  btn-prev
                  className="absolute z-10 w-10 h-10 p-2 text-lg text-white border-none opacity-50 cursor-pointer hover:opacity-100 far fa-chevron-left active:scale-110 top-6 right-16"
                ></button>
              </div>
            </div>
          </div>

          {/* <!-- cards row 3 --> */}

          <div className="flex flex-wrap mt-6 -mx-3">
            <div className="w-full max-w-full px-3 mt-0 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none">
              <div className="relative flex flex-col min-w-0 break-words bg-white border-0 border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl dark:bg-gray-950 border-black-125 rounded-2xl bg-clip-border">
                <div className="p-4 pb-0 mb-0 rounded-t-4">
                  <div className="flex justify-between">
                    <h6 className="mb-2 dark:text-white">Sales by Country</h6>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="items-center w-full mb-4 align-top border-collapse border-gray-200 dark:border-white/40">
                    <tbody>
                      <tr>
                        <td className="p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap dark:border-white/40">
                          <div className="flex items-center px-2 py-1">
                            <div>
                              <img
                                src="./assets/img/icons/flags/US.png"
                                alt="Country flag"
                              />
                            </div>
                            <div className="ml-6">
                              <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">
                                Country:
                              </p>
                              <h6 className="mb-0 text-sm leading-normal dark:text-white">
                                United States
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                          <div className="text-center">
                            <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">
                              Sales:
                            </p>
                            <h6 className="mb-0 text-sm leading-normal dark:text-white">
                              2500
                            </h6>
                          </div>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                          <div className="text-center">
                            <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">
                              Value:
                            </p>
                            <h6 className="mb-0 text-sm leading-normal dark:text-white">
                              $230,900
                            </h6>
                          </div>
                        </td>
                        <td className="p-2 text-sm leading-normal align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                          <div className="flex-1 text-center">
                            <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">
                              Bounce:
                            </p>
                            <h6 className="mb-0 text-sm leading-normal dark:text-white">
                              29.9%
                            </h6>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap dark:border-white/40">
                          <div className="flex items-center px-2 py-1">
                            <div>
                              <img
                                src="./assets/img/icons/flags/DE.png"
                                alt="Country flag"
                              />
                            </div>
                            <div className="ml-6">
                              <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">
                                Country:
                              </p>
                              <h6 className="mb-0 text-sm leading-normal dark:text-white">
                                Germany
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                          <div className="text-center">
                            <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">
                              Sales:
                            </p>
                            <h6 className="mb-0 text-sm leading-normal dark:text-white">
                              3.900
                            </h6>
                          </div>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                          <div className="text-center">
                            <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">
                              Value:
                            </p>
                            <h6 className="mb-0 text-sm leading-normal dark:text-white">
                              $440,000
                            </h6>
                          </div>
                        </td>
                        <td className="p-2 text-sm leading-normal align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                          <div className="flex-1 text-center">
                            <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">
                              Bounce:
                            </p>
                            <h6 className="mb-0 text-sm leading-normal dark:text-white">
                              40.22%
                            </h6>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap dark:border-white/40">
                          <div className="flex items-center px-2 py-1">
                            <div>
                              <img
                                src="./assets/img/icons/flags/GB.png"
                                alt="Country flag"
                              />
                            </div>
                            <div className="ml-6">
                              <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">
                                Country:
                              </p>
                              <h6 className="mb-0 text-sm leading-normal dark:text-white">
                                Great Britain
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                          <div className="text-center">
                            <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">
                              Sales:
                            </p>
                            <h6 className="mb-0 text-sm leading-normal dark:text-white">
                              1.400
                            </h6>
                          </div>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                          <div className="text-center">
                            <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">
                              Value:
                            </p>
                            <h6 className="mb-0 text-sm leading-normal dark:text-white">
                              $190,700
                            </h6>
                          </div>
                        </td>
                        <td className="p-2 text-sm leading-normal align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                          <div className="flex-1 text-center">
                            <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">
                              Bounce:
                            </p>
                            <h6 className="mb-0 text-sm leading-normal dark:text-white">
                              23.44%
                            </h6>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 align-middle bg-transparent border-0 w-3/10 whitespace-nowrap">
                          <div className="flex items-center px-2 py-1">
                            <div>
                              <img
                                src="./assets/img/icons/flags/BR.png"
                                alt="Country flag"
                              />
                            </div>
                            <div className="ml-6">
                              <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">
                                Country:
                              </p>
                              <h6 className="mb-0 text-sm leading-normal dark:text-white">
                                Brasil
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-0 whitespace-nowrap">
                          <div className="text-center">
                            <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">
                              Sales:
                            </p>
                            <h6 className="mb-0 text-sm leading-normal dark:text-white">
                              562
                            </h6>
                          </div>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-0 whitespace-nowrap">
                          <div className="text-center">
                            <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">
                              Value:
                            </p>
                            <h6 className="mb-0 text-sm leading-normal dark:text-white">
                              $143,960
                            </h6>
                          </div>
                        </td>
                        <td className="p-2 text-sm leading-normal align-middle bg-transparent border-0 whitespace-nowrap">
                          <div className="flex-1 text-center">
                            <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">
                              Bounce:
                            </p>
                            <h6 className="mb-0 text-sm leading-normal dark:text-white">
                              32.14%
                            </h6>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="w-full max-w-full px-3 mt-0 lg:w-5/12 lg:flex-none">
              <div className="border-black/12.5 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                <div className="p-4 pb-0 rounded-t-4">
                  <h6 className="mb-0 dark:text-white">Categories</h6>
                </div>
                <div className="flex-auto p-4">
                  <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                    <li className="relative flex justify-between py-2 pr-4 mb-2 border-0 rounded-t-lg rounded-xl text-inherit">
                      <div className="flex items-center">
                        <div className="inline-block w-8 h-8 mr-4 text-center text-black bg-center shadow-sm fill-current stroke-none bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 rounded-xl">
                          <i className="text-white ni ni-mobile-button relative top-0.75 text-xxs"></i>
                        </div>
                        <div className="flex flex-col">
                          <h6 className="mb-1 text-sm leading-normal text-slate-700 dark:text-white">
                            Devices
                          </h6>
                          <span className="text-xs leading-tight dark:text-white/80">
                            250 in stock,{" "}
                            <span className="font-semibold">346+ sold</span>
                          </span>
                        </div>
                      </div>
                      <div className="flex">
                        <button className="group ease-in leading-pro text-xs rounded-3.5xl p-1.2 h-6.5 w-6.5 mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all dark:text-white">
                          <i
                            className="ni ease-bounce text-2xs group-hover:translate-x-1.25 ni-bold-right transition-all duration-200"
                            aria-hidden="true"
                          ></i>
                        </button>
                      </div>
                    </li>
                    <li className="relative flex justify-between py-2 pr-4 mb-2 border-0 rounded-xl text-inherit">
                      <div className="flex items-center">
                        <div className="inline-block w-8 h-8 mr-4 text-center text-black bg-center shadow-sm fill-current stroke-none bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 rounded-xl">
                          <i className="text-white ni ni-tag relative top-0.75 text-xxs"></i>
                        </div>
                        <div className="flex flex-col">
                          <h6 className="mb-1 text-sm leading-normal text-slate-700 dark:text-white">
                            Tickets
                          </h6>
                          <span className="text-xs leading-tight dark:text-white/80">
                            123 closed,{" "}
                            <span className="font-semibold">15 open</span>
                          </span>
                        </div>
                      </div>
                      <div className="flex">
                        <button className="group ease-in leading-pro text-xs rounded-3.5xl p-1.2 h-6.5 w-6.5 mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all dark:text-white">
                          <i
                            className="ni ease-bounce text-2xs group-hover:translate-x-1.25 ni-bold-right transition-all duration-200"
                            aria-hidden="true"
                          ></i>
                        </button>
                      </div>
                    </li>
                    <li className="relative flex justify-between py-2 pr-4 mb-2 border-0 rounded-b-lg rounded-xl text-inherit">
                      <div className="flex items-center">
                        <div className="inline-block w-8 h-8 mr-4 text-center text-black bg-center shadow-sm fill-current stroke-none bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 rounded-xl">
                          <i className="text-white ni ni-box-2 relative top-0.75 text-xxs"></i>
                        </div>
                        <div className="flex flex-col">
                          <h6 className="mb-1 text-sm leading-normal text-slate-700 dark:text-white">
                            Error logs
                          </h6>
                          <span className="text-xs leading-tight dark:text-white/80">
                            1 is active,{" "}
                            <span className="font-semibold">40 closed</span>
                          </span>
                        </div>
                      </div>
                      <div className="flex">
                        <button className="group ease-in leading-pro text-xs rounded-3.5xl p-1.2 h-6.5 w-6.5 mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all dark:text-white">
                          <i
                            className="ni ease-bounce text-2xs group-hover:translate-x-1.25 ni-bold-right transition-all duration-200"
                            aria-hidden="true"
                          ></i>
                        </button>
                      </div>
                    </li>
                    <li className="relative flex justify-between py-2 pr-4 border-0 rounded-b-lg rounded-xl text-inherit">
                      <div className="flex items-center">
                        <div className="inline-block w-8 h-8 mr-4 text-center text-black bg-center shadow-sm fill-current stroke-none bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 rounded-xl">
                          <i className="text-white ni ni-satisfied relative top-0.75 text-xxs"></i>
                        </div>
                        <div className="flex flex-col">
                          <h6 className="mb-1 text-sm leading-normal text-slate-700 dark:text-white">
                            Happy users
                          </h6>
                          <span className="text-xs leading-tight dark:text-white/80">
                            <span className="font-semibold">+ 430 </span>
                          </span>
                        </div>
                      </div>
                      <div className="flex">
                        <button className="group ease-in leading-pro text-xs rounded-3.5xl p-1.2 h-6.5 w-6.5 mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all dark:text-white">
                          <i
                            className="ni ease-bounce text-2xs group-hover:translate-x-1.25 ni-bold-right transition-all duration-200"
                            aria-hidden="true"
                          ></i>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <footer className="pt-4">
            <div className="w-full px-6 mx-auto">
              <div className="flex flex-wrap items-center -mx-3 lg:justify-between">
                <div className="w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none">
                  <div className="text-sm leading-normal text-center text-slate-500 lg:text-left">
                    ©
                    <script>
                      document.write(new Date().getFullYear() + ",");
                    </script>
                    made with <i className="fa fa-heart"></i> by
                    <a
                      href="https://www.creative-tim.com"
                      className="font-semibold text-slate-700 dark:text-white"
                      target="_blank"
                    >
                      Creative Tim
                    </a>
                    for a better web.
                  </div>
                </div>
                <div className="w-full max-w-full px-3 mt-0 shrink-0 lg:w-1/2 lg:flex-none">
                  <ul className="flex flex-wrap justify-center pl-0 mb-0 list-none lg:justify-end">
                    <li className="nav-item">
                      <a
                        href="https://www.creative-tim.com"
                        className="block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-in-out text-slate-500"
                        target="_blank"
                      >
                        Creative Tim
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://www.creative-tim.com/presentation"
                        className="block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-in-out text-slate-500"
                        target="_blank"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://creative-tim.com/blog"
                        className="block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-in-out text-slate-500"
                        target="_blank"
                      >
                        Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://www.creative-tim.com/license"
                        className="block px-4 pt-0 pb-1 pr-0 text-sm font-normal transition-colors ease-in-out text-slate-500"
                        target="_blank"
                      >
                        License
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
      <div fixed-plugin>
        <a
          fixed-plugin-button
          className="fixed px-4 py-2 text-xl bg-white shadow-lg cursor-pointer bottom-8 right-8 z-990 rounded-circle text-slate-700"
        >
          <i className="py-2 pointer-events-none fa fa-cog"> </i>
        </a>
        <div
          fixed-plugin-card
          className="z-sticky backdrop-blur-2xl backdrop-saturate-200 dark:bg-slate-850/80 shadow-3xl w-90 ease -right-90 fixed top-0 left-auto flex h-full min-w-0 flex-col break-words rounded-none border-0 bg-white/80 bg-clip-border px-2.5 duration-200"
        >
          <div className="px-6 pt-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
            <div className="float-left">
              <h5 className="mt-4 mb-0 dark:text-white">Argon Configurator</h5>
              <p className="dark:text-white dark:opacity-80">
                See our dashboard options.
              </p>
            </div>
            <div className="float-right mt-6">
              <button
                fixed-plugin-close-button
                className="inline-block p-0 mb-4 text-sm font-bold leading-normal text-center uppercase align-middle transition-all ease-in bg-transparent border-0 rounded-lg shadow-none cursor-pointer hover:-translate-y-px tracking-tight-rem bg-150 bg-x-25 active:opacity-85 dark:text-white text-slate-700"
              >
                <i className="fa fa-close"></i>
              </button>
            </div>
          </div>
          <hr className="h-px mx-0 my-1 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
          <div className="flex-auto p-6 pt-0 overflow-auto sm:pt-4">
            <div>
              <h6 className="mb-0 dark:text-white">Sidebar Colors</h6>
            </div>
            <a href="javascript:void(0)">
              <div className="my-2 text-left" sidenav-colors>
                <span
                  className="py-2.2 text-xs rounded-circle h-5.6 mr-1.25 w-5.6 ease-in-out bg-gradient-to-tl from-blue-500 to-violet-500 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-slate-700 text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700"
                  active-color
                  data-color="blue"
                ></span>
                <span
                  className="py-2.2 text-xs rounded-circle h-5.6 mr-1.25 w-5.6 ease-in-out bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700"
                  data-color="gray"
                ></span>
                <span
                  className="py-2.2 text-xs rounded-circle h-5.6 mr-1.25 w-5.6 ease-in-out bg-gradient-to-tl from-blue-700 to-cyan-500 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700"
                  data-color="cyan"
                ></span>
                <span
                  className="py-2.2 text-xs rounded-circle h-5.6 mr-1.25 w-5.6 ease-in-out bg-gradient-to-tl from-emerald-500 to-teal-400 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700"
                  data-color="emerald"
                ></span>
                <span
                  className="py-2.2 text-xs rounded-circle h-5.6 mr-1.25 w-5.6 ease-in-out bg-gradient-to-tl from-orange-500 to-yellow-500 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700"
                  data-color="orange"
                ></span>
                <span
                  className="py-2.2 text-xs rounded-circle h-5.6 mr-1.25 w-5.6 ease-in-out bg-gradient-to-tl from-red-600 to-orange-600 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700"
                  data-color="red"
                ></span>
              </div>
            </a>
            {/* <!-- Sidenav Type --> */}
            <div className="mt-4">
              <h6 className="mb-0 dark:text-white">Sidenav Type</h6>
              <p className="text-sm leading-normal dark:text-white dark:opacity-80">
                Choose between 2 different sidenav types.
              </p>
            </div>
            <div className="flex">
              <button
                transparent-style-btn
                className="inline-block w-full px-4 py-2.5 mb-2 font-bold leading-normal text-center text-white capitalize align-middle transition-all bg-blue-500 border border-transparent border-solid rounded-lg cursor-pointer text-sm xl-max:cursor-not-allowed xl-max:opacity-65 xl-max:pointer-events-none xl-max:bg-gradient-to-tl xl-max:from-blue-500 xl-max:to-violet-500 xl-max:text-white xl-max:border-0 hover:-translate-y-px dark:cursor-not-allowed dark:opacity-65 dark:pointer-events-none dark:bg-gradient-to-tl dark:from-blue-500 dark:to-violet-500 dark:text-white dark:border-0 hover:shadow-xs active:opacity-85 ease-in tracking-tight-rem shadow-md bg-150 bg-x-25 bg-gradient-to-tl from-blue-500 to-violet-500 hover:border-blue-500"
                data-className="bg-transparent"
                active-style
              >
                White
              </button>
              <button
                white-style-btn
                className="inline-block w-full px-4 py-2.5 mb-2 ml-2 font-bold leading-normal text-center text-blue-500 capitalize align-middle transition-all bg-transparent border border-blue-500 border-solid rounded-lg cursor-pointer text-sm xl-max:cursor-not-allowed xl-max:opacity-65 xl-max:pointer-events-none xl-max:bg-gradient-to-tl xl-max:from-blue-500 xl-max:to-violet-500 xl-max:text-white xl-max:border-0 hover:-translate-y-px dark:cursor-not-allowed dark:opacity-65 dark:pointer-events-none dark:bg-gradient-to-tl dark:from-blue-500 dark:to-violet-500 dark:text-white dark:border-0 hover:shadow-xs active:opacity-85 ease-in tracking-tight-rem shadow-md bg-150 bg-x-25 bg-none hover:border-blue-500"
                data-className="bg-white"
              >
                Dark
              </button>
            </div>
            <p className="block mt-2 text-sm leading-normal dark:text-white dark:opacity-80 xl:hidden">
              You can change the sidenav type just on desktop view.
            </p>
            <div className="flex my-4">
              <h6 className="mb-0 dark:text-white">Navbar Fixed</h6>
              <div className="block pl-0 ml-auto min-h-6">
                <input
                  className="rounded-10 duration-250 ease-in-out after:rounded-circle after:shadow-2xl after:duration-250 checked:after:translate-x-5.3 h-5 relative float-left mt-1 ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-blue-500/95 checked:bg-blue-500/95 checked:bg-none checked:bg-right"
                  type="checkbox"
                />
              </div>
            </div>
            <hr className="h-px my-6 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent " />
            <div className="flex mt-2 mb-12">
              <h6 className="mb-0 dark:text-white">Light / Dark</h6>
              <div className="block pl-0 ml-auto min-h-6">
                <input
                  dark-toggle
                  className="rounded-10 duration-250 ease-in-out after:rounded-circle after:shadow-2xl after:duration-250 checked:after:translate-x-5.3 h-5 relative float-left mt-1 ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-blue-500/95 checked:bg-blue-500/95 checked:bg-none checked:bg-right"
                  type="checkbox"
                />
              </div>
            </div>
            <a
              target="_blank"
              className="dark:border dark:border-solid dark:border-white inline-block w-full px-6 py-2.5 mb-4 font-bold leading-normal text-center text-white align-middle transition-all bg-transparent border border-solid border-transparent rounded-lg cursor-pointer text-sm ease-in hover:shadow-xs hover:-translate-y-px active:opacity-85 tracking-tight-rem shadow-md bg-150 bg-x-25 bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850"
              href="https://www.creative-tim.com/product/argon-dashboard-tailwind"
            >
              Free Download
            </a>
            <a
              target="_blank"
              className="dark:border dark:border-solid dark:border-white dark:text-white inline-block w-full px-6 py-2.5 mb-4 font-bold leading-normal text-center align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer active:shadow-xs hover:-translate-y-px active:opacity-85 text-sm ease-in tracking-tight-rem bg-150 bg-x-25 border-slate-700 text-slate-700 hover:bg-transparent hover:text-slate-700 hover:shadow-none active:bg-slate-700 active:text-white active:hover:bg-transparent active:hover:text-slate-700 active:hover:shadow-none"
              href="https://www.creative-tim.com/learning-lab/tailwind/html/quick-start/argon-dashboard/"
            >
              View documentation
            </a>
            <div className="w-full text-center">
              <a
                className="github-button"
                href="https://github.com/creativetimofficial/argon-dashboard-tailwind"
                data-icon="octicon-star"
                data-size="large"
                data-show-count="true"
                aria-label="Star creativetimofficial/argon-dashboard on GitHub"
              >
                Star
              </a>
              <h6 className="mt-4 dark:text-white">Thank you for sharing!</h6>
              <a
                href="https://twitter.com/intent/tweet?text=Check%20Argon%20Dashboard%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23tailwindcss&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fargon-dashboard-tailwind"
                className="inline-block px-5 py-2.5 mb-0 mr-2 font-bold text-center text-white align-middle transition-all border-0  rounded-lg cursor-pointer hover:shadow-xs hover:-translate-y-px active:opacity-85 leading-normal text-sm ease-in tracking-tight-rem shadow-md bg-150 bg-x-25 me-2 border-slate-700 bg-slate-700"
                target="_blank"
              >
                {" "}
                <i className="mr-1 fab fa-twitter"></i> Tweet{" "}
              </a>
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/argon-dashboard-tailwind"
                className="inline-block px-5 py-2.5 mb-0 mr-2 font-bold text-center text-white align-middle transition-all border-0  rounded-lg cursor-pointer hover:shadow-xs hover:-translate-y-px active:opacity-85 leading-normal text-sm ease-in tracking-tight-rem shadow-md bg-150 bg-x-25 me-2 border-slate-700 bg-slate-700"
                target="_blank"
              >
                {" "}
                <i className="mr-1 fab fa-facebook-square"></i> Share{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
