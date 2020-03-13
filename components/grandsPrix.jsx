import React from 'react'
import List from './list'

import grandsPrixData from '../data/grandsPrix.json'

const GrandsPrix = () => {
  return (
    <>
      <b>
        Expect further cancellations the next coming months due to COVID-19 🤢
      </b>
      <List
        items={grandsPrixData.events}
      />
    </>
  )
}

export default GrandsPrix
