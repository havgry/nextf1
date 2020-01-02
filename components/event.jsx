import React from 'react'
import Session from './session'
import { SESSIONS } from '../utils/enums'
import { getDate, getFullDate } from '../utils/formatters'

const Event = ({
  country,
  city,
  sessions,
}) => {
  const raceStartDate = sessions[SESSIONS.RACE].startDate
  return (
    <section>
      <header>
        <h1>
          <span>
            <em>
              {country}
            </em>
            , {city}
          </span>
          <time dateTime={getFullDate(raceStartDate)}>
            {getDate(raceStartDate)}
          </time>
        </h1>
      </header>
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

      <style jsx>{`
        h1 {
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </section>
  )
}

export default Event
