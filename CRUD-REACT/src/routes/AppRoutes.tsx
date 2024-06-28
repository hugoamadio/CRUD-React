import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Error from "../pages/Error";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login/>,
        errorElement: <Error/>
    },
    {
        path: '/register',
        element: <Register/>
    }
])

function AppRoutes(){
    return <RouterProvider router={router}/>
}

export default AppRoutes