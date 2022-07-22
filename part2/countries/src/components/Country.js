
import { useState, useEffect } from "react"
import axios from "axios"

const Country = ({ country }) => {
    const [weatherData, setWeatherData] = useState({})
    const [iconUrl, setIconUrl] = useState('')

    const apiRequestUrl = "https://api.openweathermap.org/data/3.0/onecall?"
    const capitalLatLng = `lat=${country.capitalInfo.latlng[0]}&lon=${country.capitalInfo.latlng[1]}`
    const excludes = "&exclude=minutely,hourly,daily,alert"
    const apiKey = process.env.REACT_APP_WEATHER_API

    useEffect(() => {
        axios
        .get(`${apiRequestUrl}${capitalLatLng}${excludes}&units=metric&appid=${apiKey}`)
        .then(response => {
            setWeatherData(response.data.current)
            setIconUrl(`http://openweathermap.org/img/wn/${response.data.current.weather[0].icon}@2x.png`)
        })  
    }, [capitalLatLng, apiKey])

    return (
        <>
            <h2>{country.name.common}</h2>
            <p>capital {country.capital[0]} <br />
            area {country.area}</p>

            <h3>languages</h3>
            <ul>
                {Object.entries(country.languages).map(language => {
                    return (
                        <li key={language[1]}>{language[1]}</li>
                    )
                })}
            </ul>
            <p>
                <img src={country.flags.svg} alt={`The flag of ${country.name.common}`} width="200px" border="1px" />
            </p>
            <h2>Weather in {country.capital}</h2>
            <p>Temperature {weatherData.temp} Celcius</p>
            <p><img src={iconUrl} alt="" /></p>
            <p>wind {weatherData.wind_speed} m/s</p>
        </>
    )
}

export default Country