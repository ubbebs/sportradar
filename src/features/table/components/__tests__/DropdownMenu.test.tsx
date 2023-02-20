import { screen, render, waitFor, act, fireEvent } from '@testing-library/react'
import useGetSeasonsData from '@/services/useGetSeasonsData'
import DropdownMenu from '../DropdownMenu'
import seasons from '@/utils/seasons.json'

const mockedSeasonsData = useGetSeasonsData as any

jest.mock('@/services/useGetSeasonsData')

const propsData = {
  currentSeason: {
    id: 'sr:season:77453',
    name: 'League season 22/23',
  },
  function: jest.fn(),
}

describe('DropdownMenu', () => {
  beforeEach(() => {
    mockedSeasonsData.mockImplementation(() => ({
      isLoading: false,
      data: seasons,
    }))
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Render without data', async () => {
    mockedSeasonsData.mockImplementation(() => ({
      isLoading: true,
      data: seasons,
    }))
    render(
      <DropdownMenu
        currentSeason={propsData.currentSeason}
        func={propsData.function}
      />
    )
    expect(screen.getByText('League season 22/23')).toBeTruthy()
    const button = screen.getByRole('button')
    act(() => {
      button.click()
    })
    waitFor(() => {
      expect(screen.getByText('Loading...')).toBeTruthy()
    })
  })

  it('Render with data', async () => {
    render(
      <DropdownMenu
        currentSeason={propsData.currentSeason}
        func={propsData.function}
      />
    )
    expect(screen.getByText('League season 22/23')).toBeTruthy()
    const button = screen.getByRole('button')
    fireEvent.click(button)
    await waitFor(() => {
      expect(screen.queryByText('Loading...')).toBeNull()
      expect(screen.getByText('Ekstraklasa 20/21')).toBeTruthy()
      expect(screen.getByText('Ekstraklasa 21/22')).toBeTruthy()
      expect(screen.getByText('Ekstraklasa 22/23')).toBeTruthy()
    })
  })
})
