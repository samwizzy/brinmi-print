import React from "react";

export default function Slider() {
  return (
    <div className="carousel relative shadow-sm bg-white">
      <div className="carousel-inner relative overflow-hidden w-full">
        {/* <!--Slide 1--> */}
        <input
          className="carousel-open"
          type="radio"
          id="carousel-1"
          name="carousel"
          aria-hidden="true"
          hidden={true}
          // checked="checked"
          defaultChecked="checked"
        />
        <div
          className="carousel-item absolute opacity-0"
          style={{ height: "100%", width: "100%" }}
        >
          <div className="block h-full w-full bg-white text-white text-5xl text-center">
            <img src="/assets/slider/ezone.png" alt="" className="w-full" />
          </div>
        </div>
        <label
          htmlFor="carousel-5"
          className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
        >
          ‹
        </label>
        <label
          htmlFor="carousel-2"
          className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
        >
          ›
        </label>

        {/* <!--Slide 2--> */}
        <input
          className="carousel-open"
          type="radio"
          id="carousel-2"
          name="carousel"
          aria-hidden={true}
          hidden={true}
        />
        <div
          className="carousel-item absolute opacity-0"
          style={{ height: "100%", width: "100%" }}
        >
          <div className="block h-full w-full bg-white text-white text-5xl text-center">
            <img src="/assets/slider/cube700.png" alt="" className="w-full" />
          </div>
        </div>
        <label
          htmlFor="carousel-1"
          className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
        >
          ‹
        </label>
        <label
          htmlFor="carousel-3"
          className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
        >
          ›
        </label>

        {/* <!--Slide 3--> */}
        <input
          className="carousel-open"
          type="radio"
          id="carousel-3"
          name="carousel"
          aria-hidden="true"
          hidden={true}
        />
        <div
          className="carousel-item absolute opacity-0"
          style={{ height: "100%", width: "100%" }}
        >
          <div className="block h-full w-full bg-white text-white text-5xl text-center">
            <img src="/assets/slider/finman.png" alt="" className="w-full" />
          </div>
        </div>
        <label
          htmlFor="carousel-2"
          className="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
        >
          ‹
        </label>
        <label
          htmlFor="carousel-4"
          className="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
        >
          ›
        </label>

        {/* <!--Slide 4--> */}
        <input
          className="carousel-open"
          type="radio"
          id="carousel-4"
          name="carousel"
          aria-hidden="true"
          hidden={true}
        />
        <div
          className="carousel-item absolute opacity-0"
          style={{ height: "100%", width: "100%" }}
        >
          <div className="block h-full w-full bg-white text-white text-5xl text-center">
            <img src="/assets/slider/easygo.png" alt="" className="w-full" />
          </div>
        </div>
        <label
          htmlFor="carousel-3"
          className="prev control-4 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
        >
          ‹
        </label>
        <label
          htmlFor="carousel-5"
          className="next control-4 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
        >
          ›
        </label>

        {/* <!--Slide 5--> */}
        <input
          className="carousel-open"
          type="radio"
          id="carousel-5"
          name="carousel"
          aria-hidden="true"
          hidden={true}
        />
        <div
          className="carousel-item absolute opacity-0"
          style={{ height: "100%", width: "100%" }}
        >
          <div className="block h-full w-full bg-white text-white text-5xl text-center">
            <img src="/assets/slider/realm.png" alt="" className="w-full" />
          </div>
        </div>
        <label
          htmlFor="carousel-4"
          className="prev control-5 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
        >
          ‹
        </label>
        <label
          htmlFor="carousel-1"
          className="next control-5 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
        >
          ›
        </label>

        {/* <!-- Add additional indicators htmlFor each slide--> */}
        <ol className="carousel-indicators">
          <li className="inline-block mr-3">
            <label
              htmlFor="carousel-1"
              className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
            >
              •
            </label>
          </li>
          <li className="inline-block mr-3">
            <label
              htmlFor="carousel-2"
              className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
            >
              •
            </label>
          </li>
          <li className="inline-block mr-3">
            <label
              htmlFor="carousel-3"
              className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
            >
              •
            </label>
          </li>
          <li className="inline-block mr-3">
            <label
              htmlFor="carousel-4"
              className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
            >
              •
            </label>
          </li>
          <li className="inline-block mr-3">
            <label
              htmlFor="carousel-5"
              className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
            >
              •
            </label>
          </li>
        </ol>
      </div>
    </div>
  );
}
