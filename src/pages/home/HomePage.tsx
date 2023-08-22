import { FC } from "react"
import Countdown from "../../components/timer/Countdown";

const HomePage: FC = () =>{
    return <main className="container h-full">
        <Countdown  />
    </main>
}

export default HomePage;