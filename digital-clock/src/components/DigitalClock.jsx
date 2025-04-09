import React, { useState, useEffect } from "react";
import * as dateTimeUtil from "../util/DateTimeUtil.js";
import { FaMoon } from "react-icons/fa";
import { WiDaySunny } from "react-icons/wi";

function DigitalClock() {
  const [time, setTime] = useState(new Date());
  const [hourFormat24, setHourFormat24] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

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
    <div
      className={`flex flex-col gap-y-32 justify-center items-center h-screen ${
        darkMode ? "bg-gray-600" : "bg-gray-200"
      } transition duration-300`}
    >
      <div>
        <button onClick={toggleDarkMode}>
          {darkMode ? (
            <WiDaySunny color="white" size={32} className="text-2xl" />
          ) : (
            <FaMoon size={32} className="text-2xl" />
          )}
        </button>
      </div>

      <div
        className={`flex flex-col gap-y-5 p-5 justify-center items-center rounded-3xl shadow-2xl w-auto h-auto ${
          darkMode ? "bg-gray-600" : "bg-gray-200"
        } transition duration-300`}
      >
        <h1
          className={`font-extrabold text-4xl ${
            darkMode ? "text-blue-200" : "text-black"
          } transition duration-300`}
        >
          Digital Clock
        </h1>
        <p
          className={`font-extralight text-2xl mb-5 ${
            darkMode ? "text-blue-200" : "text-black"
          } transition duration-300`}
        >
          Display current time in hours, minutes and seconds
        </p>
        <h1
          className={`font-extrabold text-8xl ${
            darkMode ? "text-blue-200" : "text-black"
          } transition duration-300`}
        >
          {hours}:{minutes}:{seconds} {ampm}
        </h1>
        <h1
          className={`font-extralight text-2xl mb-5 ${
            darkMode ? "text-blue-200" : "text-black"
          } transition duration-300`}
        >
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
