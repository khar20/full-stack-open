const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>

      <div>Capital {country.capital}</div>
      <div>Area {country.area}</div>

      <h2>Languages</h2>
      <ul>
        {Object.keys(country.languages).map(key =>
          <li key={key}>{country.languages[key]}</li>
        )}
      </ul>

      <img style={{ width: '200px' }} src={country.flags['svg']} alt={country.flags.alt}></img>
    </div>
  )
}

export default Country