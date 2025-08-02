import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../.config/firebase.config.js";
import { useState } from "react";

const App = ()=>{
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const PrivateRoutes = ()=>{
    try{
      onAuthStateChanged(auth, (user)=>{
        if(user){
          setUser(user)
        }
        else{
          navigate("/login")
        }
      })
    } catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    PrivateRoutes()
  },navigate())
  return (
    <div>
      {user ? <h1>Hello world</h1> : navigate("/login")}
    </div>
  )
}
export default App;