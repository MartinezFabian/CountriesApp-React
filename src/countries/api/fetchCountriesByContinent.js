export async function fetchCountriesByContinent(continent) {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/region/${continent}`);

    if (response.ok) {
      const data = await response.json();

      const countries = data.map((country) => {
        return {
          key: country.cca3,
          name: country.name.common,
          flag: country.flags.svg,
        };
      });

      return countries;
    } else {
      console.error(response.statusText);
    }
  } catch (error) {
    console.error(error);
  }
}
