import { createBrowserRouter } from "react-router-dom";
import Nav from "./Partials/Nav";
import Projects from "./Components/Projects";
import Student from "./Components/Students/Student";
import CreateStudent from "./Components/Students/CreateStudent";
import UpdateStudent from "./Components/Students/UpdateStudent";
import ShowStudent from "./Components/Students/ShowStudent";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";

export const router = createBrowserRouter([{
    element:<Nav/>,
    children:[
        {
            path:"/",
            element:<Projects/>,
        },
        {
            path:"/students",
            element:<Student/>,
        },
        {
            path:"/students/create",
            element:<CreateStudent/>,
        },
        {
            path:"/students/update/:id",
            element:<UpdateStudent/>,
        },
        {
            path:"/students/show/:id",
            element:<ShowStudent/>,
        },
        {
            path:"/auth/register",
            element:<Register/>,
        },
        {
            path:"/auth/login",
            element:<Login/>,
        },
    ]
}])