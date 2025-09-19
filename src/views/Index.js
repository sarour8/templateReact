/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";


import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import heroImg from "assets/img/hero-1.jpg";
import yogaImg from "assets/img/classes/class-detailsl.jpg"
import sportImg from "assets/img/classes/class-1.jpg"
import boxImg from "assets/img/classes/class-2.jpg"
import groupImg from "assets/img/classes/class-4.jpg"
import poidsImg from "assets/img/classes/class-5.jpg"
import { FaBiking, FaDumbbell, FaHeart } from "react-icons/fa";
import { MdOutlineNavigateNext } from "react-icons/md";

export default function Index() {
  const features = [
    {
      icon: <FaBiking size={30} className="text-white" />,
      title: "Modern equipment",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.",
    },
    {
      icon: <FaDumbbell size={30} className="text-white" />,
      title: "Professional training plan",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.",
    },
    {
      icon: <FaHeart size={30} className="text-white" />,
      title: "Unique to your needs",
      desc: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    },
  ];

  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-12 items-center flex h-screen max-h-860-px " 
          style={{
        backgroundImage: `url(${require("assets/img/hero-1.jpg").default})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        }}>
        
        <div className="container mx-auto items-center flex flex-wrap justify-end ">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              < p className="mt-4 text-lg leading-relaxed text-white uppercase fadeInUp">
                
                {/*<a
                  href="https://tailwindcss.com/?ref=creativetim"
                  className="text-blueGray-600"
                  target="_blank"
                >
                  Tailwind CSS
                </a>*/}
                Shape your body
              </p>
              <h2 className="font-semibold text-4xl text-white uppercase fadeInUp ">
                Push your <strong>limits </strong>
              </h2>
              <h2 className="font-semibold text-4xl text-white uppercase ml-2 fadeInUp fadeInUp">
                Break your boundaries
              </h2>
              
              <div className="mt-12 fadeInUp ">
                <Link
                  to="/auth/register"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-orange-500 active:bg-orange-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Get Started
                </Link>
                {/*<a
                  href="https://github.com/creativetimofficial/notus-react?ref=nr-index"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  target="_blank"
                >
                  Github Star
                </a>*/}
              </div>
            </div>
          </div>
        </div>
      </section>
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <br/>
          <span className="text-orange-500 uppercase tracking-wider text-sm">Why choose us?</span>
          <h2 className="text-4xl text-white font-bold mt-2">PUSH YOUR LIMITS FORWARD</h2>
        </div>
        
<div className="pb-20  -mt-36">
  <div className="container  mx-auto px-4">
    <div className="flex flex-wrap ">
      {features.map((feature, index) => (
        <div
          key={index}
          className="lg:pt-12 w-full md:w-4/12 px-4 text-center "
        >
          <div className="relative hover:-mt-4  border flex flex-col min-w-0 break-words text-white w-full mb-8 shadow-lg ">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-orange-500">
  {feature.icon}
</div>

              <h6 className="text-xl font-semibold">{feature.title}</h6>
              <p className="mt-2 mb-4 text-white">{feature.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
</div>
      </section>

    <section className="py-8 bg-white bg-opacity-90">
      
</section>
      <section className=" md:mt-26 pb-40 relative bg-grey-800">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
              className="text-orange-500 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <br/>
          <div className="text-center mb-16">
            <span className="text-orange-500 uppercase tracking-wider text-sm ">Our classes</span>
            <h2 className="text-4xl text-white font-bold mt-2">WHAT WE CAN OFFER</h2>
          </div>
        <br/>
        </div>
        <div className="container mx-auto ">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto  ">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-grey-800">
                <img
                alt="..."
                src={boxImg}
                className="w-full align-middle rounded-t-lg"
              />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className=" fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white text-orange-500">
                    CARDIO
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    INDOOR CYCLING
                  </p>
                </blockquote>
              </div>
            </div>
                        <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto ">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-grey-800">
                <img
                alt="..."
                src={sportImg}
                className="w-full align-middle rounded-t-lg"
              />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="bg-grey fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold  text-orange-500">
                    STRENGTH
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    KETTLEBELL POWER
                  </p>
                </blockquote>
              </div>
            </div>
                        <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto ">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-grey-800">
                <img
                alt="..."
                src={yogaImg}
                className="w-full align-middle rounded-t-lg "
              />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className=" fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-orange-500">
                    RELAXING
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    YOGA
                  </p>
                </blockquote>
              </div>
            </div>
                        <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto ">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-grey-800">
                <img
                alt="..."
                src={poidsImg}
                className="w-full align-middle rounded-t-lg"
              />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className=" fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-orange-500">
                    TRAINING
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    BOXING
                  </p>
                </blockquote>
              </div>
            </div>
                        <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto ">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-grey-800">
                <img
                alt="..."
                src={groupImg}
                className="w-full align-middle rounded-t-lg"
              />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className=" fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-orange-500">
                  STRENGTH
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    WIEGHTLIFTING
                  </p>
                
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <section className=" md:mt-40 pb-40 relative bg-grey">
            <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
              className="text-orange-500 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
         <div className="container mx-auto px-4">
          {/* Section Title */}
          <br/>
          <div className="text-center mb-16">
            <span className="text-orange-500 uppercase tracking-wider text-sm">Our Plan</span>
            <h2 className="text-4xl text-white font-bold mt-2">CHOOSE YOUR PRICING PLAN</h2>
          </div>
          </div>
        </section>
        <section className="block relative z-1 ">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  
                  <Link to="/auth/register">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150 text-center ">
                      <div className="col-lg-4 col-md-8">
                        <div className="ps-item">
                        <h1>Class drop-in</h1>
                        <div className="pi-price">
                            <h2>30 Dt</h2>
                            <span>SINGLE CLASS</span>
                        </div>
                        <ul>
                            <li>Free riding</li>
                            <li>Unlimited equipments</li>
                            <li>Personal trainer</li>
                            <li>Weight losing classes</li>
                            <li>Month to mouth</li>
                            <li>No time restriction</li>
                        </ul>
                        <div className="mt-12">
                            <a
                              href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                              target="_blank"
                              className="enroll-btn"
                            >
                              Enroll Now
                            </a>
                          </div>

                        <a href="#" class="thumb-icon"><i class="fa fa-picture-o"></i></a>
                    </div>
                  </div>

                </div>
                  </Link>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  
                  <Link to="/auth/register">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150 text-center">
                      <div className="col-lg-4 col-md-8">
                        <div className="ps-item">
                        <h1>12 Month unlimited</h1>
                        <div className="pi-price">
                            <h2>300 Dt</h2>
                            <span>SINGLE CLASS</span>
                        </div>
                        <ul>
                            <li>Free riding</li>
                            <li>Unlimited equipments</li>
                            <li>Personal trainer</li>
                            <li>Weight losing classes</li>
                            <li>Month to mouth</li>
                            <li>No time restriction</li>
                        </ul>
                        <div className="mt-12">
                            <a
                              href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                              target="_blank"
                              className="enroll-btn"
                            >
                              Enroll Now
                            </a>
                          </div>

                        <a href="#" class="thumb-icon"><i class="fa fa-picture-o"></i></a>
                    </div>
                  </div>

                </div>
                  </Link>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  
                  <Link to="/auth/register">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150 text-center">
                      <div className="col-lg-4 col-md-8">
                        <div className="ps-item">
                        <h1>6 Month unlimited</h1>
                        <div className="pi-price">
                            <h2> 160 Dt</h2>
                            <span>SINGLE CLASS</span>
                        </div>
                        <ul>
                            <li>Free riding</li>
                            <li>Unlimited equipments</li>
                            <li>Personal trainer</li>
                            <li>Weight losing classes</li>
                            <li>Month to mouth</li>
                            <li>No time restriction</li>
                        </ul>
                        <div className="mt-12">
                            <a
                              href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                              target="_blank"
                              className="enroll-btn"
                            >
                              Enroll Now
                            </a>
                            
                          </div>
                        {/*<a href="#" class="thumb-icon"><i class="fa fa-picture-o"></i></a>*/}
                    </div>
                  </div>

                </div>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      </section> 
        <Footer/>
 
    </>
  );
}
