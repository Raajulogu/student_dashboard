import { useHistory } from 'react-router-dom';
import Base from "../Basic/base";
import React, { useState } from 'react'

function Addstudent({students,setstudents}){
    let history = useHistory()
    let [name,setname]=useState("");
    let [batch,setbatch]=useState("");
    let [gender,setgender]=useState("");
    let [qualification,setqualification]=useState("");
    function add(){
        let obj={
            name,
            batch,
            gender,
            qualification
        };
        setstudents([...students,obj])
        history.push("/")
    }
    return(
        <Base
        title="Student List"
        content="Students list is available here"
        >
        <div className="input_box">
        <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e)=>setname(e.target.value)}
            className="input"
            /> 
            <br/>
            <input
            type="text"
            placeholder="Batch"
            value={batch}
            onChange={(e)=>setbatch(e.target.value)}
            className="input"
            /> 
            <br/>
            <input
            type="text"
            placeholder="Gender"
            value={gender}
            onChange={(e)=>setgender(e.target.value)}
            className="input"
            /> 
            <br/>
            <input
            type="text"
            placeholder="Qualification"
            value={qualification}
            onChange={(e)=>setqualification(e.target.value)}
            className="input"
            /> 
            <br/>
            <button className="add" onClick={()=>add()}>Add</button>
        </div>
        </Base>
    );
}

export default Addstudent;