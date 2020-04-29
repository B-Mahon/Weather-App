import React,{ useState } from "react";

function Form(props){

var [zip,setZip] = useState("");
var [submitZip,setSubmitZip] =useState("");

function handleClick(event){
    setSubmitZip(submitZip=zip);
    props.getWeather(submitZip);
    event.preventDefault();
}

function handleChange(event){ 
     setZip(event.target.value);
 }


return(
    
    <form onSubmit={handleClick}>
    <input 
    onChange={handleChange}
    placeholder="Zip Code"
    type="text" 
    />
    <button type="submit">Get Weather</button>
    </form>);
}
        


export default Form;