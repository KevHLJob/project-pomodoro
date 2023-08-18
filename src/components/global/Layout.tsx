import { FC } from "react"
import { Outlet } from "react-router-dom";
import ButtomNav from "./ButtomNav";
import Header from "./Header";


const Layout: FC = () =>{
    return <div className="h-screen flex flex-col justify-between 
    items-stretch overflow-hidden bg-background text-white">
        <Header />
        <div className="flex-1 overflow-y-scroll">
          <Outlet/>  
        </div>
        <ButtomNav />
    
    </div>
}

export default Layout;