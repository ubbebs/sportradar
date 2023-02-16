import { useQuery } from '@tanstack/react-query'
import { Dropdown } from 'react-bootstrap'
import { Seasons } from '@/types/Seasons'
import fetcher from '@/utils/fetcher'
import { CurrentSeasonType } from '@/types/CurrentSeason'

type DropdownMenuType = {
  func: ({ id, name }: CurrentSeasonType) => void
  currentSeason: CurrentSeasonType
}

export default function DropdownMenu({
  func,
  currentSeason,
}: DropdownMenuType) {
  const { data, isLoading } = useQuery(['seasons'], async () =>
    fetcher<Seasons>('/api/seasons')
  )

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {currentSeason.name}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {!isLoading && data ? (
          data.seasons.map((elem) => {
            return (
              <Dropdown.Item
                key={crypto.randomUUID()}
                onClick={() => func({ id: elem.id, name: elem.name })}
              >
                {elem.name}
              </Dropdown.Item>
            )
          })
        ) : (
          <Dropdown.Item>Loading...</Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  )
}
