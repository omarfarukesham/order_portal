const currencyFormatter = (amount, currency = 'BDT') => {
  const formattedAmount = (amount || 0).toLocaleString('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formattedAmount;
};

export default currencyFormatter;
