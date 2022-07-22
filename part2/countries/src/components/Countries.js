const Countries = ( {countries, setDisplaySingle, setSingleCountry} ) => {
    const handleshowCountryClick = (country) => {
        setDisplaySingle(true)
        setSingleCountry(country)
    }
    
    return (
        <>
            {
                (countries.length <= 10 
                ? countries.map( country =>
                    <div key={country.name.common}>
                        {country.name.common}
                        <button onClick={() => handleshowCountryClick(country)}>show</button>
                    </div>
                    )
                : null
                )
            }
        </>    
    )
}

export default Countries