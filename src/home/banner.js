import { CoinGecko } from '../../icons/CoinGecko';
import { CoinMarket } from '../../icons/CoinMarket';
import { Discord } from '../../icons/Discord';
import { Medium } from '../../icons/Medium';
import { Telegram } from '../../icons/Telegram';
import { Twitter } from '../../icons/Twitter';
import { Button } from '../../components/shared/Form/Button';
import { LogoShort } from '../../icons/LogoShort';

export const HomeBanner = () => {
  return (
    <div className='container home-banner'>
      <div className='banner-left'>
        <div className='list-social'>
          <a href='#'>
            <Twitter />
          </a>
          <a href='#'>
            <Telegram />
          </a>
          <a href='#'>
            <Discord />
          </a>
          <a href='#'>
            <Medium />
          </a>
          <a href='#'>
            <CoinMarket />
          </a>
          <a href='#'>
            <CoinGecko />
          </a>
        </div>
        <div className='banner-desc'>
          <h2>DO IT DIFFERENT</h2>
          <img src='./images/coin.gif' width='40' height='40' />
        </div>
        <div className='banner-desc'>
          <p>
            We are building the ultimate ecosystem to help you cut your 50 years of work - in half! You won’t need to
            work for money, once money works for you.
          </p>
        </div>
        <div className='banner-bottom'>
          <Button className='button-primary btn-launch'>
            <LogoShort />
            Launch Aldrin
          </Button>
          <div className='block-solana'>
            <img src='./images/solana.svg' />
            <p>Built on Solana</p>
          </div>
        </div>
      </div>
      <div className='banner-right'>
        <img src='./images/img_move.png' />
      </div>
    </div>
  );
};
