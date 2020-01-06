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

export const timeFromNow = (dateTime) => {
  const now = getSpacetimeInTimeZone(new Date())
  const future = getSpacetimeInTimeZone(dateTime)
  return now.since(future).precise
}

export const getStartEndDates = (dateTimeStart, dateTimeEnd) => {
  const start = getSpacetimeInTimeZone(dateTimeStart)
  const end = getSpacetimeInTimeZone(dateTimeEnd)
  const isSameMonth = start.isSame(end, 'month')
  const startDateFormatted = isSameMonth ? start.format('date') : start.format('{date} {month-short}')
  const endDateFormatted = end.format('{date} {month-short}')

  return [startDateFormatted, endDateFormatted]
}
