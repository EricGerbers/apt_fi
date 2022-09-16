import { useState } from "react"
import cx from 'classnames'
import { motion } from 'framer-motion'
import {Input} from '../../components/shared/Form/Input'
import { Button } from '../../components/shared/Form/Button'
import { Popover  } from "../../components/shared/Popover"
import { PopoverContent } from '../../components/shared/Popover/PopoverContent'
import { PopoverSearch } from "./PopoverSearch"

export const SwapContainer = () => {    
  return (
    <div className="page-swap container">
      <div className="swap-container">
        <PopoverSearch />
      </div>
    </div>
  )
}
