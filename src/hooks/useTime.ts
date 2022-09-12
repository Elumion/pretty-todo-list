import { useState, useEffect } from "react";

const useTime = () => {
  const [dateNow, setDateNow] = useState(new Date());
  const seconds = dateNow.getSeconds();
  const hour = dateNow.getHours();
  const minutes = dateNow.getMinutes();
  const day = dateNow.getDate();
  const month = dateNow.getMonth();
  const year = dateNow.getFullYear();
  const miliseconds = dateNow.getMilliseconds();
  //   console.table([hour, minutes, day, month, year]);
  useEffect(() => {
    setTimeout(() => setDateNow(new Date()), 200);
  }, [dateNow]);

  const hourAndMinutesAndSeconds = `${hour}:${minutes}:${seconds}:${miliseconds}`;
  const monthAndDayAndYear = `${day}:${month}:${year}`;
  return [hourAndMinutesAndSeconds, monthAndDayAndYear];
};
export default useTime;
