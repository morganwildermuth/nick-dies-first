var Sync = {
  addPlayer: function(name) {
    var playerRef = new Firebase('https://mafia.firebaseIO.com/' + name)
    playerRef.set('civilian')
  },

  getPlayers: function() {
    var playerRef = new Firebase('https://mafia.firebaseIO.com/')
    playerRef.on('value', function(snapshot) {
      Game.players = snapshot.val()
    })
  },
}

$(document).ready(function(){
  Sync.getPlayers()
})