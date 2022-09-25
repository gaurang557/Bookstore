import React, {  useState } from "react"

export default function({display,setloggedin}){
    const [data,setData]= useState({
        userid:"",
        password:""
    })
    function getusers(){
        return JSON.parse(localStorage.getItem("users")) || {}
    }

    const users = getusers()
    const [msg,setmsg]= useState(["",false])
    
    function handleChange(e){
        setData((prevData)=>{return {...prevData,[e.target.name] : e.target.value}})
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(users)
        if(users.hasOwnProperty(data.userid)===true){
            if(data.password===users[data.userid]){
                setloggedin(true,data.userid)
                setmsg(["",false])
            }else{
                setmsg(["Incorrect password",true])
            }
        }else{
            setmsg(["User Doesn't exist ,kindly signup first",true])
        }

    }

    if(display===true){
        return (
            <div>
            
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                name="userid"
                placeholder="user id"
                onChange={handleChange}
                value={data["userid"]}
                ></input>
                <input 
                type="password"
                name="password"
                placeholder="password"
                value={data["password"]}
                onChange={handleChange}            
                ></input>
                
                <button type="submit" name="submit">Submit</button>
            </form>
            {msg[1] && <h1>{msg[0]}</h1>}
    
            </div>
        )
    }else{
        return <div></div>
    }
    
}