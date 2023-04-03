import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Subtle Thankful Gull</title>
        <meta property="og:title" content="Subtle Thankful Gull" />
      </Helmet>
      <span>
        <span>Razvan original account</span>
        <br></br>
        <br></br>
      </span>
    </div>
  )
}

export default Home
