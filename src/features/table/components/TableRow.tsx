import { useRouter } from 'next/router'
import tdClasses from '@/features/table/utils/tdClasses'
import { PeriodScoresType, SportEventStatusType } from '@/types/SeasonSchedule'
import dateParse from '@/utils/dateParse'

type TableRowType = {
  id: string
  date: string
  stadium: string
  team1: string
  team2: string
  halftime: PeriodScoresType[]
  result: SportEventStatusType
}

export default function TableRow({
  id,
  date,
  stadium,
  team1,
  team2,
  halftime,
  result,
}: TableRowType) {
  const router = useRouter()
  const redirect = () => {
    router.push(`match/${id}`)
  }
  return (
    <tr onClick={redirect} style={{ cursor: 'pointer' }}>
      <td>{dateParse(date)}</td>
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
