import React, {useState,useEffect} from "react";
import axios from "axios";
import {Link,Router} from "react-router-dom";
import SecondPage  from "./secondpage";


function FirstPage(){

    const [tasks,settasks]= useState([])

    useEffect(()=> {
        axios.get('https://api.dev.classforma.com:5010/get_app_tasks?app_id=menu_parser')
        .then(res=>{
           // console.log(res)
            settasks(res.data.tasks)
        })
        .catch(err=>{
            console.log(err)
        })
        
    },[])

       

    return (
    <div className="firstpage">
        <h1 >Documents:</h1>
        <ul>
           
            {
                
                tasks.map((task,index)=>(
                    <li>
                   <Link to='/secondpage' state={{id: task.task_uuid}}>    
                        Sample document {index+1}  <br/>
                    </Link>
                   </li>
                ))
            
            }
            
        </ul>
    </div>
    )
}
export default FirstPage;