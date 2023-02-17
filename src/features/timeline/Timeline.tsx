import formatedType from '@/features/timeline/utils/formatedType'
import { TimelineType } from '@/types/Match'
import { CompetitorType, PeriodScoresType } from '@/types/SeasonSchedule'
import Card from './components/Card'
import GoalInformation from './components/GoalInformation'
import TitleFormat from './components/TitleFormat'
import formatedStyle from './utils/formatedStyle'
import formatedTime from './utils/formatedTime'

type TimelineComponentType = {
  data: TimelineType
  periodScore: PeriodScoresType[]
  teams: CompetitorType[]
}

export default function TimelineComponent({
  data: {
    away_score,
    competitor,
    injury_time_announced,
    home_score,
    match_time,
    period,
    stoppage_time,
    type,
  },
  periodScore,
  teams,
}: TimelineComponentType) {
  const minute = formatedTime(match_time, stoppage_time)
  const title = formatedType(type)
  const team = teams[competitor === 'home' ? 0 : 1].name
  const titleStyle = formatedStyle(type)
  if (type === 'match_started')
    return <h5 className="text-capitalize text-center">{title}</h5>
  if (type === 'period_score')
    return (
      <TitleFormat
        title={`
        Period score: ${periodScore[0].home_score} : ${periodScore[0].away_score}`}
      />
    )
  if (type === 'injury_time_shown')
    return (
      <TitleFormat
        title={`
        Stoppage-time: +${injury_time_announced}
        `}
      />
    )
  if (type === 'period_start')
    return (
      <TitleFormat
        title={`
        ${period}. ${title}
        `}
      />
    )
  if (type === 'break_start') return <TitleFormat title="Break" style />
  if (type === 'match_ended') return <TitleFormat title={title} />
  return (
    <div className="px-2">
      <div className="d-flex gap-3">
        <p className="m-0 fw-semibold">{minute}&apos;</p>
        {type === 'score_change' && (
          <GoalInformation home={home_score} away={away_score} />
        )}
        {type === 'yellow_card' && <Card color="yellow" />}
      </div>
      <p className="m-0 border-bottom pb-3 text-capitalize" style={titleStyle}>
        {team} ({competitor}): {title}
      </p>
    </div>
  )
}
