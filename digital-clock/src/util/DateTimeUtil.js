export function getFormattedTime(date, hourFormat24 = true) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const pad = (val) => val.toString().padStart(2, "0");
  const formattedHours = hourFormat24 ? pad(hours) : pad(hours % 12 || 12);
  const formattedMinutes = pad(minutes);
  const formattedSeconds = pad(seconds);
  const ampm = hourFormat24 ? "" : hours >= 12 ? "PM" : "AM";
  return {
    hours: formattedHours,
    minutes: formattedMinutes,
    seconds: formattedSeconds,
    ampm,
  };
}

export function getFormattedDate(date) {
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();
  return { day, month, year };
}