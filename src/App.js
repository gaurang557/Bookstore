import React, { useState } from 'react';
import Login from "./pages/login.js"
import Signup from "./pages/signup.js"
import Home from "./pages/home.js"
import Publish from "./pages/publish.js"
function App() {

    const [dismap,setdismap]=useState({home:true,signup:false,login:false,publish:false})
    const [userid,setuserid]= useState("")
    function handleClick(e){
      
      setdismap({home:false,signup:false,login:false,publish:false,[e.target.name]:true})
    }
    function mediator(arg,userid){
      setuserid(userid)
      setdismap({home:false,signup:false,login:false,publish:true})
    }
    let styles={"backgroung-color":"green"}
    return (
      <div className='main'>
        <div className='navbar'>
          <button onClick={handleClick} name="home">Home</button>
          <button onClick={handleClick} name="signup">Signup</button>
          <button onClick={handleClick} name="login">Login</button>
        </div>
        {dismap.home && <Home   />}
        <Signup display={dismap["signup"]}/>
        <Login display={dismap["login"]} setloggedin={mediator} />
        <Publish display={dismap["publish"]} userid={userid}/>
  
      </div>
    );
}

export default App;