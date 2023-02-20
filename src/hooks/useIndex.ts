import { useState } from 'react'
import { CurrentSeasonType } from '@/types/CurrentSeason'
import useGetSeasonScheduleData from '@/services/useGetSeasonScheduleData'

export default function useIndex() {
  const [currentSeason, setCurrentSeason] = useState<CurrentSeasonType>({
    id: 'sr:season:77453',
    name: 'Ekstraklasa 20/21',
  })
  const { data, isLoading } = useGetSeasonScheduleData(currentSeason)
  const handleClick = ({ id, name }: CurrentSeasonType) => {
    setCurrentSeason({ id, name })
  }
  return { currentSeason, handleClick, data, isLoading }
}
