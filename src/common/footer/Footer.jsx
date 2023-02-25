import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>Pawn</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>A propos de nous</h2>
            <ul>
              <li>Carrières</li>
              <li>Nos magasins</li>
              <li>Nos soins</li>
              <li>Termes et conditions</li>
              <li>Politique de confidentialité</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Nous contacter</h2>
            <ul>
              <li>94 Avenue de Verdun, Neuilly-sur-Marne, 93330, France </li>
              <li>Email: khalifa.help@gmail.com</li>
              <li>Phone: +33623567820</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
