import { useEffect, useState } from "react"
import { PopoverSearch } from "./PopoverSearch"
import { dataSwap } from "../../data/swap"
import { FormSwap } from "./FormSwap"
import {useAsync} from '../../hooks/useAsync'
import {getPrice} from '../../services/client'

export const SwapContainer = () => {
  const [fromToken, setFromToken] = useState(dataSwap[0])
  const [toToken, setToToKen] = useState(dataSwap[1])
  const [fromAmount, setFromAmount] = useState('')
  const [toAmount, setToAmount] = useState('')
  const {execute} = useAsync({showNotifOnError: true})

  const handleSelectToken = ({from, to}) => {
    setFromToken(from)
    setToToKen(to)
  }
  const handleChangeAmount = ({from, to}) => {
    setFromAmount(from)
    setToAmount(to)
  }

  // const initCurrency = async () => {
  //   await execute(getPrice(`${fromToken.id},${toToken.id}`))
  // }

  // useEffect(() => {
  //   initCurrency()
  // }, [])
  return (
    <div className="page-swap container">
      <div className="swap-container">
        <PopoverSearch onSelect={handleSelectToken}/>
        <FormSwap            
          fromToken={fromToken}
          toToken={toToken}
          fromAmount={fromAmount}
          toAmount={toAmount}
          onSelect={handleSelectToken}
          onChange={handleChangeAmount}
        />
      </div>
    </div>
  )
}
