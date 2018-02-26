export const getDateFromString = dateString => {
  const date = new Date(dateString);
  const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

export const getBDTCurrency = amount => 
  new Intl.NumberFormat('en-US', { 
    style: 'currency', 
    currency: 'BDT' 
  }).format(amount);
