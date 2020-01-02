import spacetime from 'spacetime'

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const getSpacetimeInTimeZone = (dateTime) => {
  const currentTimeZone = spacetime().timezone().name
  return spacetime(dateTime).goto(currentTimeZone)
}

export const formatTime = (dateTime) => {
  return getSpacetimeInTimeZone(dateTime).format('time-24')
}

export const getDayName = (dateTime) => {
  const dayName = getSpacetimeInTimeZone(dateTime).dayName()
  return capitalize(dayName)
}

export const getDate = (dateTime) => {
  return getSpacetimeInTimeZone(dateTime).format('{date} {month-short}')
}

export const getFullDate = (dateTime) => {
  return getSpacetimeInTimeZone(dateTime).format('nice')
}