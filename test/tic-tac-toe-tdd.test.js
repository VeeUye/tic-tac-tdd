function game() {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9]
}
describe('tic-tac-toe', () => {
  it('should instantiate a board with 9 tiles', () => {
    expect(game()).toHaveLength(9)
  })
})
