import '../WeatherForecast/WeatherForecast.css';

const WeatherIcon = (props) => {
    return (
        <div className="weather-icon">
            <img src={props.img} alt={props.imgAlt} />
        </div>  
    )
}

export default WeatherIcon;
