import { useRouter } from 'next/router'
import tdClasses from '@/features/table/utils/tdClasses'
import { SportEventStatusType } from '@/types/SeasonSchedule'

export default function useTableRow(id: string, result: SportEventStatusType) {
  const router = useRouter()
  const classes = tdClasses(result)
  const redirect = () => {
    router.push(`match/${id}`)
  }
  return { redirect, classes }
}
