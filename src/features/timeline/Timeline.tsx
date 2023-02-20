import useTimeline from '@/hooks/useTimeline'
import { TimelineType } from '@/types/Match'
import { CompetitorType, PeriodScoresType } from '@/types/SeasonSchedule'
import nameFormat from '@/utils/nameFormat'
import Card from './components/Card'
import GoalInformation from './components/GoalInformation'
import Substitution from './components/Substitution'
import TitleFormat from './components/TitleFormat'

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
    period_type,
    players,
    stoppage_time,
    type,
  },
  periodScore,
  teams,
}: TimelineComponentType) {
  const { minute, title, team, titleStyle, substitution } = useTimeline(
    match_time,
    stoppage_time,
    type,
    teams,
    competitor,
    players
  )
  if (period_type === 'interrupted')
    return <TitleFormat title="Pause - Game interrupted" />
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
        {type === 'red_card' && <Card color="red" />}
        {type === 'substitution' && <Substitution />}
      </div>
      <div
        className="m-0 border-bottom pb-3 text-capitalize"
        style={titleStyle}
      >
        {team} ({competitor}): {title}{' '}
        {substitution && (
          <span className="m-0">
            / Out: <strong>{substitution[0]}</strong>, In:{' '}
            <strong>{substitution[1]}</strong>
          </span>
        )}
        {type === 'score_change' && (
          <span className="m-0">scorer: {nameFormat(players[0].name)}</span>
        )}
        {type === 'yellow_card' && (
          <span className="text-lowercase">
            for:{' '}
            <span className="m-0 fw-semibold text-capitalize">
              {nameFormat(players[0].name)}
            </span>
          </span>
        )}
      </div>
    </div>
  )
}
