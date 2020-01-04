import React, { Fragment } from 'react'
import Head from 'next/head'

import GrandsPrix from '../components/grandsPrix'

const Home = () => (
  <Fragment>
    <Head>
      <title>NextF1.com</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="mobile-web-app-capable" content="yes" />
    </Head>

    <h1>Formula 1 Calendar 2020</h1>

    <GrandsPrix />

    <style jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Titillium+Web:400,600&display=swap');

      :global(body) {
        font-family: 'Titillium Web', sans-serif;
      }
    `}</style>
      <style>{`
        ol {
          list-style: none;
          padding: 0;
          margin: 0;
        }
    `}</style>
  </Fragment>
)

export default Home
