describe("current players", function(){
  it("returns an array of players", function(){
    Game.players = {mctesterson: "civilian"}
    expect(Game.currentPlayers()).toContain('mctesterson')
  })
})

describe("check for correct number of players", function(){
  it("returns true if equal to expected players", function(){
    Game.players = {a:'a', b:'b', c:'c', d:'d', e:'e', f:'f'}
    Game.expectedPlayers = 6
    expect(Game.checkForPlayers()).toBeTruthy()
  })

  it("returns false if not equal to expected players", function(){
    Game.players = {a:'a', b:'b', c:'c', d:'d', e:'e'}
    Game.expectedPlayers = 6
    expect(Game.checkForPlayers()).toBeFalsy()
  })
})

describe("choose random player", function(){
  it("returns a name", function(){
    Game.players = {a:'b'}
    expect(Game.chooseRandomPlayer()).toBe('a')
  })
})

describe("choose random civilian", function(){
  it("returns the name of the civilian", function(){
    Game.players = {a:'a', b:'civilian'}
    expect(Game.chooseRandomCivilian()).toBe('b')
  })
})