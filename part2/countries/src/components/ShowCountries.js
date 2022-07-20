import Country from "./Country"
import Countries from "./Countries"

const ShowCountries = ( {countries} ) => {
    if (countries.length === 1) {
        return (
            <>
                <Country country={countries[0]} />
            </>
        )
    } else {
        return (
            <>
                <Countries countries={countries} />
            </>
        )
    }
}

export default ShowCountries