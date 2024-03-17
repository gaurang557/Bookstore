import React ,{useState} from "react";
import {nanoid} from "nanoid";

export default function({display,userid}){
    const [data,setData]= useState({
        book_name:"",
        price:"",
        author:""
    })
    const [msg,setmsg]=useState(false)
    // localStorage.clear()
    
    const [books,setbooks]= useState(()=>JSON.parse(localStorage.getItem("books")) || {})

    function handleChange(e){
        setData((prevData)=>{return {...prevData,[e.target.name] : e.target.value}})
    }

    async function handleSubmit(e){
        e.preventDefault()
        console.log(data)
        for(let d in data){
            if(data[d]==="" || data[d]===0){
                setmsg(true)
                return
            }
        }
        setmsg(false)

        let date=new Date()
        if(books.hasOwnProperty(userid)===true){
            await books[userid].push([data.book_name,data.author,data.price,userid,date.toDateString(),nanoid()])
        }else{
            books[userid]=[[data.book_name,data.author,data.price,userid,date.toDateString(),nanoid()]]
        }
        localStorage.setItem("books", JSON.stringify(books))
        setbooks({...books})
    }
    if(display ===true){
        return(
            <div >
                <h3 className="container">You are logged in, you can enter your books from the form below</h3>
                <div className="container">

                <form onSubmit={handleSubmit}>
                    <input 
                    type="text"
                    name="book_name"
                    placeholder="Name of Book"
                    onChange={handleChange}
                    value={data["book_name"]}
                    ></input>
                    <input 
                    type="number"
                    name="price"
                    placeholder="Price of book"
                    value={data["price"]}
                    onChange={handleChange}
                    ></input>
                    <input 
                    type="text"
                    name="author"
                    placeholder="Author of the book"
                    value={data["author"]}
                    onChange={handleChange}
                    ></input>
                    
                    <button className="btn-submit" type="submit" name="submit">Publish</button>
                </form>
                {msg && <h3>Fields cannot be empty</h3>}
                </div>
                {books[userid] && <div >
                    <h3 className="txt-center">Books Published by you</h3>
                    <div className="row books-container">
                    {books[userid].map(ele=>{
                        return(
                            <div key={ele[5]} className="card column">
                                <div className="text">
                                    <h4 className="book-title"> {ele[0]} </h4>
                                    <div className="auth-div">
                                        <h4 className="by">by</h4>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <h4 className="author"> {ele[1]}</h4>
                                    </div>
                                    <h5> price:- Rs. {ele[2]}</h5>
                                    <h5><i> published by</i> {ele[3]}</h5>
                                    <h5><i>Date of publish</i> {ele[4]}</h5>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                </div>}
            </div>
        )
    }else{
        return <div></div>
    }
    
}