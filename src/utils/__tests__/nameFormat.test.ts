import '@testing-library/jest-dom'
import nameFormat from '@/utils/nameFormat'

describe('NameFormat function', () => {
  it('Should convert names', () => {
    const name = 'Messi, Lionel'
    expect(nameFormat(name)).toBe('Lionel Messi')
  })

  it('Should convert names', () => {
    const name = 'Andres Messi, Lionel'
    expect(nameFormat(name)).toBe('Lionel Andres Messi')
  })
})
