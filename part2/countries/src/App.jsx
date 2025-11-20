import { useState, useEffect } from 'react'

import countryService from './services/countries'

import Filter from './components/Filter'
import Countries from './components/Countries'

function App() {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    countryService
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
      })
      .catch(error => {
        console.error('Error fetching countries:', error)
      })
  }, [])

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  )

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <>
      <Filter value={filter} onChange={handleFilterChange} />
      <Countries countries={filteredCountries} />
    </>
  )
}

export default App
