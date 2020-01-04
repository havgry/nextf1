import React, { useState } from 'react'
import { Collapse } from 'react-collapse'
import Session from './session'
import { getDate, getFullDate, groupByDayName } from '../utils'

const Event = ({
  country,
  city,
  sessions,
  isExpanded,
}) => {
  const raceStartDate = sessions[sessions.length - 1].startDate
  const [isVisible, setVisibility] = useState(isExpanded)
  const toggleVisibility = (event) => {
    event.preventDefault()
    setVisibility(!isVisible)
  }
  const sessionsByDay = groupByDayName(sessions)
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
          <ol>
            {Object.keys(sessionsByDay).map((day) => (
              <li key={day}>
                <span>
                  {day}
                </span>
                <ol className="sessions">
                  {sessionsByDay[day].map((session) => {
                    return (
                      <Session
                        key={session.type}
                        type={session.type}
                        startDate={session.startDate}
                        endDate={session.endDate}
                      />
                    )
                  })}
                </ol>
              </li>
            ))}
          </ol>
        </main>
      </Collapse>

      <style jsx>{`
        h1 {
          display: flex;
          justify-content: space-between;
          margin: 0;
        }

        a {
          color: inherit;
        }

        a:hover {
          text-decoration: none;
        }

        main {
          font-size: 0.8rem;
          text-transform: uppercase;
          padding-top: 0.5rem;
        }

        li {
          display: flex;
          justify-content: space-between;
          padding: 0.5rem 0;
        }

        li:last-child {
          font-weight: 600;
        }

        .sessions {
          width: 60%;
        }

        section {
          background-color: #fff;
          box-shadow: 0px 2px 6px 2px #d4d4d4;
          padding: 0.5rem 1rem;
          margin-bottom: 1rem;
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
