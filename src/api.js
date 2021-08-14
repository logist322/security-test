import defaultCurrencies from './defaultCurrencies';

const storage = window.localStorage;

const getCommission = (currency, sum) => {
  return currency.commission.type === 'abs' ? currency.commission.value : sum * currency.commission.value / 100;
}

const setCurrencies = (currencies) => {
  storage.setItem('currencies', JSON.stringify(currencies));
};

export const getCurrencies = () => {
  if (!storage.getItem('currencies')) {
    setCurrencies(defaultCurrencies);
  }

  return JSON.parse(storage.getItem('currencies'));
};

export const depositCurrency = (currencyToDeposite, sum) => {
  const depositedCurrencies = getCurrencies().map(currency => {
    if (currency.name !== currencyToDeposite || currency.minsum > sum) return currency
    
    const sumToDeposite = sum - getCommission(currency, sum);

    currency.count += sumToDeposite;

    return currency;
  });

  setCurrencies(depositedCurrencies);

  return getCurrencies();
};

export const withdrawalCurrency = (currencyToWithdrawal, sum) => {
  const withdrawaledCurrencies = getCurrencies().map(currency => {
    if (currency.name !== currencyToWithdrawal) return currency

    const sumToWithdrawal = sum + getCommission(currency, sum);

    if (currency.count < sumToWithdrawal) return currency
    
    currency.count -= sumToWithdrawal;
    
    return currency;
  });

  setCurrencies(withdrawaledCurrencies);

  return getCurrencies();
};
