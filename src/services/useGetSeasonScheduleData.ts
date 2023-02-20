import { useQuery } from '@tanstack/react-query'
import { CurrentSeasonType } from '@/types/CurrentSeason'
import fetcher from '@/utils/fetcher'
import { SeasonScheduleType } from '@/types/SeasonSchedule'

const useGetSeasonScheduleData = (currentSeason: CurrentSeasonType) => {
  return useQuery(['seasonschedule', currentSeason], async () =>
    fetcher<SeasonScheduleType>(`/api/season/${currentSeason.id}`)
  )
}

export default useGetSeasonScheduleData
