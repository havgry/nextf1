import React from 'react'
import List from './list'

import grandsPrixData from '../data/grandsPrix.json'

const GrandsPrix = () => {
  return (
    <>
      <b>
        Corona update: Expect further cancellations and postponements the next coming months due to COVID-19 🤢
      </b>
      <p>
        "As a result, Formula 1 and the FIA expect to begin the Championship in Europe at the end of May but given the sharp increase in COVID-19 cases in Europe in recent days, this will be regularly reviewed."
      </p>
      <List
        items={grandsPrixData.events}
      />
      <style jsx>{`
        p {
          font-size: 0.8em;
        }
      `}</style>
    </>
  )
}

export default GrandsPrix
