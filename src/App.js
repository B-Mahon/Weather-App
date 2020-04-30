import React, { useState} from "react";
import Heading from "./Heading"
import Form from "./Form";
import Weather from "./Weather"
import "./App.css";
import { Container, Row, Col,Spinner } from 'reactstrap';

function App(){
  var [load,isLoading] = useState(false);
  var [weather,setWeather] = useState({
    city:"",
    temp:"",
    humidity:"",
    precp:"", 
    errorMsg:undefined
 });

  const API_KEY=process.env.REACT_APP_API_KEY;
  

  const getWeather = async(zip) => {
    zip=zip.trim();  
    if(zip === ''){
      setWeather({errorMsg:"No zip code value entered"});
     }
    
    else if(isNaN(zip) === true){
      setWeather({errorMsg:"Zip code can only contain numeric values"}); 
    }

    else{     
      isLoading(load=true);
      try{
        
        //promises if error jump to catch block 
        let apiCall = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${API_KEY}&units=imperial`);
        let data = await apiCall.json();
        
        //if no errors set the weather 
        setWeather({
        city:data.name,
        temp:data.main.temp,
        humidity:data.main.humidity,
        precp:data.weather[0].main
        }); 
       }
      catch (e){
        setWeather({errorMsg:'Invalid zip code'});        
      } 
      
      

    isLoading(load=false);
  }

    
    
  }

  return(
    
      <Container>
      <Row>
        <Col xs="5" className="title-container">
          <Heading/>
        </Col>
        <Col xs="7" className="form-container">
          <Form getWeather={getWeather}/>
          {load?<Spinner animation="border" variant="primary" />:<Weather city={weather.city} humidity={weather.humidity} precp={weather.precp} temp={weather.temp} errorMsg={weather.errorMsg}/>}
        </Col>
      </Row>
    </Container>

    );
}

export default App;
