import { FC } from "react"
import { useRoutes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "../../pages/home/HomePage";
import NotFound from "../../pages/common/NotFound";
import paths from "../../config/paths";

//Links for HomePage or Notfound page
const Router: FC = () => {
    const routes = useRoutes([
        {
            path: paths.home,
            element: <Layout />,
            children:[
                {index: true, element: <HomePage />},
                {path:'*', element: <NotFound />}
            ]
        }
    ])
    return routes;
}

export default Router;