
import Navbar from './components/Navbar/Navbar';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase.config";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {useEffect} from "react"
import { Routes, Route } from "react-router-dom";
import { RoutesPath } from "./routes/RoutesPath";
import "./App.css"

function App() {
//  const navigate = useNavigate()
  //const [user, setUser] = useState(null);
  //const userAuth = ()=>{
  
  //try {
     //onAuthStateChanged(auth, (user) => {
  //if (user) {
   // const uid = user.uid;
//setUser(user,uid)

  //} else {
    //setUser(null)
  //}})
   //} catch (error) {
     //console.log(error)
   //}
  //}

  //useEffect(()=>{
    //userAuth()
 // }, navigate())

  return (
    <div className='app'> 
      <h1 className='heading'>hello world</h1>
    </div>
  );
}

export default App;