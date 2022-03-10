import './App.css';
import Navbar from './components/Navbar';
// import countries from './countries.json';
// import { useState } from 'react';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';

// function App() {
//   const [listedCountries, setListedCountries] = useState(countries);

//   return (
//     <div className="App">
//       <Navbar />

//       <div id="country-page">
//       <div id="countries">
//          {listedCountries.map((eachCountry, index) => {
//           return (
//             <CountriesList
//               eachCountryProps={eachCountry}
//               key={index + eachCountry.alpha3Code}
//             />
//           );
//         })}
//       </div>

//       <div id="countryDetails">
//         <Routes>
//           <Route path="/countries/:alpha3Code" element={<CountryDetails />} />
//         </Routes>
//         </div>

//       </div>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="countries">
        <div>
          <CountriesList />
        </div>
        <div>
          <Routes>
            <Route path="/countries/:alpha3Code" element={<CountryDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
