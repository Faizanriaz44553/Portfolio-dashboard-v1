import Login from "../pages/Login/Login.jsx";
import AddProjects from "../pages/Add-Projects/Add-Projects.jsx";
import AddAbout from "../pages/Add-About/Add-About.jsx";
import AddCertificate from "../pages/Add-Certificate/Add-Certificate.jsx";
import AddHeader from "../pages/Add-Header/Add-Header.jsx";
import Comments from "../pages/Comments/Comments.jsx";
import ProtectedRoute from "../components/ProtectedRoute.jsx";
import GuestRoute from "../components/GuestRoute.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";

const RoutesPath = [
  {
    path: "/",
    element: (
    <GuestRoute>
      <Login />
    </GuestRoute>
  ),
  },
  {
    path: "/add-projects",

    element: (
      <ProtectedRoute>
        <Navbar/>
        <AddProjects />
      </ProtectedRoute>
    ),
  },
  {
    path: "/add-about",
    element: (
      <ProtectedRoute>
        <Navbar/>
        <AddAbout/>
      </ProtectedRoute>
    ),
  },
  {
    path: "/add-certificate",
    element:(
      <ProtectedRoute>
        <Navbar/>
        <AddCertificate />
      </ProtectedRoute>
    ),
  },
  {
    path: "/add-header",
    element: (
      <ProtectedRoute>
        <Navbar/>
        <AddHeader/>
      </ProtectedRoute>
    ),
  },
  {
    path: "/comments",
    element:(
      <ProtectedRoute>
        <Navbar/>
        <Comments/>
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
     element: (
    <GuestRoute>
      <Login />
    </GuestRoute>
  )
  },
];

export default RoutesPath;
