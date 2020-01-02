import React from 'react'
import Event from './event'

const List = ({
  items,
}) => (
  <ol>
    {items.map((event) => (
      <li key={event.country}>
        <Event
          country={event.country}
          city={event.city}
          sessions={event.sessions}
        />
      </li>
    ))}

      <style jsx>{`
        ol {
          list-style: none;
          padding: 0;
          margin: 0;
        }
    `}</style>
  </ol>
)

export default List
