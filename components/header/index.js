import { useRouter } from 'next/router';
import { MenuPool } from '../../icons/MenuPool';
import { MenuStaking } from '../../icons/MenuStaking';
import { MenuSwap } from '../../icons/MenuSwap';
import { MenuTrade } from '../../icons/MenuTrade';
import { ButtonConnect } from '../ButtonConnect';
import cx from 'classnames';
import React from 'react'
export const Header = () => {
  const { pathname } = useRouter();
  return (
    <div className='container header'>
      <div>
        <a href='/'>
          <img src='./logo.svg' />
        </a>
      </div>
      <div className='nav'>
        <a className={cx('nav-item', pathname === '/liquidity' && 'active')} href='/liquidity'>
          <MenuTrade /> Trade
        </a>
        <a className={cx('nav-item', pathname === '/swap' && 'active')} href='/swap'>
          <MenuSwap /> Swap
        </a>
        <a className={cx('nav-item', pathname === '/stake' && 'active')} href='/stake'>
          <MenuStaking /> Staking
        </a>
        <a className={cx('nav-item', pathname === '/pool' && 'active')} href='/pool'>
          <MenuPool /> Pool & Farm
        </a>
      </div>
      <div>
        <ButtonConnect isInitData={true} />
      </div>
    </div>
  );
};
