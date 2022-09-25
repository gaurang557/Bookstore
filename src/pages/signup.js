import React, { useEffect, useState   } from "react"
function Signup({display,setdismap}){
    let [data,setData]= useState({
        userid:"",
        password:"",
        confirmpass:""
    })

    let [msg,setmsg]= useState(["",false])
    const [users,setusers] = useState(()=>JSON.parse(localStorage.getItem("users")) || {})
    
    useEffect(()=>localStorage.setItem("users",JSON.stringify(users)),[users])
    
    function handleSubmit(e){
        e.preventDefault()
        if(data.password.length<6){
            setmsg(["Password should be atleast 6 characters long",true])
            return
        }
        if(users.hasOwnProperty(data.userid)===true){
            setmsg(["Userid already exists, kindly login", true])
            return
        }
        if (data.confirmpass=== data.password ){
            setmsg(["Successfully signed up!",true])
            setusers(prevData=> {
                return {...prevData, [data.userid]:data.password}
            })

        }else{
            setmsg(["Passwords doesn't match",true])
        }
        console.log(users)
    }


    function handleChange(e){
        setData(prevdata=>({
                ...prevdata,
                [e.target.name]: e.target.value
            })
        )
    }
    if(display===true){
    return (
        <div>
        
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
                <input 
                type="password"
                placeholder="confirm password"
                name="confirmpass"
                value={data["confirmpass"]}
                onChange={handleChange}            
                ></input>
                <button type="submit" name="submit">Submit</button>
            </form>
        </div>
        {msg[1] &&  <h1 className="message">{msg[0]}</h1>}
        </div>
        )
    }else{
        return <div></div>
    }
}

export default Signup;