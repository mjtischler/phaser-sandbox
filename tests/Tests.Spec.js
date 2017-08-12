import { StateManager } from 'phaser'

// MT: This is where we define our loaded game.
const game = Phaser.GAMES[0]

describe('Checking that game', function () {
  // MT: On first load, we need to wait for the game to bootstrap and begin execution, hence the timeouts here. The `done()` callback signals to the test runner that it is okay to begin checking our cases.
  it('has booted', function (done) {
    setTimeout(function () {
      const getBootState = new StateManager(game).game.isBooted
      done()

      expect(getBootState).toEqual(true)
    }, 200)
  })

  it('is running', function (done) {
    setTimeout(function () {
      const getRunState = new StateManager(game).game.isRunning
      done()

      expect(getRunState).toEqual(true)
    }, 200)
  })
})
