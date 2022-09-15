import { CoinGecko } from "../../icons/CoinGecko"
import { CoinMarket } from "../../icons/CoinMarket"
import { Discord } from "../../icons/Discord"
import { Medium } from "../../icons/Medium"
import { Telegram } from "../../icons/Telegram"
import { Twitter } from "../../icons/Twitter"

export const Footer = () => {
  return (
    <div className="container footer">      
      <div className="footer-logo">
        <div><img src='./logo.svg' /></div>
        <div className="footer-copyright">
          <p>Aldrin.com 2022 - ∞</p>
          <a href='mailto:contact@aldrin.com'>contact@aldrin.com</a>
        </div>
      </div>
      <div className="footer-nav">
        <a href='#'>Terms of Use</a>
        <a href='#'>Contact Us</a>
        <a href='#'>Privacy Policy</a>
      </div>
      <div className="footer-social">
        <a href="#"><Twitter /></a>
        <a href="#"><Telegram /></a>
        <a href="#"><Discord /></a>
        <a href="#"><Medium /></a>
        <a href="#"><CoinMarket /></a>
        <a href="#"><CoinGecko /></a>
      </div>
    </div>
  )
}