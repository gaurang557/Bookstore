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
            <h1>Welcome to bookstore</h1>
            <div className="row">
            {arr.map(
                (ele)=>{
                    return(
                        <div key={ele[5]} className="card column">
                            <div className="text">
                                <h2> {ele[0]} </h2>
                                <h4>author:- {ele[1]} </h4>
                                <h4>price:- {ele[2]}</h4>
                                <h4><i> published by</i> {ele[3]}</h4>

                            </div>
                            <h4><i>Date of publish</i> {ele[4]}</h4>
                        </div>
                    )
                }
            )}
            </div>

        </div>
    )
    
}

export default Home;