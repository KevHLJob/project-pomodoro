import { FC } from "react"
import { Link } from "react-router-dom";
import paths from "../../config/paths";
import Logo from "../../assets/images/KevDevlogo.jpg"
//Nav, logo and Author
const Header: FC = () =>{
    return <header className="grown-0 h-24 px-4 py-2 flex items-center justify-between w-full" >
        <Link to={paths.home}>
            <h1 className="h-12 text-2xl font-semibold">
                Kev<span className="text-cyan-400">Dev</span>
            </h1>
        </Link>
        <div className="h-20">
                <img className="h-full object-scale-down rounded-2xl" src={Logo} alt="Logo KevDev" />
            </div>
    </header>
}

export default Header;