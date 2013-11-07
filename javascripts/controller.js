var Controller = {

  togglePartials: function($partialToShow) {
    Views.page().empty()
    Views.page().append($partialToShow)
  },

  showPartial: function($partial) {
    Views.page().append($partial)
  },

  addPlayer: function( event ) {
    event.preventDefault()

    var waiting = Views.waiting().clone()
    Controller.togglePartials(waiting)

    var playerName = event.target.player.value
    Sync.addPlayer(playerName);

    if(Game.checkForPlayers()){
      Game.setNonCivilianRoles();
    }
  }
}
