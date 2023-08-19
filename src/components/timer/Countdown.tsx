import { FC } from "react";
import useTimer from "../../hooks/useTimer";
import CountdownState from "./CountdownState";

interface CountdownProps {
    periods?: number;
    rest?: number;
    work?: number;
}

const Countdown: FC<CountdownProps | undefined> = (props) => {
    const { periods, rest, work } = props ?? {};
    const { running, isStarted, minutes, pause, restart, seconds, start } = useTimer({ periods, rest, work })
    return <div className="grid place-items-center gap-12 p-8 h-full">
        <div className="relative grid place-items-center shrink-0 grow-0 h-60 w-60">
            <span className="absolute w-60 h-60 border-6 border-cyan-600 rounded-full
                z-10 topo-0 left-0"></span>
            <svg className="absolute top-0 -left-8 z-10 -rotate-90" height={300} width={300}>
                <circle
                    className="stroke-secondary"
                    cx="180"
                    cy="152"
                    r="117"
                    strokeWidth="6"
                    fill="transparent"
                />
            </svg>

            <span className="relative z-20 text-6xl font-extralight">
                {minutes}
                <span className="px-2">:</span>
                {seconds}
            </span>

        </div>
        <CountdownState
        running={running}
        isStarted={isStarted}
        pause={pause}
        restart={restart}
        start={start}
        />
    </div>
}

export default Countdown;