import './WeatherForecast.css';
import WeatherIcon from '../WeatherIcon/WeatherIcon.jsx';
import WeatherData from '../WeatherData/WeatherData.jsx';

const WeatherForecast = (props) => {
    return (
        <div className="weather">
        <h2><WeatherData day={props.day}/></h2>
        <WeatherIcon img={props.img} imgAlt={props.imgAlt}/>
        <p><span>conditions: </span><WeatherData conditions={props.conditions} /></p>
        <p><span>time: </span><WeatherData time={props.time} /></p>
        </div>  
    )
}

export default WeatherForecast;
