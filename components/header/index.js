import { useRouter } from 'next/router';
import Link from 'next/link'

// import { MenuPool } from '../../icons/MenuPool';
import { MenuStaking } from '../../icons/MenuStaking';
import { MenuSwap } from '../../icons/MenuSwap';
import { MenuLiquidity } from '../../icons/MenuTrade';
import { ButtonConnect } from '../ButtonConnect';
import cx from 'classnames';
import React from 'react'
export const Header = () => {
  const { pathname } = useRouter();
  return (
    <div className='container header'>
      <div className='header-logo'>
        <Link href={{pathname: '/'}}>
          <img src='./logo.svg' />
        </Link>
      </div>
      <div className='nav'>
        <Link  href={{pathname: '/stake'}}>
          <span className={cx('nav-item', pathname === '/stake' && 'active')}><MenuStaking /> Staking</span>
        </Link>
        <Link href={{pathname: '/swap'}}>
          <span className={cx('nav-item', pathname === '/swap' && 'active')}><MenuSwap /> Swap</span>
        </Link>
        <Link  href={{pathname: '/liquidity'}}>
          <span className={cx('nav-item', pathname === '/liquidity' && 'active')}><MenuLiquidity /> Liquidity</span>
        </Link>
        {/* <a className={cx('nav-item', pathname === '/pool' && 'active')} href='/pool'>
          <MenuPool /> Pool & Farm
        </a> */}
      </div>
      <div>
        <ButtonConnect isInitData={true} />
      </div>
    </div>
  );
};
