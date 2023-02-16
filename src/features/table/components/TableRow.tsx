import { PeriodScores, SportEventStatus } from '@/types/SportEventStatus'
import tdClasses from '@/features/table/utils/tdClasses'

type TableRowType = {
  date: string
  stadium: string
  team1: string
  team2: string
  halftime: PeriodScores[]
  result: SportEventStatus
}

export default function TableRow({
  date,
  stadium,
  team1,
  team2,
  halftime,
  result,
}: TableRowType) {
  return (
    <tr>
      <td>{date}</td>
      <td>{stadium}</td>
      <td className={tdClasses(result)[0]}>{team1}</td>
      <td className={tdClasses(result)[1]}>{team2}</td>
      <td>
        {halftime
          ? `${halftime[0].home_score} : ${halftime[0].away_score}`
          : 'Postponed'}
      </td>
      <td>
        {result.status !== 'postponed'
          ? `${result.home_score} : ${result.away_score}`
          : 'Postponed'}
      </td>
    </tr>
  )
}
