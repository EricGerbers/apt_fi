export const stringToHex = (text) => {
  const encoder = new TextEncoder();
  const encoded = encoder.encode(text);
  return Array.from(encoded, (i) => i.toString(16).padStart(2, "0")).join("");
}

export const splitAddress = (address) => {
  if (!address || address === '') return;
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
};
