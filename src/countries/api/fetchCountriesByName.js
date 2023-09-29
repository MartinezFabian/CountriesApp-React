export async function fetchCountriesByName(textSearched = '') {
  if (textSearched === '') return [];

  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${textSearched}`);

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
      return [];
    }
  } catch (error) {
    console.error(error);
  }
}
