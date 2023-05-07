import Base from "../Basic/base";
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

function Editstudent({students,setstudents}){
    let history=useHistory()
    let {id}=useParams();
    let updatestudent=students[id];
    let [name,setname]=useState("");
    let [batch,setbatch]=useState("");
    let [gender,setgender]=useState("");
    let [qualification,setqualification]=useState("");

    useEffect(()=>{
        setname(updatestudent.name)
        setbatch(updatestudent.batch)
        setgender(updatestudent.gender)
        setqualification(updatestudent.qualification)
    },[updatestudent])
    function update(){
        let obj={
            name,
            batch,
            gender,
            qualification
        };
        students[id]=obj;
        setstudents([...students])
        history.push("/")
    }

    return(
        <Base
        title="Student List"
        content="Students list is available here"
        >
        <div>
            <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e)=>setname(e.target.value)}
            /> 
            <input
            type="text"
            placeholder="Batch"
            value={batch}
            onChange={(e)=>setbatch(e.target.value)}
            /> 
            <input
            type="text"
            placeholder="Gender"
            value={gender}
            onChange={(e)=>setgender(e.target.value)}
            /> 
            <input
            type="text"
            placeholder="Qualification"
            value={qualification}
            onChange={(e)=>setqualification(e.target.value)}
            /> 
            <button className="edit" onClick={()=>update()}>Update</button>
        </div>
        </Base>
    );
}

export default Editstudent;