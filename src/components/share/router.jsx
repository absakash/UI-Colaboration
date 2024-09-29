import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";
import Login from "../Akash/Login";

import SignIn from "../Shomir/SignIn";




const router = createBrowserRouter([
      {
            path: '/',
            element: <MainLayout></MainLayout>,
            children: [
                  {
                        path: '/akash/login',
                        element: <Login></Login>
                  },
                  {
                        path: '/shomir/signin',
                        element: <SignIn></SignIn>
                  },

            ]
      }
])


export default router;