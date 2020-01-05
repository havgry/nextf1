import spacetime from 'spacetime'

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const getSpacetimeInTimeZone = (dateTime) => {
  const currentTimeZone = spacetime().timezone().name
  return spacetime(dateTime).goto(currentTimeZone)
}

export const formatTime = (dateTime) => {
  return getSpacetimeInTimeZone(dateTime).format('{hour-24-pad}:{minute-pad}')
}

export const getDayName = (dateTime) => {
  const dayName = getSpacetimeInTimeZone(dateTime).format('day-short')
  return capitalize(dayName)
}

export const getDate = (dateTime) => {
  return getSpacetimeInTimeZone(dateTime).format('{date} {month-short}')
}

export const getFullDate = (dateTime) => {
  return getSpacetimeInTimeZone(dateTime).format('nice')
}

export const groupByDayName = (sessions) => {
  return sessions.reduce((groups, session) => {
    const group = getDayName(session.startDate)
    groups[group] = groups[group] || []
    groups[group].push(session)
    return groups
  }, {})
}
