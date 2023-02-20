import tdClasses from '@/features/table/utils/tdClasses'
import { SportEventStatusType } from '@/types/SeasonSchedule'
import dateParse from '@/utils/dateParse'
import useTableRow from '@/hooks/useTableRow'

type TableRowType = {
  id: string
  date: string
  stadium: string
  team1: string
  team2: string
  result: SportEventStatusType
}

export default function TableRow({
  id,
  date,
  stadium,
  team1,
  team2,
  result,
}: TableRowType) {
  const { redirect, classes } = useTableRow(id, result)

  return (
    <tr onClick={redirect} style={{ cursor: 'pointer' }}>
      <td>{dateParse(date)}</td>
      <td>{stadium}</td>
      <td className={classes[0]} data-testid="team1">
        {team1}
      </td>
      <td className={classes[1]} data-testid="team2">
        {team2}
      </td>
      <td>
        {result.period_scores
          ? `${result.period_scores[0].home_score} : ${result.period_scores[0].away_score}`
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
