let playerO
let playerX

const game = { players: [playerO, playerX] }

describe('tic-tac-toe', function () {
  it('should have two players', () => {
    const players = game.players

    expect(players.length).toEqual(2)
  })
})
