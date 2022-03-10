
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


function CountryDetails() {
  const { alpha3Code } = useParams();
  const [detailsCountry, setDetailsCountry] = useState(null);

  const getDetails = async () => {
    const response = await axios.get(
      `https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`
    );
    setDetailsCountry(response.data);
  };

  useEffect(() => {
    getDetails();
  }, [alpha3Code]);

  if (!detailsCountry) {
    return <div>... Loading</div>;
  }

  return (
    <div>
      <h3>CountryDetails</h3>
      <div>
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${detailsCountry.alpha2Code.toLowerCase()}.png`}
          alt="country"
          width="150px"
        />
        
      </div>
      <div>
        <h3>{detailsCountry.name.official}</h3>
        <p>Capital: {detailsCountry.capital}</p>
        <p>Area: {detailsCountry.area}</p>
        <p>Borders: {detailsCountry.borders.map((eachBorderCountry) => {
            {/* console.log("estos son los paises fronterizos", eachBorderCountry) */}
            return eachBorderCountry
        
        })}</p>

      </div>
    </div>
  );
}

export default CountryDetails;