import React, {useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import rib from "../images/rib2.png";
import cc from "../images/pp.png";
import a from "../images/2.jpg";
import b from "../images/2.png";
import c from "../images/3.png";
import d from "../images/4.png";
import e from "../images/5.png";
import f from "../images/BB.jpg";
import g from "../images/NB.jpg";
import h from "../images/DD.jpg";
import i from "../images/AA.jpg";
import logo from "../images/logo3.png";
import bg2 from "../images/bg2.mp4";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {

  useEffect(() => {
    AOS.init();
  }, [])



  return (
    <div className="w-[100%] h-[100%]  ">
    
      <div className="lg:w-[100%] font-bold lg:h-screen lg:flex justify-center  "  >
        {/* <div className='w-full h-full absolute bg-[#000000cc]'></div> */}
        <div className="lg:w-[50%] lg:mt-20 sm:mt-6 text-center " data-aos="fade-left" data-aos-duration="3000">
          <img src={logo} alt="" className=" mx-auto" />
          <p className="lg:text-4xl ">
            Nurturing Nature, <br></br>Delivering Quality Worldwide
          </p>
        </div>
       
        <div className="lg:w-[60%] " data-aos="fade-right" data-aos-duration="3000"  >
          <img src={cc} alt="" className="w-[120vh]" />
        </div> 
       
      </div>

      <div className="lg:h-screen  w-full flex justify-center  items-center bg-white ">
        <video
          className="absolute w-full lg:w-4/5 h-full lg:h-4/5 rounded-2xl brightness-50 object-contain"
          autoPlay
          muted
          loop
        >
          <source src={bg2} type="video/mp4" />
        </video>
        <div className="relative flex flex-col justify-center items-center sm:h-[14rem] text-white font-sans italic font-semibold lg:w-4/5 lg:h-full">
          <div className="backdrop-blur-sm sm:p-0 p-4 lg:p-8 text-center">
            <h1 className="text-3xl sm:text-sm lg:text-6xl xl:text-5xl mb-4">
              {" "}
              Satyanarayan Sehksaria Private Limited
            </h1>
            <p className="text-lg sm:text-sm lg:text-2xl xl:text-lg mb-8">
              Premium Traders of - Castor Seeds - Castor Seeds Oil -
              Cashew Kernels - Grams - Gaur Seeds
            </p>
            <div className="w-48 mx-auto mt-8">
              <Link
                to="/about"
                class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-black bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="  w-[100%] text-center items-center " >
        <h1 className="m-auto  p-6  lg:text-5xl sm:text-2xl font-bold  " >OUR PRODUCTS</h1>
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={ {
            delay: 2000,
            reverseDirection : true
          }}
          slidesPerView="4"
          spaceBetween="1"
          pagination={{ el: ".swiper-pagination", clickable: true }}
          showsPagination={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 250,
            modifier: 2.5,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
            dynamicBullets: false,
          }}
          breakpoints={{
    640: {
      slidesPerView: 2,  
    },
    768: {
      slidesPerView: 3, 
    },
    1024: {
      slidesPerView: 4,  
    },}}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="lg:h-[32rem] text-xl mx-auto w-[100%] flex justify-center mt-6"
        >
          <SwiperSlide className=" w-auto p-4 text-center  items-center rounded-lg m-4 bg-transperant shadow-2xl">
            <img src={b} alt="" className="lg:h-80 xl:h-[40vh] mx-auto lg:w-[50vh]" />
            <p className="sm:text-sm lg:text-4xl xl:text-4xl  font-bold mt-10">Cashew Kernels</p>
                    </SwiperSlide>
          <SwiperSlide className=" w-auto p-4 text-center  items-center rounded-lg m-4 bg-transperant shadow-2xl">
            <img src={c} alt="" className="lg:h-[40vh] lg:w-[50vh]  mx-auto" />
            <p className="sm:text-sm lg:text-4xl xl:text-4xl  font-bold mt-10">Castor Seeds</p>
                    </SwiperSlide>
          <SwiperSlide className=" w-auto p-4 text-center  items-center rounded-lg m-4 bg-transperant shadow-2xl">
            <img src={d} alt="" className="lg:h-[40vh] lg:w-[50vh] mx-auto" />
            <p className="sm:text-sm lg:text-4xl xl:text-4xl  font-bold mt-10">Castor Seeds Oil</p>
          </SwiperSlide>
          <SwiperSlide className=" w-auto p-4 text-center items-center rounded-lg m-4 bg-transperant shadow-2xl">
            <img src={e} alt="" className="lg:h-[40vh] lg:w-[50vh] mx-auto" />
            <p className="sm:text-sm lg:text-4xl xl:text-4xl font-bold mt-10 ">Legumes</p>
          </SwiperSlide>
          <SwiperSlide className=" w-auto p-4 text-center items-center rounded-lg m-4 bg-transperant shadow-2xl">
            <img src={a} alt="" className="lg:h-[40vh] lg:w-[50vh] mx-auto" />
            <p className="sm:text-sm lg:text-4xl xl:text-4xl  font-bold mt-10">Guar Seeds</p>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="w-[100%] mx-auto items-center justify-center flex mb-10">
        <Link
          to="/products"
          class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-green-800 rounded-xl group"
        >
          <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
          <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
            Know More
          </span>
        </Link>
      </div>

      <div className=' justify-center pt-10 items-center text-center h-[30rem] '>
      <h1 className="m-auto  p-6  lg:text-5xl sm:text-2xl font-bold lg:w-[42%] text-white bg-cover bg-center bg-no-repeat " style={{backgroundImage : `url(${rib})`}}>MEMBERSHIPS</h1>
         {/* <h1 className='text-4xl font-bold pt-4'>CERTIFICATIONS</h1> */}
          <div className='flex flex-wrap justify-center lg:p-10'>
          <img src={f} alt="" className="m-4 sm:w-32 lg:w-auto" />
  <img src={g} alt="" className="m-4 sm:w-32 lg:w-auto" />
  <img src={h} alt="" className="m-4 sm:w-32 lg:w-auto" />
  <img src={i} alt="" className="m-4 sm:w-32 lg:w-auto" />
          </div>
      </div>
      <div className="w-[100%] lg:h-[50vh]  text-black " data-aos="zoom-in" data-aos-duration="3000">
      <h1 className="m-auto  p-6 lg:text-5xl sm:text-2xl font-bold text-center lg:w-[40%] bg-center bg-no-repeat text-white bg-cover " style={{backgroundImage : `url(${rib})`}}>REVIEWS</h1>
        <div className='lg:flex w-[100%] justify-center  items-center mt-10'>
        <div className=" lg:w-[30%]  ">
          <div className="w-[50vh]  p-4 mx-auto mt-10 rounded-xl text-center shadow-2xl   cursor-pointer flex flex-col items-center">
            <ReactStars count={5} value={5} size={24} activeColor="black" />
            <h1 className="lg:text-2xl font-bold mt-2">“Excellent Service”</h1>

            <p className="italic mt-4">
              Their service is brilliant! I really hope some of them are now
              using your service.
            </p>
          </div>
        </div>
        <div className=" lg:w-[30%]  ">
          <div className="w-[50vh] h-auto p-4 mx-auto mt-10 rounded-xl text-center shadow-2xl   cursor-pointer flex flex-col items-center">
            <ReactStars count={5} value={4} size={24} activeColor="black" />
            <h1 className="lg:text-2xl font-bold mt-2">
              “Love the flexibility”
            </h1>

            <p className="italic mt-4">
              We are very happy with the box and we value that we can have the
              standard box or choose our own.
            </p>
          </div>
        </div>
        <div className=" lg:w-[30%]">
          <div className="w-[50vh] h-auto p-4 mx-auto mt-10 rounded-xl text-center  shadow-2xl  cursor-pointer flex flex-col items-center">
            <ReactStars
              count={5}
              value={4.5}
              size={24}
              activeColor="black"
              isHalf={true}
            />
            <h1 className="lg:text-2xl font-bold mt-2">“Fantastic quality”</h1>

            <p className="italic mt-4">
              I’m really appreciating the quality and presentation. The flavour
              of the veg is outstanding.
            </p>
          </div>
        </div>
        </div>
      </div>
      <div className="sticky bottom-0  w-[100%] flex justify-end animate-bounce p-4 ">
        <Link to="https://wa.link/u3mfnm" target="_blank" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="80"
            height="80"
            viewBox="0 0 48 48"
          >
            <path
              fill="#fff"
              d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
            ></path>
            <path
              fill="#fff"
              d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
            ></path>
            <path
              fill="#cfd8dc"
              d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
            ></path>
            <path
              fill="#40c351"
              d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
            ></path>
            <path
              fill="#fff"
              fill-rule="evenodd"
              d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Home;
