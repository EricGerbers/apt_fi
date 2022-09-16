import { FormTooltip } from "."
import { Tooltip } from "../../components/shared/Tooltip"

export const StakeStatistic = () => {
  return (
    <div className="container-info-stake">
      <div>
        <div className="stake-info-header">
          <h5>Lido statistics</h5>
        </div>
      </div>
      <div className="content-form">
        <div className="form-pool-note">
          <div className='form-pool-note__label'>
            Annual percentage yield
            <Tooltip
              content={(
                <div className="stake-tooltip">
                 Annual percentage yield is extrapolated from the price increase over a given period of time.<br /><br />b14-day APY(epoch 344–349): 5.57%<br />30-day APY(epoch 338–349): 5.55%<br />90-day APY(epoch 319–349): 5.32%<br />Since Launch(epoch 221–349): 5.6%
                </div>
              )}
              placement="bottom"            
            >
              <i className="bi bi-question-circle"></i>
            </Tooltip>
          </div>
          <div className="text-green-900">5.6%</div>
        </div>
        <div className="form-pool-note">
          <div className='form-pool-note__label'>
            Total staked with Lido
          </div>
          <div>4,004,489 SOL</div>
        </div>
        <div className="form-pool-note">
          <div className='form-pool-note__label'>
            Stakers
            <Tooltip
              content={
                <FormTooltip message='We do not and cannot indentify individuals; this number is the number of stSOL token accounts with a non-zero balance. In total there are 69,017 stSOL token accounts, but 52,147 of those are empty.' />
              }
              placement="bottom"            
            >
              <i className="bi bi-question-circle"></i>
            </Tooltip>
          </div>
          <div>16,870</div>
        </div>
        <div className="form-pool-note">
          <div className='form-pool-note__label'>
            stSOL market cap
          </div>
          <div>$131,747,670</div>
        </div>
      </div>
    </div>
  )
}