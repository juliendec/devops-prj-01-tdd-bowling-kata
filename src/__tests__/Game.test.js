const kataBowling = require('../Game')

describe('Generate roll', () => {
  it('should failed as no correct params', () => {
    const instance = new kataBowling()
    const result = instance.roll('test')
    expect(result).toEqual({ error: 'Invalid credentials' })
  })

  it('should succeed', () => {
    const instance = new kataBowling()
    const result = instance.roll(10)
    expect(result).toEqual(true)
  })

  it('should succeed', () => {
    const instance = new kataBowling()
    const result = instance.score()
    expect(result).toEqual('')
  })
})
