import { useEffect, useRef, useState } from "react";
import workAudioFile from '../assets/audio/shamisen.mp3';
import restAudioFile from '../assets/audio/cuenco.mp3';

//variables
const timer_Radius = 117;
const total_Dashoffset = 2 * Math.PI * timer_Radius;

//variable sounds of states
const workSound = new Audio(workAudioFile);
const restSound = new Audio(restAudioFile);

function calculateOffset(time: number, work: number) {
  const pertcentege = time / (work * 60);
  return `${total_Dashoffset * pertcentege}`;
}

interface useTimerProps {
  periods?: number;
  rest?: number;
  work?: number;
}
//count minutes and seconds
function convertSecondsTime(time: number) {
  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (time % 60).toString().padStart(2, "0");

  return { minutes, seconds };
}



const useTimer = ({ periods = 4, rest = 5, work = 25 }: useTimerProps) => {
  const [elapsedPeriods, setElapsedPeriods] = useState<number>(0);
  const [onRest, setOnRest] = useState<boolean>(false);
  const [running, setrunning] = useState<boolean>(false);
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [time, setTime] = useState<number>(work * 60);

  const animationElementRef = useRef<SVGSVGElement | null>(null);

  //Animation circle
  useEffect(() => {
    if (animationElementRef.current) {
      animationElementRef.current.style.animationDuration = `${
        (work || 25) * 60
      }s`;
      animationElementRef.current.style.animationIterationCount = "infinite";
      animationElementRef.current.style.transform = "rotate(-90deg)";
      animationElementRef.current.style.strokeDasharray = `${total_Dashoffset}`;
      animationElementRef.current.style.strokeDashoffset = `${total_Dashoffset}`;
    }
  }, [animationElementRef, work]);
  //Animation circle end

  //count down time set to 0
  useEffect(() => {
    const interval = setInterval(() => {
      if (running) setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [running]);

  //break
  useEffect(() => {
    if (time === 0) {
      if(onRest) workSound.play();
      else restSound.play();
      setTimeout(() => {
        if (onRest) {
          setOnRest(false);
          setTime(work * 60);
        } else {
          setOnRest(true);
          setTime(rest * 60);
          if (elapsedPeriods != periods)
            setElapsedPeriods((prevState) => prevState + 1);
        }
      }, 1000);
    }
  }, [elapsedPeriods, onRest, periods, rest, time, work]);


  useEffect(() => {
    if (elapsedPeriods === periods) {
      setElapsedPeriods(0);
      setrunning(false);
      setIsStarted(false);
      setTime(work * 60);
    }
  }, [elapsedPeriods, periods, work]);

  useEffect(() => {
    if (animationElementRef.current)
      animationElementRef.current.style.strokeDashoffset = calculateOffset(
        time,
        onRest ? rest : work
      );
  }, [animationElementRef, onRest, rest, time, work]);

  //time state
  const startTime = () => {
    if(!isStarted) workSound.play();
    setrunning(true);
    setIsStarted(true);
  };
  const pauseTime = () => {
    setrunning(false);
  };
  const restartTime = () => {
    setTime(work * 60);
    setElapsedPeriods(0);
    if (!running) setIsStarted(false);
  };

  const { minutes, seconds } = convertSecondsTime(time);

  //return variables for components
  return {
    animationElementRef,
    elapsedPeriods,
    onRest,
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
