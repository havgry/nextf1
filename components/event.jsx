import React, { useState } from 'react'
import { Collapse } from 'react-collapse'
import Session from './session'
import { SESSIONS } from '../utils/enums'
import { getDate, getFullDate } from '../utils/formatters'

const Event = ({
  country,
  city,
  sessions,
  isExpanded,
}) => {
  const raceStartDate = sessions[SESSIONS.RACE].startDate
  const [isVisible, setVisibility] = useState(isExpanded)
  const toggleVisibility = (event) => {
    event.preventDefault()
    setVisibility(!isVisible)
  }

  return (
    <section>
      <header>
        <h1>
          <a
            href="#"
            onClick={toggleVisibility}
          >
            {country} - {city}
          </a>
          <time dateTime={getFullDate(raceStartDate)}>
            {getDate(raceStartDate)}
          </time>
        </h1>
      </header>
      <Collapse isOpened={isVisible}>
        <main>
          <Session
            name="Practice 1"
            startDate={sessions[SESSIONS.FIRST_PRACTICE].startDate}
            endDate={sessions[SESSIONS.FIRST_PRACTICE].endDate}
          />
          <Session
            name="Practice 2"
            startDate={sessions[SESSIONS.SECOND_PRACTICE].startDate}
            endDate={sessions[SESSIONS.SECOND_PRACTICE].endDate}
          />
          <Session
            name="Practice 3"
            startDate={sessions[SESSIONS.THIRD_PRACTICE].startDate}
            endDate={sessions[SESSIONS.THIRD_PRACTICE].endDate}
          />
          <Session
            name="Qualifying"
            startDate={sessions[SESSIONS.QUALIFYING].startDate}
            endDate={sessions[SESSIONS.QUALIFYING].endDate}
          />
          <Session
            name="Race"
            startDate={raceStartDate}
            endDate={sessions[SESSIONS.RACE].endDate}
          />
        </main>
      </Collapse>

      <style jsx>{`
        h1 {
          display: flex;
          justify-content: space-between;
        }

        a:hover {
          text-decoration: none;
        }
      `}</style>
      <style>{`
        .ReactCollapse--collapse {
          transition: height .25s ease;
        }
      `}
      </style>
    </section>
  )
}

export default Event
