function parseNumber(num: number) {
  return num.toString().padStart(2, '0')
}

export default function dateParse(date: string) {
  const newDate = new Date(Date.parse(date || ''))
  return `${parseNumber(newDate.getUTCDate())}.${parseNumber(
    newDate.getUTCMonth() + 1
  )}.${parseNumber(newDate.getUTCFullYear())} ${parseNumber(
    newDate.getUTCHours()
  )}:${parseNumber(newDate.getUTCMinutes())}`
}
