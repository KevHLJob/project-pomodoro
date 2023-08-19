import { useEffect, useState } from "react";

interface useTimerProps {
  periods?: number;
  rest?: number;
  work?: number;
}

function convertSecondsTime(time: number) {
  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (time % 60).toString().padStart(2, "0");

  return { minutes, seconds };
}

const useTimer = ({ periods = 4, rest = 5, work = 25 }: useTimerProps) => {
  const [running, setrunning] = useState<boolean>(false);
  const [isStarted, setIsStarted] = useState<boolean>(false);

  const [time, setTime] = useState<number>(work * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      if (running) setTime((prevTime) => prevTime - 1);
    }, 1000);

    return ()=>{
        clearInterval(interval);
    }
  }, [running]);

  const startTime = () => {
    setrunning(true);
    setIsStarted(true);
  };
  const pauseTime = () => {
    setrunning(false);
  };
  const restartTime = () => {
    setTime(work * 60)
    if(!running) setIsStarted(false);
    
  };

  const { minutes, seconds } = convertSecondsTime(time);
  return {
    running,
    isStarted,
    minutes,
    pause: pauseTime,
    restart: restartTime,
    seconds,
    start: startTime,
  };
};

export default useTimer;
