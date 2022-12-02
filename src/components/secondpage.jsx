import React,{useEffect,useState} from 'react';
import { useLocation } from "react-router-dom";
import axios from "axios";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { Viewer,Worker } from '@react-pdf-viewer/core';
import { pdfjs } from 'react-pdf';
import  './secondpage.styles.css';

const SecondPage = () => {

    const location=useLocation();
    const {id}=location.state;

    const [content,setContent]=useState("");
    useEffect(()=>{
        axios.get(`https://api.dev.classforma.com:5010/task/task_file/get_file?field_key=menu&task_uuid=${id}`)
        .then(res=>{
            setContent(res.data.content)
        })
        .catch(err=>{
            console.log(err)
        })
    },[]);

    console.log(content);


    const base64toBlob = (data: string) => {
        const base64WithoutPrefix = data.substr('data:application/pdf;base64,'.length);
    
        const bytes = window.atob(base64WithoutPrefix);
        let length = bytes.length;
        let out = new Uint8Array(length);
    
        while (length--) {
            out[length] = bytes.charCodeAt(length);
        }
    
        return new Blob([out], { type: 'application/pdf' });
    };
    
    const blob = base64toBlob('data:application/pdf;base64,'+content);
    const url = URL.createObjectURL(blob);


    return (
    <>
    
    <div className="main">
        <div className="lableandboxes">
       <div className="lable">
       <h1 styles={{margin:"10px"}}>Lables</h1>
        <button className="button1" >NAME</button>
        <button className="button2" >TELEPHONE</button>
        </div>

        <div className="boxes">
        <h1>Boxes</h1>
        </div>


        </div>
        <div 
        style={{
            border: '1px solid rgba(0, 0, 0, 0.3)',
            height: '700px',
        }}
        className="pdf">
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
            <Viewer fileUrl={url} />
            </Worker>
        </div>
       
       </div>
    </>
    );
};

export default SecondPage;

