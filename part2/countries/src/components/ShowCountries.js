import { useState } from "react"

import Country from "./Country"
import Countries from "./Countries"

const ShowCountries = ( {countries, displaySingle, setDisplaySingle} ) => {
    const [singleCountry, setSingleCountry] = useState({})

    if (countries.length === 1) {
        return (
            <>
                <Country country={countries[0]} />
            </>
        )
    } else {
        return (
            <>
                <Countries countries={countries}  
                    setDisplaySingle={setDisplaySingle}
                    setSingleCountry={setSingleCountry}/>
                {(displaySingle
                    ? <Country country={singleCountry} />
                    : <></>
                )}
                
            </>
        )
    }
}

export default ShowCountries