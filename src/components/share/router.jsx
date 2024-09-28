import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";
import Login from "../Akash/Login";




const router=createBrowserRouter([
      {
            path:'/',
            element:<MainLayout></MainLayout>,
            children:[
                  {
                        path:'/akash/login',
                        element:<Login></Login>
                  },
                  
            ]
      }
])


export default router;