import Scorers from '@/features/timeline/components/Scorers'

type TeamScoreboardType = {
  title: string
  team:
    | {
        time: number
        scorer: string[]
      }[]
    | null
  type: string
}

export default function TeamScoreboard({
  title,
  team,
  type,
}: TeamScoreboardType) {
  return (
    <div className="w-100 d-flex flex-column gap-3">
      <h4 className="text-center m-0 py-5">{title}</h4>
      {team && <Scorers data={team} type={type} />}
    </div>
  )
}
