const BASE_URL = "https://api.frankfurter.app/";

const getCurrenciesNames = async (): Promise<Object> => {
  const response = await fetch(`${BASE_URL}currencies`);
  const data = await response.json();

  // let currenciesNames = Object.values(data);
  // console.log('desde fetching: ',  data);
  // return currenciesNames;
  
  return data;
}

const allCurrenciesFromOneCurrency = async (currency: number): Promise<Object> => {
  const response = await fetch(`${BASE_URL}latest?from=${currency}`);
  const data = await response.json();
  // console.log('desde fetching: ', data);
  return '';
}

const conversionCurrencies = async (amount: number, currencyOne: string, currencyTwo: string): Promise<Object> => {
  const response = await fetch(`${BASE_URL}latest?amount=${amount}&from=${currencyOne}&to=${currencyTwo}`);
  const data = await response.json();
  // console.log('desde fetching: ', data.rates[currencyTwo]);
  return data.rates[currencyTwo];
}

export {
  getCurrenciesNames,
  allCurrenciesFromOneCurrency,
  conversionCurrencies
}