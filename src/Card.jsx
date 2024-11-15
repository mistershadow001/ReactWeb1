import { useEffect, useState } from "react";


function Card() {
    const [students ,setStudents] = useState([]);
    useEffect((e)=>{
        fetch("http://localhost:8080/Web1/show").then((res)=>res.json())
        .then((result)=>{setStudents(result)})
        .catch((error)=>console.error("Error=",error));
    },[]);

    return(
        <>
        <div className="Card">
            <h3>All Students</h3>
            {students.map((student,index)=>(
            <div key={index}>
                <h4>
                {student.name}
                </h4><br></br>
                

                <h4>
                {student.address}
                </h4><br></br>
                

            </div>
            ))};
        </div>
        </>
    );
    
}

export default Card;