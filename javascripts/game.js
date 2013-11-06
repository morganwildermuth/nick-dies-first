var Game = {
  expectedPlayers: 6,

  currentPlayers: function() {
    return Object.keys(Game.players)
  },

  checkForPlayers: function() {
    if (this.currentPlayers.length === this.expectedPlayers){
      Game.setRoles()
    }
  },

  chooseRandomPlayer: function(){
    index = Math.floor((Math.random()*this.currentPlayers().length));
    return this.currentPlayers()[index]
  },

  chooseRandomCivilian: function() {
    var randomPlayerName = this.chooseRandomPlayer()
    if (this.players[randomPlayerName] != 'civilian'){
      Game.chooseRandomCivilian()
    }
    return randomPlayerName
  },

  setNonCivilianRoles: function() {
    this.setPolice()
    // set 2 mafia, 1 doctor, 1 police
  },

  setPolice: function() {
    playerName = this.chooseRandomCivilian()
    updateRole(playerName, 'police')
  }
}