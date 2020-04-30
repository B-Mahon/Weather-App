import React from "react";

function Weather(props){
    return (
    <div className="weather__info">
            {props.city? <p className="weather__key">City: <span className="weather__value">{props.city}</span></p>: null}
            {props.temp? <p className="weather__key">Temperature: <span className="weather__value">{props.temp+'°F'}</span></p>: null}
            {props.humidity? <p className="weather__key">Humidity: <span className="weather__value">{props.humidity+'%'}</span></p>: null}
            {props.precp? <p className="weather__key">Description: <span className="weather__value">{props.precp}</span><img src={require('./images/'+props.precp+'.png')} alt='weather icon'></img></p>: null}
            {props.errorMsg? <p className="weather__key">Error: <span className="weather__error">{props.errorMsg}</span></p>: null}
    </div>
    );
}

export default Weather;