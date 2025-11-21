import Country from "./Country"

const Countries = ({ countries, onClick }) => {
  if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>
  }

  if (countries.length > 1 && countries.length <= 10) {
    return (
      countries.map(country =>
        <div key={country.cca3}>{country.name.common} <button onClick={() => onClick(country.name.common)}>Show</button></div>
      )
    )
  }

  if (countries.length === 1) {
    return <Country country={countries[0]} />
  }

  return <div>No matches found</div>
}

export default Countries