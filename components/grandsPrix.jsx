import React from 'react'
import List from './list'

import grandsPrixData from '../data/grandsPrix.json'

const GrandsPrix = () => {
  return (
    <>
      <b>
        It's lights out and away we go!
      </b>
      <List
        items={grandsPrixData.events}
      />
    </>
  )
}

export default GrandsPrix
