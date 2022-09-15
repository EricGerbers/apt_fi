export const stringToHex = (text) => {
  const encoder = new TextEncoder();
  const encoded = encoder.encode(text);
  return Array.from(encoded, (i) => i.toString(16).padStart(2, "0")).join("");
}

export const splitAddress = (address) => {
  if (!address || address === '') return;
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
};


export const currencyFormat = (num, toFixed = 0) => {
  if (!num) {
    return '0'
  }
  const parseNum = +num
  const newFixed = parseNum.toString().includes('.') ? 2 : toFixed
  return parseNum.toFixed(newFixed).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}