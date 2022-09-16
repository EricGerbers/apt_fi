import { Button } from "../../components/shared/Form/Button"
import { Tooltip } from "../../components/shared/Tooltip"
import { currencyFormat, getPoolIcon } from "../../utils/function"

export const LiquidityItem = ({item}) => { 
  return (
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
              <span>{!!item.totalApr ? item.totalApr.toFixed(2) : 0}%APT</span>
              <Tooltip content={<PoolTooltip item={item}/>} placement="right">
                <i class="bi bi-info-circle"></i>
              </Tooltip>
            </div>
            <div className="card-price-usd">
              ${!!item.totalValueLockedInUsd ? currencyFormat(item.totalValueLockedInUsd) : 0} TVL              
            </div>
          </div>
          <div className="card-project">
            <Tooltip content={item.Project} placement='bottom'>
              <span>{getPoolIcon(item.Project)}</span>
            </Tooltip>
          </div>
        </div>
        <div className="card-bottom">
          <Button className='button-primary'>Supply <i class="bi bi-box-arrow-up-right"></i></Button>
          <Button className='button-ternary'>Swap <i class="bi bi-box-arrow-up-right"></i></Button>
        </div>             
      </div>
    </div>
  )
}

const PoolTooltip = ({item}) => {
  return (
    <div className="liquid-content-tooltip">
      {
        !!item.EarnToken1Amount.trim() && !!item.EarnToken2Amount.trim() && (
          <div className="pool-symbol-container">          
            <div className="pool-symbol">{getPoolIcon(item.EarnToken1Symbol)} ≈ {item.EarnToken1Amount} {item.EarnToken1Symbol}/day rewards</div>
            <div className="pool-symbol">{getPoolIcon(item.EarnToken2Symbol)} ≈ {item.EarnToken2Amount} {item.EarnToken2Symbol}/day rewards</div>
          </div>
        )
      }
      <div>
        {item.apyDescription}
      </div>
    </div>
  )
}