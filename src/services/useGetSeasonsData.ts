import { useQuery } from '@tanstack/react-query'
import fetcher from '@/utils/fetcher'
import { Seasons } from '@/types/Seasons'

const useGetSeasonsData = () => {
  return useQuery(['seasons'], async () => fetcher<Seasons>('/api/seasons'))
}

export default useGetSeasonsData
