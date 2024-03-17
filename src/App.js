import React, { useState, useContext } from 'react';
import Login from "./pages/login.js"
import Signup from "./pages/signup.js"
import Home from "./pages/home.js"
import Publish from "./pages/publish.js"

export const loggedIn = React.createContext()

export default function App() {

    const [dismap,setdismap]=useState({home:true,signup:false,login:false,publish:false})
    const [userid,setuserid]= useState("")
    function handleClick(e){
      
      setdismap({home:false,signup:false,login:false,publish:false,[e.target.name]:true})
    }
    function mediator(arg,userid){
      setuserid(userid)
      setdismap({home:false,signup:false,login:true,publish:true})
    }
    const [loginInfo, setloginInfo] = useState({loggedinUser:"",loggedin:false})

    return (
      <loggedIn.Provider value={loginInfo}>
          <div className='main'>
            <div className='navbar'>
              <button className='btn-nav' onClick={handleClick} name="home">Home</button>
              <button className='btn-nav' onClick={handleClick} name="signup">Signup</button>
              <button className='btn-nav' onClick={handleClick} name="login">Login</button>
            </div>
            {dismap.home && <Home/>}
            <Signup display={dismap["signup"]}/>
            <Login display={dismap["login"]} setloggedin={mediator} setloginInfo={setloginInfo} />
            <Publish display={dismap["publish"]} userid={userid}/>      
          </div>
      </loggedIn.Provider>
    );
}

// export default App;