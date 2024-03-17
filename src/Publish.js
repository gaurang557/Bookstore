import React, { useEffect ,useState} from "react"

export default function(props){

    const [items, setItems] = useState([]);

    useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
        setItems(items);
    }
    }, []);

    useEffect(()=>{
        localStorage.setItem("items",JSON.stringify(items))
    },[items])


    let [data,setData]=React.useState({
        price:0,
        name:"",
        quantity
    })

    function handleClick(event){
        if(event.target.name=="submit"){
            
            return
        }
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }
    

    return (
        <>
        <h1>Enter a book in our store</h1>
        <form onSubmit={handleSubmit}>
            <input 
            type="number"
            name="price"
            onChange={handleClick}
            value={price}
            ></input>
            <input 
            type="text"
            name="name"
            value={name_of_book}
            onChange={handleClick}            
            ></input>
            <input 
            type="number"
            name="quantity"
            value={quantity}
            onChange={handleClick}            
            ></input>
            <button type="submit" onClick={handleClick} name="submit">Submit</button>
        </form>

        </>
    )
}