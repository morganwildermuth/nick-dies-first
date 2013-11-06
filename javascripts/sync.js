var Sync = {
  url: 'https://mafia.firebaseIO.com/',

  addPlayer: function(name) {
    var playerRef = new Firebase(this.url + name)
    playerRef.set('civilian')
  },

  getPlayers: function() {
    var playerRef = new Firebase(this.url)
    playerRef.on('value', function(snapshot) {
      Game.players = snapshot.val()
    })
  },
}

$(document).ready(function(){
  Sync.getPlayers()
})