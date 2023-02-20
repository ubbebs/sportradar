import { useRouter } from 'next/router'
import getGoalScorers from './utils/getGoalScrorers'
import useGetMatchData from '@/services/useGetMatchData'

export default function useMatch() {
  const router = useRouter()
  const { match } = router.query
  const { data, isLoading } = useGetMatchData(match)
  const goalScorers = {
    home:
      data && data.sport_event_status.status !== 'postponed'
        ? getGoalScorers(data?.timeline, 'home')
        : null,
    away:
      data && data.sport_event_status.status !== 'postponed'
        ? getGoalScorers(data?.timeline, 'away')
        : null,
  }
  return { data, isLoading, goalScorers }
}
