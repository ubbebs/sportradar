import formatedStyle from '@/features/timeline/utils/formatedStyle'
import formatedSub from '@/features/timeline/utils/formatedSub'
import formatedTime from '@/features/timeline/utils/formatedTime'
import formatedType from '@/features/timeline/utils/formatedType'
import { PlayerType } from '@/types/Match'
import { CompetitorType } from '@/types/SeasonSchedule'

export default function useTimeline(
  match_time: number,
  stoppage_time: number,
  type: string,
  teams: CompetitorType[],
  competitor: string,
  players: PlayerType[]
) {
  const minute = formatedTime(match_time, stoppage_time)
  const title = formatedType(type)
  const team = teams[competitor === 'home' ? 0 : 1].name
  const titleStyle = formatedStyle(type)
  const substitution = formatedSub(type, players)
  return { minute, title, team, titleStyle, substitution }
}
