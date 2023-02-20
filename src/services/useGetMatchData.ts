import { useQuery } from '@tanstack/react-query'
import fetcher from '@/utils/fetcher'
import { MatchType } from '@/types/Match'

const useGetMatchData = (match: string | string[] | undefined) => {
  return useQuery(['match', match], async () =>
    fetcher<MatchType>(`/api/match/${match}`)
  )
}

export default useGetMatchData
