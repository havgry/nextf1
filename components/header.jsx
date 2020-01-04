
import React from 'react'

const Header = () => (
  <header className="header">
    <span className="header__title">
      NextF1
    </span>
    <span className="header__subtitle">
      Formula 1 Calendar 2020
    </span>

    <style jsx>{`
      .header {
        background-color: #e10600;
        color: #fff;
        padding: 0.5rem 1rem;
        text-align: center;
        text-transform: uppercase;
      }

      .header__title {
        font-weight: 600;
        margin-right: 0.5rem;
        font-size: 1.2rem;
      }

      .header__subtitle {
        font-size: 0.9rem;
      }
    `}</style>
  </header>
)

export default Header
