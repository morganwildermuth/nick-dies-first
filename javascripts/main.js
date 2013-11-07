$(document).ready(function() {
  Controller.showPartial(Views.signUp().clone())
  bindPlayerInput()
});

function bindPlayerInput() {
  $(".new-player").submit(Controller.addPlayer)
};

