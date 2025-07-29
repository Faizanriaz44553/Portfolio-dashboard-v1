import Login from "../pages/Login/Login.jsx";
import AddProjects from "../pages/Add-Projects/Add-Projects.jsx";
import AddAbout from "../pages/Add-About/Add-About.jsx";
import AddCertificate from "../pages/Add-Certificate/Add-Certificate.jsx";
import AddHeader from "../pages/Add-Header/Add-Header.jsx";
import Comments from "../pages/Comments/Comments.jsx";

const RoutesPath = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/add-projects",
    element: <AddProjects />,
  },
  {
    path: "/add-about",
    element: <AddAbout />,
  },
  {
    path: "/add-certificate",
    element: <AddCertificate />,
  },
  {
    path: "/add-header",
    element: <AddHeader />,
  },
  {
    path: "/comments",
    element: <Comments />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default RoutesPath;
