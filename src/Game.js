module.exports = class Game {
  #rollArray

  constructor () {
    this.rollArray = []
  }

  roll (hitPin) {
    if (typeof hitPin === 'number') {
      if (hitPin >= 0 && hitPin < 11) {
        this.rollArray.push(hitPin)
        return true
      }
    }
    return { error: 'Invalid credentials' }
  }

  score () {
    let text = ''
    let numRoll = 1
    for (const score of this.rollArray) {
      text += 'roll n*' + numRoll + ' : ' + score + '\n'
      numRoll++
    }
    return text
  }
}
