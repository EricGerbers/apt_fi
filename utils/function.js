export const stringToHex = (text) => {
  const encoder = new TextEncoder();
  const encoded = encoder.encode(text);
  return Array.from(encoded, (i) => i.toString(16).padStart(2, '0')).join('');
};

export const splitAddress = (address) => {
  if (!address || address === '') return;
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
};

export const currencyFormat = (num, toFixed = 0) => {
  if (!num) {
    return '0';
  }
  const parseNum = +num;
  const newFixed = parseNum.toString().includes('.') ? 2 : toFixed;
  return parseNum.toFixed(newFixed).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

export const getPoolIcon = (type) => {
  switch (type) {
    case 'stSOL': {
      return './images/tokens/stsol.svg';
    }
    case 'Hubble':
    case 'HBB': {
      return './images/tokens/hbb.svg';
    }
    case 'Mercurial':
    case 'MER': {
      return './images/tokens/mer.svg';
    }
    case 'Orca':
    case 'Orca Whirlpool':
    case 'ORCA': {
      return './images/tokens/orca.svg';
    }
    case 'Raydium':
    case 'RAY': {
      return './images/tokens/ray.svg';
    }
    case 'Aldrin':
    case 'RIN': {
      return './images/tokens/rin.svg';
    }
    case 'Synthetify':
    case 'SNY': {
      return './images/tokens/sny.svg';
    }
    case 'SOL': {
      return './images/tokens/sol.svg';
    }
    case 'USDC': {
      return './images/tokens/usdc.svg';
    }
    case 'USDH': {
      return './images/tokens/usdh.svg';
    }
    case 'USDT': {
      return './images/tokens/usdt.svg';
    }
    case 'wBTC': {
      return './images/tokens/wbtc.svg';
    }
    case 'wETH': {
      return './images/tokens/weth.svg';
    }
    case 'ETH':
    case 'whETH': {
      return './images/tokens/wheth.svg';
    }
    case 'wLDO': {
      return './images/tokens/wldo.svg';
    }
    case 'wstETH': {
      return './images/tokens/wsteth.svg';
    }
    case 'Katana': {
      return './images/tokens/katana.svg';
    }
    case 'Psy Finance': {
      return './images/tokens/psy.svg';
    }
    case 'Apricot': {
      return './images/tokens/apricot.svg';
    }
    case 'Francium': {
      return './images/tokens/francium.svg';
    }
    case 'PORT':
    case 'Port': {
      return './images/tokens/port.svg';
    }
    case 'LARIX':
    case 'Larix': {
      return './images/tokens/larix.svg';
    }
    case 'SLND':
    case 'Solend': {
      return './images/tokens/solend.svg';
    }
    case 'Atrix': {
      return './images/tokens/atrix.svg';
    }
    case 'BTC': {
      return './images/tokens/btc.svg';
    }
    case 'NEAR': {
      return './images/tokens/near.svg';
    }
    case 'mSOL': {
      return './images/tokens/mSol.png';
    }
    default:
      return null;
  }
};
