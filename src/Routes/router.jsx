import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import JobDetails from "../Pages/JobDetails";
import PrivetRoutes from "./PrivetRoutes";
import JobApply from "../Pages/JobApply";
import MyApplication from "../Pages/MyApplication";
import AddJob from "../Pages/Add job/AddJob";
import MyPostedJobs from "../Pages/MyPostedJobs";
import ViewApplications from "../Pages/ViewApplications";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
        {index:true,
            element:<Home></Home>
        },
        {
          path:"/jobs/:id",
          element:<JobDetails></JobDetails>,
          loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)
        },
        {
          path:"jobApply/:id",
          element:<PrivetRoutes><JobApply></JobApply></PrivetRoutes>
        },
        {
          path:"myApplications",
          element:<PrivetRoutes><MyApplication></MyApplication></PrivetRoutes>
        },
        {
          path:"myPostedJobs",
          element:<PrivetRoutes><MyPostedJobs></MyPostedJobs></PrivetRoutes>
        },
        {
          path:"applications/:job_id",
          element:<PrivetRoutes><ViewApplications></ViewApplications></PrivetRoutes>,
          loader:({params})=>fetch(`http://localhost:3000/applications/job/${params.job_id}`)
        },
        {
          path:"addJob",
          element:<PrivetRoutes><AddJob></AddJob></PrivetRoutes>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
            path:"/login",
            element:<Login></Login>
        }
    ]
  },
]);


export default router;