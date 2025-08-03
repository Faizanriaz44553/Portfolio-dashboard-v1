import { useEffect , useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../.config/firebase.config.js";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import RoutesPath from "./routes/index.jsx";


const App = ()=>{
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

       useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                navigate('/');
            }
        });

        return () => unsubscribe();
    }, [navigate]);
    const hideNavbarFooter = location.pathname === "/auth/login" || location.pathname === "/auth/signup";
  return (
    <div>
          <div>
      {!hideNavbarFooter ? <Navbar /> : null} 
      <div style={{width: "100%" , height: "55px" }}>

      </div>

      <Routes>
        {RoutesPath.map(({ path, element }, index) => (
           <Route key={index} path={path} element={element} />
        ))}
      </Routes>

      {!hideNavbarFooter ? <Footer /> :null}
    </div>
    </div>
  )
}
export default App;