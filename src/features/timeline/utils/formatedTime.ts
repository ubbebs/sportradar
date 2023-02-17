export default function formatedTime(
  minute: number,
  stoppage: number | undefined
) {
  if (stoppage === undefined) return minute
  const additional = `${minute} + ${stoppage}`
  return additional
}
