import { useState, useEffect } from "react";
import axios from "axios";

import ShowCountries from "./components/ShowCountries";

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchFilter, setSearchFilter] = useState('')
  const [displaySingle, setDisplaySingle] = useState(false)

  const handleFilterChange = (e) => {
    setSearchFilter(e.target.value)
    setDisplaySingle(false)
  }

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const countriesToShow = countries.filter(country =>
    country.name.common.toLowerCase().includes(searchFilter.toLowerCase())
  )

  return (
    <div>
      <div>
        find countries <input value={searchFilter} onChange={handleFilterChange}/>
      </div>
        <ShowCountries countries={countriesToShow} 
          displaySingle={displaySingle}
          setDisplaySingle={setDisplaySingle}/>
    </div>
  );
}

export default App;