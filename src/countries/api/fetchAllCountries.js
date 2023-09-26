export async function fetchAllCountries() {
  const url = 'https://restcountries.com/v3.1/all';

  try {
    const response = await fetch(url);

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
