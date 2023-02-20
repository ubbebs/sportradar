import dateParse from '@/utils/dateParse'
import TimelineComponent from '@/features/timeline/Timeline'
import useMatch from '@/hooks/useMatch'
import TeamScoreboard from '@/features/match/components/TeamScoreboard'

export default function Match() {
  const { data, isLoading, goalScorers } = useMatch()

  if (isLoading) return <p className="p-4 text-center">Loading...</p>

  return (
    data && (
      <div className="w-100 d-flex justify-content-center">
        <div className="w-100 p-4" style={{ maxWidth: '1000px' }}>
          <h1 className="text-center bg-primary text-white p-2 rounded-4 m-0">
            {data.sport_event.sport_event_context.season.name}
          </h1>
          <div className="d-flex flex-row w-100 justify-content-between py-4">
            <TeamScoreboard
              title={data.sport_event.competitors[0].name}
              team={goalScorers.home}
              type="home"
            />
            <div className="w-100 text-center d-flex flex-column justify-content-between">
              <p className="text-center">
                {dateParse(data.sport_event.start_time)}
              </p>
              {data.sport_event_status.match_status !== 'postponed' && (
                <h2 className="fw-bold">
                  {data.sport_event_status.home_score} :{' '}
                  {data.sport_event_status.away_score}
                </h2>
              )}
              <p className="text-capitalize">
                {data.sport_event_status.match_status}
              </p>
            </div>
            <TeamScoreboard
              title={data.sport_event.competitors[1].name}
              team={goalScorers.away}
              type="away"
            />
          </div>
          {data.timeline && (
            <>
              <h5 className="bg-gray p-2 text-white rounded-3">Timeline</h5>
              <div className="d-flex flex-column gap-3">
                {data.timeline.map((elem) => {
                  return (
                    <TimelineComponent
                      data={elem}
                      periodScore={data.sport_event_status.period_scores}
                      teams={data.sport_event.competitors}
                      key={crypto.randomUUID()}
                    />
                  )
                })}
              </div>
            </>
          )}
        </div>
      </div>
    )
  )
}
