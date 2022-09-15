import { Button } from "../../components/shared/Form/Button"
import { dataLiquidity } from "../../data/liquidity"
import { Apricot, Atrix, Francium, Hbb, Katana, Larix, Mer, Orca, Port, Psy, Ray, Rin, Sny, Sol, Solend, STSol, Usdc, Usdh, Usdt, WBTC, WETH, WHETH, WLDO, WSTETH } from '../../icons/tokens'
import { currencyFormat } from "../../utils/function"


export const LiquidityContainer = () => {
  const getPoolIcon = (type) => {
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
  return (
    <div className="page-liquid container">
      <div className="liquid-header">
        <h1>Solana DeFi Integrations</h1>
        <p>Use stSOL across the Solana DeFi ecosystem</p>
      </div>
      <div className="liquid-items">
        {
          dataLiquidity.map(item => (
            <div className="liquid-item" key={item.PoolId}>
              <div className="background-card" />
              <div className="content-item">
                <div className="card-header">
                  <div className="card-info">
                    <div className="card-token">
                      <div className="card-token-img-left">{getPoolIcon(item.PoolLeftToken)}</div>
                      <div className="card-token-img-right">{getPoolIcon(item.PoolRightToken)}</div>                      
                      {item.PoolLeftToken}{!!item.PoolRightToken ? ` - ${item.PoolRightToken}` : ''}
                    </div>
                    <div className="card-price">
                      {!!item.totalApr ? item.totalApr.toFixed(2) : 0}%APT
                    </div>
                    <div className="card-price-usd">
                      ${!!item.totalValueLockedInUsd ? currencyFormat(item.totalValueLockedInUsd) : 0} TVL
                    </div>
                  </div>
                  <div className="card-project">
                    {getPoolIcon(item.Project)}
                  </div>
                </div>
                <div className="card-bottom">
                  <Button className='button-primary'>Supply <i class="bi bi-box-arrow-up-right"></i></Button>
                  <Button className='button-ternary'>Swap <i class="bi bi-box-arrow-up-right"></i></Button>
                </div>             
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}