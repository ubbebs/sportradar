import { screen, render } from '@testing-library/react'
import TeamScoreboard from '../TeamScoreboard'

describe('TableComponent', () => {
  it('Render with proper HOME data', async () => {
    const data = {
      title: 'TeamName',
      team: [
        {
          time: 50,
          scorer: ['Lionel Messi'],
        },
      ],
      type: 'home',
    }
    render(
      <TeamScoreboard title={data.title} team={data.team} type={data.type} />
    )
    expect(screen.getByText('Lionel Messi', { exact: false })).toBeTruthy()
    expect(screen.getByText("50' Lionel Messi", { exact: false })).toBeTruthy()
    expect(screen.getByTestId('dependency_class').classList).not.toContain(
      'flex-row-reverse'
    )
  })

  it('Render with proper AWAY data', async () => {
    const data = {
      title: 'TeamName',
      team: [
        {
          time: 50,
          scorer: ['Cristiano Ronaldo'],
        },
      ],
      type: 'away',
    }
    render(
      <TeamScoreboard title={data.title} team={data.team} type={data.type} />
    )
    expect(screen.getByTestId('dependency_class').classList).toContain(
      'flex-row-reverse'
    )
  })
})
