const BASE_URL = "https://api.frankfurter.app/";

export const getCurrencies = async () => {
  const response = await fetch(`${BASE_URL}currencies`);
  const data = await response.json();
  console.log('desde fetching: ', data);
  return '';
}
