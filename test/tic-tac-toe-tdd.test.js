const board = new Map()

board.set('A1', false)
board.set('A2', false)
board.set('A3', false)
board.set('B1', false)
board.set('B2', false)
board.set('B3', false)
board.set('C1', false)
board.set('C2', false)
board.set('C3', false)

describe('tic-tac-toe', () => {
  it('should instantiate a board with 9 tiles', () => {
    expect(board.size).toEqual(9)
  })
})
