import { useState } from "react";


function Input() {
    const [name,setName]= useState('');
    const [Address,setAddress]=useState('');
    
    const handleClick=(e)=>{
        const student={name,Address}
        e.preventDefault();
        fetch("http://localhost:8080/Web1/add",{
            method:"POST",
            headers:{"content-type":"Application/Json"},
            body:JSON.stringify(student)
        }).then(alert("new student added"));
    }

    return(
        <div className="input-form">
            <div className="form">
                <label>Name</label>
                <input type="text"value={name} onChange={(e)=>setName(e.target.value)}></input><br></br>
                <label>Address</label>
                <input type="text" value={Address} onChange={(e)=>setAddress(e.target.value)}></input><br></br>
                
                <button onClick={handleClick}>Submit</button>
               
            </div>
        </div>

    );
    
}

export default Input;