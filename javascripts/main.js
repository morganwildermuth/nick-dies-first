$(document).ready(function() {
  Controller.showPartial(Views.signUp().clone())
  bindPlayerInput()
});

function bindPlayerInput() {
  $(".new-player").submit(Controller.addPlayer)
};

var Controller = {
  page: Views.page(),

  togglePartials: function($partialToShow) {
    Views.page().empty()
    Views.page().append($partialToShow)
  },

  showPartial: function($partial) {
    Views.page().append($partial)
  },

  addPlayer: function( event ) {
  event.preventDefault()
  Controller.togglePartials(Views.waiting().clone())
  var playerName = event.target.player.value
  Sync.addPlayer(playerName);
  if(Game.checkForPlayers()){
    Game.setNonCivilianRoles();
  }
}

}
