import { FC } from "react";
import Button from "../global/Button";

interface CountdownStateProps{
    running?: boolean;
    isStarted:boolean;
    pause:()=> void;
    restart: () => void;
    start: () => void;
}

const CountdownState: FC<CountdownStateProps> =({running, isStarted, pause, restart, start})=>{
    return(
        <>
        {!running ?(
             !isStarted ? (
            <Button onClick={start}>Start</Button>
        ) : (
        <div className="flex items-center justify-center gap-4 w-full">
            <Button color="secondary" size="sm" variant="outlined" onClick={start}>Resume</Button>
            <Button size="sm" variant="outlined" onClick={restart}>Clear</Button>
        </div> 
        )
        ): (
            <div className="flex items-center justify-center gap-4 w-full">
                <Button color="secondary" size="sm" variant="outlined" onClick={pause}>Pause</Button>
                <Button size="sm" variant="outlined" onClick={restart}>Restart</Button>
            </div>
        )}
        </>
    )
}

export default CountdownState;