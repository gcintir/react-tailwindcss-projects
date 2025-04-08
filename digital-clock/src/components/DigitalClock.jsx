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
      <div className="flex flex-col justify-center items-center bg-gray-200 p-10 rounded-3xl shadow-2xl">
        <h1>Digital Clock</h1>
        <p>Display current time in hours, minutes and seconds</p>
        <h2>
          {hours}:{minutes}:{seconds} {ampm}
        </h2>
        <h2>
          {day} {month},{year}
        </h2>
        <button onClick={() => toggleHourFormat(true)}>24-Hour Format</button>
        <button onClick={() => toggleHourFormat(false)}>12-Hour Format</button>
      </div>
    </div>
  );
}

export default DigitalClock;
