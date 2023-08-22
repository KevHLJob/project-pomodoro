import { Link } from "react-router-dom";
import paths from "../../config/paths";
import { MdHome } from "@react-icons/all-files/md/MdHome";
import { FC } from "react";

const ButtomNav: FC = () =>{
    return <nav className="grown-0 h-24 px-4 py-2 flex items-center justify-center w-full">
    <Link to={paths.home}>
        <button type="button" className="p-3  rounded-full border-1 border-white grid place-items-center justify-center">
            <MdHome size="3rem" />
        </button>
    </Link>
</nav>
}

export default ButtomNav;