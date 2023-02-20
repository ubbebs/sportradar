import '@testing-library/jest-dom'
import dateParse from '@/utils/dateParse'

describe('DataParse function', () => {
  it('Should convert date', () => {
    const date = '2020-08-23T13:00:00+00:00'
    expect(dateParse(date)).toBe('23.08.2020 13:00')
  })

  it('Should convert date', () => {
    const date = '2023-08-31T15:00:00+00:00'
    expect(dateParse(date)).toBe('31.08.2023 15:00')
  })
})
