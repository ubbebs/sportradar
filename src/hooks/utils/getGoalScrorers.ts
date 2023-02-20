import { TimelineType } from '@/types/Match'
import nameFormat from '@/utils/nameFormat'

const getGoalScorers = (data: TimelineType[], competitor: string) => {
  return data
    .filter(
      (elem) => elem.type === 'score_change' && elem.competitor === competitor
    )
    .map((elem) => {
      return {
        time: elem.match_time,
        scorer: elem.players
          .filter((player) => player.type === 'scorer')
          .map((player) => nameFormat(player.name)),
      }
    })
}

export default getGoalScorers
