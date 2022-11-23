module.exports = class Game {
    #rollArray

    constructor() {
        this.rollArray = []
        this.score = 0
        this.currentIndex = 0
    }

    roll(hitPin) {
        if (typeof hitPin === 'number') {
            if (hitPin >= 0 && hitPin < 11) {
                this.rollArray.push(hitPin)
                return true
            }
        }
        return { error: 'Invalid credentials' }
    }

    table() {
        return this.rollArray
    }

    calculScore() {
        for (let frame = 1; frame <= 10; frame++) {
            if (this.rollArray[this.currentIndex] === 10) {
                this.score +=
                    this.rollArray[this.currentIndex] +
                    this.rollArray[this.currentIndex + 1] +
                    this.rollArray[this.currentIndex + 2]
                this.currentIndex++
            } else if (
                this.rollArray[this.currentIndex] +
                    this.rollArray[this.currentIndex + 1] ===
                10
            ) {
                this.score +=
                    this.rollArray[this.currentIndex] +
                    this.rollArray[this.currentIndex + 1] +
                    this.rollArray[this.currentIndex + 2]
                this.currentIndex = this.currentIndex + 2
            } else {
                this.score +=
                    this.rollArray[this.currentIndex] +
                    this.rollArray[this.currentIndex + 1]
                this.currentIndex = this.currentIndex + 2
            }
        }
        return this.score
    }
}
