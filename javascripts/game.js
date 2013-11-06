var Game = {
  expectedPlayers: 6,

  currentPlayers: function() {
    return Object.keys(Game.players)
  },

  checkForPlayers: function() {
    if (this.currentPlayers.length === this.expectedPlayers){
      Game.setNonCivilianRoles()
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

  setNonCivilianRoles: function(mafiaCount) {

    this.setRole('police')
    this.setRole('doctor')

    var mafiaCount = mafiaCount || 2
    for (var i = 0; i < mafiaCount; i++) {
      this.setRole('mafia')
    };
  },

  setRole: function(role) {
    playerName = this.chooseRandomCivilian()
    Sync.updateRole(playerName, role)
  },

  setAllCivilianRoles: function(){
    for (var i = 0;i < this.currentPlayers().length;i++) {
      Sync.updateRole(this.currentPlayers()[i],'civilian')
    }
  }
}