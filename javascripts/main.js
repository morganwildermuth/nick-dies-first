$(document).ready(function() {
  showPartial(Views.signUp().clone())
  bindPlayerInput()
});


function showPartial($partial) {
  Views.page().append($partial)
}

function bindPlayerInput() {
  $(".new-player").submit(addPlayer)
};

function addPlayer( event ) {
  event.preventDefault()
  togglePartials(Views.waiting().clone())
  var playerName = event.target.player.value
  Sync.addPlayer(playerName);
  if(Game.checkForPlayers()){
    Game.setNonCivilianRoles();
  }
}

function togglePartials($partialToShow) {
  Views.page().empty()
  Views.page().append($partialToShow)
}

