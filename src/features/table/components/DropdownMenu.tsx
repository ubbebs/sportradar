import { Dropdown } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'
import { CurrentSeasonType } from '@/types/CurrentSeason'
import useGetSeasonsData from '@/services/useGetSeasonsData'

type DropdownMenuType = {
  func: ({ id, name }: CurrentSeasonType) => void
  currentSeason: CurrentSeasonType
}

export default function DropdownMenu({
  func,
  currentSeason,
}: DropdownMenuType) {
  const { data, isLoading } = useGetSeasonsData()

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
                key={uuidv4()}
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
