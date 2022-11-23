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

    it('should failed as no correct params', () => {
        const instance = new kataBowling()
        const result = instance.roll(-1)
        expect(result).toEqual({ error: 'Invalid credentials' })
    })

    it ('', () => {
      const instance = new kataBowling()
      for (let index = 0; index < 12; index++) {
        instance.roll(10)
      }
      const result = instance.table()
      expect(result).toEqual([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]) 
    })
})
