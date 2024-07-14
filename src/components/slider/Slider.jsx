import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextSlide, precSlide } from "../../features/slices/sliderSlice";
import { sliderData } from "../../assets/data/dummyData";

const Slider = () => {
  const sliderIndex = useSelector((state) => state.slider.value);
  console.log(sliderIndex, "sliderIndex");
  const dispatch = useDispatch();

  return (
    <div className="relative pb-4">
      <div>
        //! след назад
        {sliderData.map((item) => {
          return (
            <div
              key={item.id}
              className={
                parseInt(item.id) === sliderIndex
                  ? "opacity-100 duration-700 ease-in-out scale-100"
                  : "opacity-0 duration-700 ease-in-out scale-95"
              }
            >
              <div>
                {parseInt(item.id) === sliderIndex && (
                  <img
                    className="h-[850px] w-full"
                    src={item.img}
                    alt="shoes"
                  />
                )}
              </div>
              <div>
                <p className="text-white text-4xl font-inter font-bold tracking-normal leading-none">
                  {parseInt(item.id) === sliderIndex && item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex absolute bottom-12  left-[45%]">
        {sliderData.map((dot, index) => {
          return (
            <div className="mr-4" key={dot.id}>
              <div></div>
            </div>
          );
        })}
      </div>
      <button onClick={() => dispatch(nextSlide(sliderIndex + 1))}>Next</button>
      <button onClick={() => dispatch(precSlide(sliderIndex - 1))}>Prev</button>
    </div>
  );
};

export default Slider;
