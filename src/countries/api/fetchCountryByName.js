export async function fetchCountryByName(name) {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);

    if (response.ok) {
      const data = await response.json();

      const countryData = data.map((country) => {
        return {
          name: country.name.common,
          flag: country.flags.svg,
          topLevelDomain: country.tld[0],
          capital: country.capital[0],
          region: country.region,
          subregion: country.subregion,
          languages: Object.values(country.languages),
          borders: country.borders,
          population: country.population,
        };
      });

      return countryData[0];
    } else {
      console.error(response.statusText);
    }
  } catch (error) {
    console.error(error);
  }
}
