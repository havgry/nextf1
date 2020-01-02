import React from 'react'
import List from './list'

import grandsPrixData from '../data/grandsPrix.json'

const GrandsPrix = () => {
  return (
    <List
      items={grandsPrixData.events}
    />
  )
}

export default GrandsPrix
