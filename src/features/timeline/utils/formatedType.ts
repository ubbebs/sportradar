export default function formatedType(type: string) {
  if (type === 'score_change') return 'GOAL!'
  return type.replaceAll('_', ' ')
}
