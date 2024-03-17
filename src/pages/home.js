import React ,{useState} from "react";


function Home() {
    const [books,setbooks]= useState(()=>JSON.parse(localStorage.getItem("books")) || {})
    console.log(books)
    let arr= []
    for(let user in books){
        books[user].map(ele=>{arr.push(ele)})
    }
    arr= arr.sort(()=> Math.random()-0.5)

    return(
        <div className="card-container">
            <h2 className="welcome">Welcome to Bookstore</h2>
            <h3 className="heading">Below you will find all the books published by users</h3>
            <div>

            <div className="row books-container">
            {arr.map(
                ele=>{
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
                }
                )}
            </div>
        </div>
            </div>
    )
    
}

export default Home;