import React from "react";

import Navbar from "components/Navbars/ProfileNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Profile() {
  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
             //backgroundImage: `url(${require("assets/img/classes/class-4.jpg").default})`,
             backgroundColor: "black",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-black fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-grey w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={require("assets/img/members/member1.jpg").default}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Connect
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          22
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Friends
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          10
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Photos
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          89
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Comments
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 flex flex-col md:flex-row justify-center items-start gap-10 bg-gray-900 p-6 rounded-lg shadow-lg">
  {/* Colonne gauche */}
  <div className="w-full md:w-5/12 pr-6  flex flex-col border-r border-white/30">
    <h3 className="text-4xl font-semibold mb-4 text-white">
      Jenna Stones
    </h3>
    <div className="text-sm mb-3 text-white flex items-center">
      <i className="fas fa-map-marker-alt mr-2 text-orange-500"></i>
      Los Angeles, California
    </div>
    <div className="mb-3 text-white flex items-center">
      <i className="fas fa-phone-alt mr-2 text-orange-500"></i>
      +1 234 567 890
    </div>
    <div className="mb-3 text-white flex items-center">
      <i className="fas fa-phone-alt mr-2 text-orange-500"></i>
      jenna.stones@gmail.com
    </div>
  </div>

  {/* Colonne droite */}
  <div className="w-full md:w-5/12 pl-6  flex flex-col">
    <div className="mb-3 text-white flex items-center">
      <span className="font-bold text-white mr-2">Assigned Coach:</span>
      John Doe
    </div>
    <div className="mb-3 text-white flex items-center">
      <span className="font-bold text-white mr-2">Goal:</span>
      Improve Flexibility
    </div>
    <div className="mb-3 text-white">
      <span className="font-bold text-white mr-2">Progress:</span>
      <div className="w-full bg-gray-700 rounded-full h-4 mt-1 overflow-hidden">
        <div className="bg-orange-500 h-4 rounded-full" style={{ width: '60%' }}></div>
      </div>
      <span className="text-sm text-white mt-1 block">60%</span>
    </div>
    
  </div>
</div>


                  {/*<h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    Jenna Stones
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                    Los Angeles, California
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    Solution Manager - Creative Tim Officer
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    University of Computer Science
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                      </p>
                      <a
                        href="#pablo"
                        className="font-normal text-lightBlue-500"
                        onClick={(e) => e.preventDefault()}
                      >
                        Show more
                      </a>
                    </div>
                  </div>*/}
                </div>
              </div>
            </div>
          
        </section>
      </main>
      <Footer />
    </>
  );
}
