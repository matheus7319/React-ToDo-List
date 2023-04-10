import { useEffect, useState } from 'react';

const useCountdown = (targetDate: any) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);

  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: any) => {

  const [days, setDays] = useState(Math.floor(countDown / (1000 * 60 * 60 * 24)));
  const [hours, setHours] = useState(Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const [minutes, setMinutes] = useState(Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60)));
  const [seconds, setSeconds] = useState(Math.floor((countDown % (1000 * 60)) / 1000));

  useEffect(() => {
    setDays(Math.floor(countDown / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((countDown % (1000 * 60)) / 1000));
  }, [countDown])

  return [days, hours, minutes, seconds];
};

export { useCountdown };
