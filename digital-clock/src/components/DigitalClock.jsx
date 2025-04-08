import React, { useState, useEffect } from "react";
import * as dateTimeUtil from "../util/DateTimeUtil.js";

function DigitalClock() {
  const [time, setTime] = useState(new Date());
  const [hourFormat24, setHourFormat24] = useState(true);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  const toggleHourFormat = (is24HourFormat) => {
    setHourFormat24(is24HourFormat);
  };

  const { hours, minutes, seconds, ampm } = dateTimeUtil.getFormattedTime(
    time,
    hourFormat24
  );
  const { day, month, year } = dateTimeUtil.getFormattedDate(time);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="flex flex-col gap-y-5 p-5 justify-center items-center bg-gray-200 rounded-3xl shadow-2xl w-auto h-auto">
        <h1 className="font-extrabold text-4xl">Digital Clock</h1>
        <p className="font-extralight text-2xl mb-5">
          Display current time in hours, minutes and seconds
        </p>
        <h1 className="font-extrabold text-8xl">
          {hours}:{minutes}:{seconds} {ampm}
        </h1>
        <h1 className="font-extralight text-2xl mb-5">
          {day} {month},{year}
        </h1>
        <div className="flex gap-x-5">
          <div>
            <button
              disabled={hourFormat24}
              className={`${
                hourFormat24 ? "bg-gray-400" : "bg-gray-200"
              } border px-4 py-2 rounded-[5px] font-bold disabled:pointer-events-none hover:bg-black hover:text-white transition duration-300 hover:cursor-pointer`}
              onClick={() => toggleHourFormat(true)}
            >
              24-Hour Format
            </button>
          </div>
          <div>
            <button
              disabled={!hourFormat24}
              className={`${
                !hourFormat24 ? "bg-gray-400" : "bg-gray-200"
              } border px-4 py-2 rounded-[5px] font-bold disabled:pointer-events-none hover:bg-black hover:text-white transition duration-300 hover:cursor-pointer`}
              onClick={() => toggleHourFormat(false)}
            >
              12-Hour Format
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigitalClock;
