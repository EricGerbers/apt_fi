import { getPoolIcon } from "../../utils/function"
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from "react"
import { ModalSelectToken } from "./Modal"

export const FormSwap = ({fromToken, toToken, onSelect, onChange, fromAmount, toAmount}) => {
  const [toggleSwap, setToggleSwap] = useState(false)
  const [modalOpen, setModalOpen] = useState('')
  const handleChangeFrom = (e, type) => {
    console.log('e', e.target.value)
    onChange({
      from: fromAmount,
      to: toAmount,
      [type]: e.target.value
    })
  }
  const handleSwap = () => {
    setToggleSwap(!toggleSwap)
    onSelect({from: toToken, to: fromToken})
    onChange({from: '',to: ''})
  }
  return (
    <>
      <div className="container-form-swap">
        <div className="form-swap__header">
          <span>
            <i className="bi bi-sliders"></i>
            0.5%
          </span>
        </div>
        <div className="form-swap__content">
          <div className="form-header">
            <label>From</label>
            <div className="form-header__max">
              <i className="bi bi-wallet"></i>
              0.00
              <a href='#'>Max</a>
            </div>
          </div>
          <div className="form-field">
            <input onChange={(e) => handleChangeFrom(e, 'from')} value={fromAmount} />
            <div className="btn-open-token" onClick={() => setModalOpen('from')}>
              <img src={getPoolIcon(fromToken.name)} width='24'/>
              {fromToken.name}
              <i className="bi bi-chevron-down"></i>
            </div>
          </div>
          <div className="form-line">
            <div className="form-line__swap" onClick={handleSwap}>
              <motion.i
                className="bi bi-arrow-down-up"
                animate={{
                  rotate: toggleSwap ? 180 : 0,
                }}
                transition={{ duration: 0.25 }}              
              ></motion.i>
            </div>
          </div>
          <div className="form-header from-header-to">
            <label>To (Estimated)</label>
            <div className="form-header__max">
              <i className="bi bi-wallet"></i>
              0.00
              <a href='#'>Max</a>
            </div>
          </div>
          <div className="form-field">
            <div>
              <input nChange={(e) => handleChangeFrom(e, 'to')} value={toAmount}/>
            </div>
            <div className="btn-open-token">
              <img src={getPoolIcon(toToken.name)} width='24'/>
              {toToken.name}
              <i className="bi bi-chevron-down"></i>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {
          modalOpen && (
            <ModalSelectToken
              onClose={() => setModalOpen('')}
              onSelect={(v) => {
                if(modalOpen === 'from'){
                  onSelect({from: v, to: toToken})
                  onChange({from: '',to: ''})
                }else{
                  onSelect({from: fromToken, to: v})
                  onChange({from: '',to: ''})
                }
                
              }}              
            />
          )
        }
      </AnimatePresence>
    </>
  )
}