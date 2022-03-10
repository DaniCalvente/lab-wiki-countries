import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

// function CountriesList(props) {
//   // const {name} = props.eachCountryProps
//   console.log(props)
//   const {name, alpha3Code} = props.eachCountryProps

//   return (
//     <div>

//     <Link to={`/${alpha3Code}`}>{name.official}</Link>

//     </div>
//   )
// }

function CountriesList() {
  const [listOfCountries, setListOfCountries] = useState([]);
  const getCountries = async () => {
    const response = await axios.get(
      'https://ih-countries-api.herokuapp.com/countries'
    );
    setListOfCountries(response.data);
  };

  useEffect(() => {
    getCountries();
  }, []);

  if (!listOfCountries) {
    return <div>...Loading</div>;
  }
  return (
    <div>
      <h3>List of Countries</h3>

      {listOfCountries.map((eachCountry, index) => {
        return (
          <div id="countries">
            <div key={index + eachCountry.alpha3Code}>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`}
                alt="country"
                width="40px"
              />
              <br />
              <Link to={`/countries/${eachCountry.alpha3Code}`}>
                {eachCountry.name.official}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
