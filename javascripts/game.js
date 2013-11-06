var Game = {
  expectedPlayers: 6,

  currentPlayers: function() {
    return Object.keys(Game.players)
  },

  checkForPlayers: function() {
    if (this.currentPlayers().length === this.expectedPlayers){
      return true
    }
    return false
  },

  chooseRandomPlayer: function(){
    index = Math.floor((Math.random()*this.currentPlayers().length));
    return this.currentPlayers()[index]
  },

  chooseRandomCivilian: function() {
    var randomPlayerName = this.chooseRandomPlayer()
    if (this.players[randomPlayerName] === 'civilian'){
      return randomPlayerName
    }
    return Game.chooseRandomCivilian()
  },

  setNonCivilianRoles: function(mafiaCount) {

    this.setRole('doctor');
    this.setRole('police');


    var mafiaCount = mafiaCount || 2
    for (var i = 0; i < mafiaCount; i++) {
      this.setRole('mafia')
    };
  },

  setRole: function(role) {
    var playerName = this.chooseRandomCivilian()
    Sync.updateRole(playerName, role)
  },

  setAllCivilianRoles: function(){
    for (var i = 0;i < this.currentPlayers().length;i++) {
      Sync.updateRole(this.currentPlayers()[i],'civilian')
    }
  }
}