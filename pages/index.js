import React, { Fragment } from 'react'
import Head from 'next/head'

import TrackingWrapper from '../components/trackingWrapper'
import GrandsPrix from '../components/grandsPrix'
import Header from '../components/header'

const Home = () => (
  <Fragment>
    <Head>
      <title>NextF1.com</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#e10600" />
    </Head>

    <TrackingWrapper>
      <Header />
      <main>
        <GrandsPrix />
      </main>
    </TrackingWrapper>

    <style jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Titillium+Web:400,600&display=swap');

      :global(body) {
        font-family: 'Titillium Web', sans-serif;
        margin: 0;
      }

      main {
        padding: 1rem;
        max-width: 40rem;
        margin: 0 auto;
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
