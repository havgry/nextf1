import React from 'react'
import List from './list'
import { timeFromNow } from '../utils'

import grandsPrixData from '../data/grandsPrix.json'

let pastEvents = []
let futureEvents = []
const nextEventIndex = grandsPrixData.events.findIndex((event) => {
  const lastSession = event.sessions[event.sessions.length - 1]
  const timeSinceLastSessionEnded = timeFromNow(lastSession.endDate, event.timezone)
  return timeSinceLastSessionEnded.diff.minutes < 0
})

if (nextEventIndex > -1) {
  futureEvents = grandsPrixData.events
  pastEvents = futureEvents.splice(0, nextEventIndex)
} else {
  pastEvents = grandsPrixData.events
}

const GrandsPrix = () => (
  <>
    <b>
      It's lights out and away we go!
    </b>
    <List
      items={futureEvents}
    />
    {pastEvents.length > 0 && (
      <>
        <h3>
          Past events
        </h3>
        <List
          items={pastEvents}
        />
      </>
    )}
    <style jsx>{`
      h3 {
        text-align: center;
      }
    `}</style>
  </>
)

export default GrandsPrix
