import { Apricot, Atrix, Francium, Hbb, Katana, Larix, Mer, Orca, Port, Psy, Ray, Rin, Sny, Sol, Solend, STSol, Usdc, Usdh, Usdt, WBTC, WETH, WHETH, WLDO, WSTETH } from '../icons/tokens'

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

export const getPoolIcon = (type) => {
  switch(type){
    case 'stSOL': { return <STSol /> }
    case 'Hubble':
    case 'HBB': { return <Hbb /> }
    case 'Mercurial':
    case 'MER': { return <Mer /> }
    case 'Orca':
    case 'Orca Whirlpool':
    case 'ORCA': { return <Orca /> }
    case 'Raydium':
    case 'RAY': { return <Ray /> }
    case 'Aldrin':
    case 'RIN': { return <Rin /> }
    case 'Synthetify':
    case 'SNY': { return <Sny /> }
    case 'SOL': { return <Sol /> }
    case 'USDC': { return <Usdc /> }
    case 'USDH': { return <Usdh /> }
    case 'USDT': { return <Usdt /> }
    case 'wBTC': { return <WBTC /> }
    case 'wETH': { return <WETH /> }
    case 'whETH': { return <WHETH /> }
    case 'wLDO': { return <WLDO /> }
    case 'wstETH': { return <WSTETH /> }      
    case 'Katana': { return <Katana />}
    case 'Psy Finance': { return <Psy />}
    case 'Apricot': { return <Apricot />}
    case 'Francium': { return <Francium />}
    case 'Port': { return <Port />}
    case 'Larix': {return <Larix />}
    case 'Solend': {return <Solend />}
    case 'Atrix': {return <Atrix />}
    default: return null
  }
}