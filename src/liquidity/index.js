import { Button } from "../../components/shared/Form/Button"
import { dataLiquidity } from "../../data/liquidity"
import { currencyFormat } from "../../utils/function"
import {Tooltip} from '../../components/shared/Tooltip'
import { LiquidityItem } from "./item"

export const LiquidityContainer = () => {  
  return (
    <div className="page-liquid container">
      <div className="liquid-header">
        <h1>Solana DeFi Integrations</h1>
        <p>Use stSOL across the Solana DeFi ecosystem</p>
      </div>
      <div className="liquid-items">
        {
          dataLiquidity.map(item => <LiquidityItem item={item} key={item.PoolId}/>)
        }
      </div>
    </div>
  )
}