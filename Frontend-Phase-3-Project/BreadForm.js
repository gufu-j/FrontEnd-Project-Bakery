import React from "react";
import { useState } from "react";


function BreadForm({bID}){

    console.log(bID)
   // const [obj setObj] = useState({name:"", price:"", bakery_id:"", type_of_bread:""})

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [bakery_id, setBakeryId] = useState("")
    const [type_of_bread, setTypeOfbread] = useState("") 

    function handleSubmit(e){
        e.preventDefault();
        const newBread = {
            name:name,
            price:price,
            bakery_id: bakery_id,
            type_of_bread: type_of_bread
        }
        setName("")
        setPrice("" )
        setBakeryId("")
        setTypeOfbread("")
        if(newBread.name === ""){
            alert("You need to enter name, price, bakery_id and type of bread")
        }else{
        
            fetch(`http://localhost:9292/${bID}/breads`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newBread), 
        })
        .then((response)=> response.json())
        .then((newItem)=> console.log(newItem));
     }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <button type="submit">Add Bread</button>
                <input
                type="text"
                name="name"
                value={name}
                onChange={(e)=> setName(e.target.value)} 
                placeholder="name of bread"     
                />
                <input
                type= "text"
                name="price" 
                value={price}
                onChange={(e)=>setPrice(e.target.value)}
                placeholder="price of bread"
                />
                <input
                type="text"
                name="bakery_id"
                value={bakery_id}      
                onChange={(e)=> setBakeryId(e.target.value)}
                placeholder=" bakery branch number"
                />
                <input
                type="text"
                name="type_of_bread"
                value={type_of_bread}      
                onChange={(e)=> setTypeOfbread(e.target.value)}
                placeholder="type of bread"
                />
            </form>

        </div>
    )
}

export default BreadForm
