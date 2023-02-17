export default function formatedStyle(type: string) {
  if (type === 'possible_goal') return { fontWeight: 700 }
  if (type === 'score_change') return { fontWeight: 700, color: 'red' }
  return {}
}
