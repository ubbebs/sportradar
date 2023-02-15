import { SportEventStatus } from '@/types/SportEventStatus'

export default function tdClasses(result: SportEventStatus) {
  if (result.match_tie) return ['bg-orange text-white', 'bg-orange text-white']
  if (result.match_status === 'postponed')
    return ['bg-transparent', 'bg-transparent']
  if (result.home_score > result.away_score)
    return ['bg-success text-white', 'bg-danger text-white']
  return ['bg-danger text-white', 'bg-success text-white']
}
