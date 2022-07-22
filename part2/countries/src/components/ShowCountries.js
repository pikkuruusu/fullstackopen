import { useState } from "react"

import Country from "./Country"
import Countries from "./Countries"

const ShowCountries = ( {countries, displaySingle, setDisplaySingle} ) => {
    const [singleCountry, setSingleCountry] = useState({})

    const enableSingleCountry = displaySingle || (countries.length === 1)

    if (countries.length === 1) {
        
        return (
            <>
                <Country country={countries[0]} enableSingleCountry={enableSingleCountry} />
            </>
        )
    } else {
        return (
            <>
                <Countries countries={countries}  
                    setDisplaySingle={setDisplaySingle}
                    setSingleCountry={setSingleCountry}/>
                <Country country={singleCountry} 
                    enableSingleCountry={enableSingleCountry} />
            </>
        )
    }
}

export default ShowCountries