import '../WeatherForecast/WeatherForecast.css';

const WeatherData = (props) => {
    return (
        <div>
            {props.day} {props.conditions} {props.time}
        </div>  
    )
}

export default WeatherData;