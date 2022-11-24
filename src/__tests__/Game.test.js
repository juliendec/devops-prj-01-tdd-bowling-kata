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

    it('should succeed table', () => {
        const instance = new kataBowling()
        for (let index = 0; index < 12; index++) {
            instance.roll(10)
        }
        const result = instance.table()
        expect(result).toEqual([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10])
    })
    it('should succeed roll 10', () => {
        const instance = new kataBowling()
        for (let index = 0; index < 12; index++) {
            instance.roll(10)
        }
        const result = instance.calculScore()
        expect(result).toEqual(300)
    })

    it('should succeed roll 1', () => {
        const instance = new kataBowling()
        for (let index = 0; index < 20; index++) {
            instance.roll(1)
        }
        const result = instance.calculScore()
        expect(result).toEqual(20)
    })

    it('should succeed roll 5', () => {
        const instance = new kataBowling()
        for (let index = 0; index < 24; index++) {
            instance.roll(5)
        }
        const result = instance.calculScore()
        expect(result).toEqual(150)
    })

    it('should succeed roll aleatoire', () => {
        const instance = new kataBowling()
        for (let index = 0; index < 10; index++) {
            instance.roll(3)
        }
        for (let index = 0; index < 10; index++) {
            instance.roll(4)
        }
        const result = instance.calculScore()
        expect(result).toEqual(70)
    })

    it('should succeed roll aleatoire 2', () => {
        const instance = new kataBowling()
        instance.roll(3)
        instance.roll(3)

        instance.roll(7)
        instance.roll(3)

        instance.roll(5)
        instance.roll(5)

        instance.roll(2)
        instance.roll(3)

        instance.roll(2)
        instance.roll(3)

        instance.roll(2)
        instance.roll(3)

        instance.roll(2)
        instance.roll(3)

        instance.roll(10)

        instance.roll(2)
        instance.roll(3)

        instance.roll(2)
        instance.roll(3)

        const result = instance.calculScore()
        expect(result).toEqual(78)
    })
})
