import { FC } from "react";

interface CountdownProps{
    periods?: number;
    rest?:number;
    work?: number;
}

const Countdown: FC<CountdownProps> = ({ periods, rest, work }) =>{
    return <div className="grid place-items-center gap-12 p-8 h-full">
        <div className="relative grid place-items-center shrink-0 grow-0 h-60 w-60">
            <span className="absolute w-60 h-60 border-6 border-cyan-600 rounded-full
             z-10 topo-0 left-0"></span>
        </div>

    </div>
}

export default Countdown;