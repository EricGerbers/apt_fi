import { MenuPool } from "../../icons/MenuPool"
import { MenuStaking } from "../../icons/MenuStaking"
import { MenuSwap } from "../../icons/MenuSwap"
import { MenuTrade } from "../../icons/MenuTrade"
import { ButtonConnect } from "../ButtonConnect"
import { Button } from "../shared/Form/Button"

export const Header = () => {
  return (
    <div className="container header">
      <div><img src='./logo.svg' /></div>
      <div className="nav">
        <a className="nav-item" href='/trade'>
          <MenuTrade /> Trade
        </a>
        <a className="nav-item" href='/trade'>
          <MenuSwap /> Swap
        </a>
        <a className="nav-item" href='/trade'>
          <MenuStaking /> Staking
        </a>
        <a className="nav-item" href='/trade'>
          <MenuPool /> Pool & Farm
        </a>
      </div>
      <div>
        <ButtonConnect />
      </div>
    </div>
  )
}