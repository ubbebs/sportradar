import { SportEventStatus } from '@/types/SportEventStatus'

type TableRowType = {
  team1: string
  team2: string
  result: SportEventStatus
}

export default function TableRow({ team1, team2, result }: TableRowType) {
  return (
    <tr>
      <td>
        {team1} vs {team2}
      </td>
      <td>
        {result.home_score} : {result.away_score}
      </td>
    </tr>
  )
}
