import { screen, render } from '@testing-library/react'
import { v4 as uuidv4 } from 'uuid'
import tablerowTie from '@/utils/testJSON/tablerowTie.json'
import tablerowHomeWin from '@/utils/testJSON/tablerowHomeWin.json'
import tablerowAwayWin from '@/utils/testJSON/tablerowAwayWin.json'
import TableRow from '../TableRow'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

describe('TableRow', () => {
  it('Render with tie data', async () => {
    const propsData = {
      id: tablerowTie.sport_event.id,
      date: tablerowTie.sport_event.start_time,
      stadium: tablerowTie.sport_event.venue.name,
      team1: tablerowTie.sport_event.competitors[0].name,
      team2: tablerowTie.sport_event.competitors[1].name,
      result: tablerowTie.sport_event_status,
    }
    render(
      <TableRow
        id={propsData.id}
        date={propsData.date}
        stadium={propsData.stadium}
        team1={propsData.team1}
        team2={propsData.team2}
        result={propsData.result}
        key={uuidv4()}
      />
    )
    expect(screen.getByText('Stadion', { exact: false })).toBeTruthy()
    expect(screen.getByTestId('team1').className).toBe('bg-orange text-white')
    expect(screen.getByTestId('team2').className).toBe('bg-orange text-white')
    expect(screen.getByText('1 : 1')).toBeTruthy()
    expect(screen.getByText('3 : 3')).toBeTruthy()
  })

  it('Render with home win data', async () => {
    const propsData = {
      id: tablerowHomeWin.sport_event.id,
      date: tablerowHomeWin.sport_event.start_time,
      stadium: tablerowHomeWin.sport_event.venue.name,
      team1: tablerowHomeWin.sport_event.competitors[0].name,
      team2: tablerowHomeWin.sport_event.competitors[1].name,
      result: tablerowHomeWin.sport_event_status,
    }
    render(
      <TableRow
        id={propsData.id}
        date={propsData.date}
        stadium={propsData.stadium}
        team1={propsData.team1}
        team2={propsData.team2}
        result={propsData.result}
        key={uuidv4()}
      />
    )
    expect(screen.getByTestId('team1').className).toBe('bg-success text-white')
    expect(screen.getByTestId('team2').className).toBe('bg-danger text-white')
    expect(screen.getByText('2 : 1')).toBeTruthy()
    expect(screen.getByText('5 : 3')).toBeTruthy()
  })

  it('Render with away win data', async () => {
    const propsData = {
      id: tablerowAwayWin.sport_event.id,
      date: tablerowAwayWin.sport_event.start_time,
      stadium: tablerowAwayWin.sport_event.venue.name,
      team1: tablerowAwayWin.sport_event.competitors[0].name,
      team2: tablerowAwayWin.sport_event.competitors[1].name,
      result: tablerowAwayWin.sport_event_status,
    }
    render(
      <TableRow
        id={propsData.id}
        date={propsData.date}
        stadium={propsData.stadium}
        team1={propsData.team1}
        team2={propsData.team2}
        result={propsData.result}
        key={uuidv4()}
      />
    )
    expect(screen.getByTestId('team1').className).toBe('bg-danger text-white')
    expect(screen.getByTestId('team2').className).toBe('bg-success text-white')
    expect(screen.getByText('0 : 5')).toBeTruthy()
    expect(screen.getByText('1 : 7')).toBeTruthy()
  })
})
