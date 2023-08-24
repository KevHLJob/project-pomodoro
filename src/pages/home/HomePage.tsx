import { FC } from "react"
import Countdown from "../../components/timer/Countdown"; 

// call component from timer
const HomePage: FC = () =>{
    return <main className="container h-full">
        <Countdown  />
    </main>
}

export default HomePage;