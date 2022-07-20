const Country = ({ country }) => {
    return (
        <>
            <h2>{country.name.common}</h2>
            <p>capital {country.capital[0]} <br />
            area {country.area}</p>

            <h3>languages</h3>
            <ul>
                {Object.entries(country.languages).map(language => {
                    return (
                        <li>{language[1]}</li>
                    )
                })}
            </ul>
            <p>
                <img src={country.flags.svg} alt={`The flag of ${country.name.common}`} width="200px" border="1px" />
            </p>
        </>
    )
}

export default Country