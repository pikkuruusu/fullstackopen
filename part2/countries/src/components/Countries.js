const Countries = ( {countries} ) => {
    return (
        <>
            {
                (countries.length <= 10 
                ? countries.map( country =>
                    <div key={country.name.common}>{country.name.common}</div>
                    )
                : null
                )
            }
        </>    
    )
}

export default Countries