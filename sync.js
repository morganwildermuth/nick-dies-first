var Sync = {
  addPlayer: function(name){
    var playerRef = new Firebase('https://mafia.firebaseIO.com/' + name)
    playerRef.set('civilian')
  }
}